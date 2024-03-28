import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import FoodListItem from "@/components/FoodListItem";
import Search from "@/components/Search";
const itemsList = [
  { label: "Pizza", cal: 100, brand: "Domino" },
  { label: "Pizza1", cal: 1001, brand: "Domino1" },
  { label: "Pizza2", cal: 1002, brand: "Domino2" },
  { label: "Pizza3", cal: 1002, brand: "Domino3" },
  { label: "Pizza4", cal: 1003, brand: "Domino4" },
  { label: "Pizza5", cal: 1004, brand: "Domino5" },
];
const Home = () => {
  return (
    <View style={styles.container}>
      <Search />

      <FlatList
        data={itemsList}
        renderItem={({ item }) => (
          <FoodListItem label={item.label} cal={item.cal} brand={item.brand} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
});

export default Home;
