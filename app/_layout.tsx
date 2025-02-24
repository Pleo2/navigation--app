import { SafeAreaView, StatusBar, StyleSheet, View, Platform } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "./style/global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { Colors } from "./constanst/constanst";
import { Drawer } from 'expo-router/drawer';


SplashScreen.preventAutoHideAsync();

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync(Colors.primary);
}

const RootLayout = () => {
    const [fontLoaded, error] = useFonts({
        "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-MediumItalic": require("../assets/fonts/Poppins/Poppins-MediumItalic.ttf"),

        "CormorantGaramond-Regular": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf"),
        "CormorantGaramond-Italic": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-Italic.ttf"),
        "CormorantGaramond-Medium": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-Medium.ttf"),
        "CormorantGaramond-MediumItalic": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-MediumItalic.ttf"),
        "CormorantGaramond-Bold": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf"),
        "CormorantGaramond-BoldItalic": require("../assets/fonts/Cormorant_Garamond/CormorantGaramond-BoldItalic.ttf"),

        "SpaceGrotesk-Regular": require("../assets/fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf"),
        "SpaceGrotesk-Medium": require("../assets/fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf"),
        "SpaceGrotesk-SemiBold": require("../assets/fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf"),
        "SpaceGrotesk-Bold": require("../assets/fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf"),
        "SpaceGrotesk-Light": require("../assets/fonts/Space_Grotesk/SpaceGrotesk-Light.ttf")
    });

    useEffect(() => {
        if (error) throw new Error(`font not loaded: ${error}`);
        if (fontLoaded) SplashScreen.hideAsync();
        if (!fontLoaded && !error) null;
    }, [fontLoaded, error]);

    return <Slot/>
                 {/* <GestureHandlerRootView className="flex-1"> */}
                    {/* <Drawer /> */}
                    // <Slot/>
                    {/* <Stack/> */}
                 {/* </GestureHandlerRootView> */}
};

export default RootLayout;

const styles = StyleSheet.create({});
