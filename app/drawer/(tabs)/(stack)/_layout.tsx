import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { Colors } from "@/constanst/constanst";
import { Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {
      if (canGoBack) {
        // navigation.dispatch(StackActions.pop());
        router.back();
        return;
      }

      navigation.dispatch(DrawerActions.toggleDrawer);
    };
    return (
        <Stack
            screenOptions={{
                animation: "fade",
                // headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.primary
                },
                headerTitleStyle: {
                    fontFamily: "SpaceGrotesk-Bold"
                },
                // statusBarStyle: "dark",
                // statusBarBackgroundColor: Colors.primary, esto se desactiva si tienes un tab como padre
                headerShadowVisible: false,
                contentStyle: {
                    flex: 1,
                    paddingTop: 12,
                    backgroundColor: Colors.primary
                },
                // headerLeft: ({ tintColor, canGoBack }) => (
                //     <Ionicons
                //       name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                //       className="mr-6"
                //       size={20}
                //       onPress={() => onHeaderLeftClick(canGoBack as boolean)}
                //     />
                // ),
                headerBackVisible: true,

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
