import { SafeAreaView, StatusBar, StyleSheet, View, Platform } from "react-native";
import "./global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';

SplashScreen.preventAutoHideAsync();


const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('#F0EEE6');
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

    return (
        <View className="bg-background flex-1">
            <SafeAreaView className="flex-1 bg-background h-full w-full">
                <Slot />
            </SafeAreaView>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#F0EEE6"}/>
        </View>
    );
};

export default RootLayout;

const styles = StyleSheet.create({});
