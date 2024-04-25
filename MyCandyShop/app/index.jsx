import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//Link component to use something similar to a
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MyCandyShop</Text>
      <StatusBar style="auto" />
      <Link
        href="/profile"
        style={{
          color: "blue",
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
        }}
      >
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
