import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FoodListItem from "@/components/FoodListItem";
import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          nutrients {
            ENERC_KCAL
          }
          brand
          foodId
        }
      }
    }
  }
`;
const Search = () => {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    runSearch({ variables: { ingr: search } }).then((r) => {});
  };

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  // const [runSearch, { data, loading, error }] = useLazyQuery(query, {
  //   variables: { ingr: search },
  // });

  // const { data, loading, error } = useQuery(query, {
  //   variables: { ingr: "Pizza" },
  // });

  const items = data?.search?.hints ?? [];

  function clearInput() {
    setSearch("");
  }

  // console.log(JSON.stringify(data, null, 2));

  const ErrorListView = () => {
    return (
      <View>
        <Text>An Error has occurred!</Text>
      </View>
    );
  };

  const EmptyList = () => {
    return (
      <View style={styles.container}>
        <Text>Search for food items...</Text>
      </View>
    );
  };

  if (error) return <ErrorListView />;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={22} color="royalblue" />
        <TextInput
          placeholder={"Search..."}
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        {search && (
          <AntDesign
            name="close"
            size={16}
            color="black"
            onPress={clearInput}
          />
        )}
      </View>
      <Pressable
        onPress={performSearch}
        style={[styles.button, search.length < 3 ? styles.disabled : null]}
      >
        <Text
          style={[
            styles.buttonText,
            search.length < 3 ? styles.textDisabled : null,
          ]}
        >
          Search
        </Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={items}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => <EmptyList />}
          renderItem={({ item }) => <FoodListItem item={item} />}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    gap: 10,
    width: "100%",
  },
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
  button: {
    width: "100%",
    backgroundColor: "royalblue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  disabled: {
    pointerEvents: "none",
    backgroundColor: "#d2d2d2",
  },
  buttonText: {
    color: "white",
  },
  textDisabled: {
    color: "black",
  },
});
