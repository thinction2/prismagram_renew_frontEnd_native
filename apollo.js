import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const toKenVar = makeVar("");

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", token],
    ["loggedIn", JSON.stringify("yes")],
  ]);
  isLoggedInVar(true);
  toKenVar(token);
};

const client = new ApolloClient({
  uri: "http://192.168.123.103:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
