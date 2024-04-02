import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Link href={"/search"}>Add Food</Link>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
