import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";



export default function RootLayout() {

  SplashScreen.preventAutoHideAsync();
 const [loaded, error] = useFonts({
    "OldEnglish-Bold": require('../../assets/font-family/RibeyeMarrow-Regular.ttf'),
    "CormorantUnicase": require('../../assets/font-family/Cormorant_Unicase/CormorantUnicase-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return ( 
    <Stack
      screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
