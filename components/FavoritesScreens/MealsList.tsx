import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealsOverviewScreen/MealItem";
import Meal from "../../models/meal";

interface Props {
  mealItems: Meal[]
}

const MealsList = ({ mealItems }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={mealItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem mealItemProps={item} />}
      />
    </View>
  )
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
