import { MealsOverviewScreenProps } from "../types/screen/screenType";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/FavoritesScreens/MealsList";

const MealsOverviewScreen = ({ route }: MealsOverviewScreenProps) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealsList mealItems={displayedMeals} />;
};

export default MealsOverviewScreen;
