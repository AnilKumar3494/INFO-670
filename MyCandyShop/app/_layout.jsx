import { StyleSheet, Text, View } from "react-native";
import React from "react";

//using slot property from expo to render different screens -
//using Stack for diffrent screens from expo for routing - navigation and layouts
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
