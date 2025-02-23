import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "../../components/custom-button";

const Products = () => {
    return (
        <View className="mb-6">
            <Text className="text-6xl font-poppins-medium text-primary leading-normal">
                Productos
            </Text>
            <View className="flex flex-col gap-2">
                <CustomButton
                    color="primary"
                    variant='contain'
                    onPress={() => router.push("/home")}
                >
                    Inicio
                </CustomButton>
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/profile")}
                >
                    Perfil
                </CustomButton>

                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/settings")}
                >
                    Ajustes de Pantalla
                </CustomButton>
            </View>

        </View>
    );
};

export default Products;
