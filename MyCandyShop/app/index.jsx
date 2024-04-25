import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
//Link component to use something similar to a
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50">
      <Text className="text-3xl font-pmedium">MyCandyShop</Text>
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
