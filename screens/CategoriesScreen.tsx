import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoriesScreen/CategoryGridTile";
import { CategoriesDrawerProps } from "../types/screen/screenType";

const CategoriesScreen = ({ navigation }: CategoriesDrawerProps) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryGridTile id={item.id} title={item.title} color={item.color} />}
    />
  );
};

export default CategoriesScreen;

// flatList의 인자는 itemData(고정), itemData.item = {item} 이된다.

