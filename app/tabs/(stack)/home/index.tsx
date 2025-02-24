import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/app/components/custom-button";

const HomeScreen = () => {
    return (
        <View className="mb-6">
            <View className="flex flex-col gap-2">
                <CustomButton
                    color="primary"
                    variant='contain'
                    onPress={() => router.push("/tabs/(stack)/products")}
                >
                    Productos
                </CustomButton>


                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/tabs/(stack)/profile")}
                >
                    Perfil
                </CustomButton>

                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/tabs/(stack)/settings")}
                >
                    Ajustes de Pantalla
                </CustomButton>
            </View>

        </View>
    );
};

export default HomeScreen;
