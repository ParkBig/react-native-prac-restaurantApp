import { StyleSheet, Text, View } from "react-native";

interface Props {
  data: string[];
}

const List = ({ data }: Props) => {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
