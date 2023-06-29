import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootDrawer, RootStack } from "./types/screen/screenType";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreens from "./screens/FavoritesScreens";
import { Ionicons } from "@expo/vector-icons"

// 해당컴포넌트 내에서 useLayoutEffect와 navigation.setOptions 를 이용하여 title 설정 또한 가능하다.
// 네비게이터에는 stack, drawer, tab 이 있다.

const DrawerNavigator = () => {
  return (
    // useLegacyImplementation 는 v5 이후 사용되지 않는게 맞지만, 현재 drawer랑 reanimated 간의 버그때매
    // 사용해줘야 원활하게 작동됌 23년 6월 29일 기준.
    <RootDrawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <RootDrawer.Screen name="MealsCategories" component={CategoriesScreen} 
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <RootDrawer.Screen name="Favorites" component={FavoritesScreens}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </RootDrawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#361401" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <RootStack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const categoryId = route.params.categoryId;
              return {
                title: categoryId,
              };
            }}
          />
          <RootStack.Screen name="MealDetail" component={MealDetailScreen} 
            options={{
              title: "About the Meal"
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
