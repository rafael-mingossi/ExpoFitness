import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Search from "@/components/Search";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
