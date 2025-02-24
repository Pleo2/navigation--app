import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constanst/constanst";

const TabsLayout = () => {
    return (
        <>
        <StatusBar
                backgroundColor={Colors.primary}
                barStyle="dark-content"
            />
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerShown: false,
                    tabBarActiveTintColor: Colors.contrast,
                    tabBarLabelStyle: {
                        fontFamily: "SpaceGrotesk-Bold"
                    },
                    tabBarShowLabel: false
                    // tabBarActiveBackgroundColor: Colors.foreground // da color al icono activo
                }}
            >
                <Tabs.Screen
                    name="(stack)"
                    options={{

                        title: "inicio",
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="file-tray-stacked-outline"
                                color={color}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="settings/index"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                size={28}
                                name="settings-outline"
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="favorites/index"
                    options={{
                        title: "Favorites",
                        tabBarIcon: ({ color }) => (
                            <Ionicons size={28} name="star-outline" color={color} />
                        )
                    }}
                />
            </Tabs>
        </>
    );
};
export default TabsLayout;
