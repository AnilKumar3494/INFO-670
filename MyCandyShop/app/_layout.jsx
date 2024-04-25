import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

//using slot property from expo to render different screens - this renders current child route
//using Stack - diffrent screens from expo for routing - navigation and layouts
import { Slot, SplashScreen, Stack } from "expo-router";

//using fonts that are imported and being used
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  //useEffect hook to perfom some actions when the screen is loading
  useEffect(() => {
    if (error) throw error;

    //Hides the native splash screen immediately. Be careful to ensure that your app has content ready to display when you hide the splash screen, or you may see a blank screen briefly. See the "Usage" section for an example.
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      {/* Stack used to create screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
