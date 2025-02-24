import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack

            screenOptions={{
                animation: 'fade_from_bottom',
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#F0EEE6",
                },
                headerTitleStyle: {
                    fontFamily: 'SpaceGrotesk-Bold'
                },
                statusBarStyle: "dark",
                statusBarBackgroundColor: "#F0EEE6",
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: "#F0EEE6",
                }
            }}
        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: "Inicio"
                }}
            />
            <Stack.Screen
                name="products/index"
                options={{
                    title: "Productos"
                }}
            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: "Perfil"
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: "Ajustes de Pantalla"
                }}
            />

            <Stack.Screen
                name="products/[id]"
                options={{
                    title: "Producto"
                }}
            />
        </Stack>
    );
};

export default StackLayout;
