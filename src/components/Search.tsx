import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Search = () => {
  const [search, setSearch] = useState("");

  function clearInput() {
    setSearch("");
  }
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={22} color="royalblue" />
      <TextInput
        placeholder={"Search..."}
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      {search && (
        <AntDesign name="close" size={16} color="black" onPress={clearInput} />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#f2f2f2",
  //   padding: 10,
  //   gap: 10,
  // },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 12,
    borderRadius: 200,
  },
  input: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    flex: 1,
  },
});
