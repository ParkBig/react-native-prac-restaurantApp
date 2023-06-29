import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationProp } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
  MealsCategories: undefined;
  Favorites: undefined;
}

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

// CategoriesScreen
export type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Drawer"
>;
export type CategoriesNavigation = NavigationProp<
  RootStackParamList,
  "Drawer"
>;
export type CategoriesDrawerProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, "MealsCategories">
}

//MealDetailScreen
export type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;
export type MealDetailNavigation = NavigationProp<
  RootStackParamList,
  "MealDetail"
>;

// MealsOverviewScreen
export type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;
