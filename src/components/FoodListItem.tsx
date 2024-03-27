import { Alert, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const FoodListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.txt1}>Pizza</Text>
        <Text style={styles.txt2}>300 cal, Domino</Text>
      </View>
      <Feather
        name="plus-circle"
        size={24}
        color="royalblue"
        onPress={() => Alert.alert("Click")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textWrapper: { flex: 1, gap: 5 },
  txt1: { fontWeight: "bold", fontSize: 16 },
  txt2: { color: "dimgray" },
});

export default FoodListItem;
