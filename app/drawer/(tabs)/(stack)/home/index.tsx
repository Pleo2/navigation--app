import { View, Text } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/custom-button";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    const ontogleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    };
    return (
        <View className="flex-1 bg-primary-background ">
            <View className="flex-1 gap-2">
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() =>
                        router.push("/drawer/(tabs)/(stack)/products")
                    }
                >
                    Productos
                </CustomButton>
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() =>
                        router.push("/drawer/(tabs)/(stack)/profile")
                    }
                >
                    Perfil
                </CustomButton>

                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() =>
                        router.push("/drawer/(tabs)/(stack)/settings")
                    }
                >
                    Ajustes de Pantalla
                </CustomButton>

                <CustomButton
                    color="secondary"
                    variant="contain"
                    onPress={ontogleDrawer}
                >
                    abrir menu
                </CustomButton>
            </View>
        </View>
    );
};

export default HomeScreen;
