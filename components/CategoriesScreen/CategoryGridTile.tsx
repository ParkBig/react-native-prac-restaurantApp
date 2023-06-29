import { useNavigation } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { CategoriesNavigation } from "../../types/screen/screenType";

interface Props {
  id: string;
  title: string;
  color: string;
}

const CategoryGridTile = (props: Props) => {
  const { navigate } = useNavigation<CategoriesNavigation>();

  const pressHandler = () => {
    navigate("MealsOverview", {
      categoryId: props.id,
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", // ios에서 백그라운드컬러가없으면 아래 쉐도우~ 애들이 안먹히기때문에 넣어줌
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }), // ios에서 히든이되면 쉐도우 애들 사라지기때문에
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
