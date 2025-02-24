import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/app/constanst/constanst";

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                animation: 'fade_from_bottom',
                headerShown: true,
                headerStyle: {
                    backgroundColor: Colors.background,
                },
                headerTitleStyle: {
                    fontFamily: 'SpaceGrotesk-Bold'
                },
                statusBarStyle: "dark",
                statusBarBackgroundColor: Colors.background,
                headerShadowVisible: false,
                contentStyle: {
                    flex: 1
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
