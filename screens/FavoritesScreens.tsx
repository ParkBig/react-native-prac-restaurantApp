import MealsList from "../components/FavoritesScreens/MealsList";
import useFavoritesStore from "../store/useFavoritesStore";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreens = () => {
  const { ids } = useFavoritesStore();

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    )
  }

  return <MealsList mealItems={favoriteMeals} />
};

export default FavoritesScreens;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
})
