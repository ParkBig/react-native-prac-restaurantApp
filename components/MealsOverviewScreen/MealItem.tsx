import { useNavigation } from "@react-navigation/native";
import { MealDetailNavigation } from "../../types/screen/screenType";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "../common/MealDetail";

interface Props {
  mealItemProps: {
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
    id: string;
  };
}

const MealItem = ({ mealItemProps }: Props) => {
  const navigation = useNavigation<MealDetailNavigation>();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: mealItemProps.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: mealItemProps.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{mealItemProps.title}</Text>
          </View>
          <MealDetail
            duration={mealItemProps.duration}
            complexity={mealItemProps.complexity}
            affordability={mealItemProps.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
