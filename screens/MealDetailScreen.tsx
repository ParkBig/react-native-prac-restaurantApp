import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { MealDetailScreenProps } from "../types/screen/screenType";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/common/MealDetail";
import Subtitle from "../components/MealDetailScreen/Subtitle";
import List from "../components/MealDetailScreen/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/common/IconButton";
import useFavoritesStore from "../store/useFavoritesStore";

const MealDetailScreen = ({ route, navigation }: MealDetailScreenProps) => {
  const { ids, addFavorite, removeFavorite } = useFavoritesStore();
  
  
  const mealId = route.params.mealId;
  const mealIsFavorite = ids.includes(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  if (!selectedMeal) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }
  
  const changeFavoritesStatusHandler = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId)
    } else {
      addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoritesStatusHandler} />
      }
    })
  }, [navigation, mealIsFavorite])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
