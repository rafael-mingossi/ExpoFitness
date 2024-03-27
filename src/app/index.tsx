import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FoodListItem from "@/components/FoodListItem";
const Home = () => {
  return (
    <View style={styles.container}>
      <FoodListItem />
      <FoodListItem />
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
