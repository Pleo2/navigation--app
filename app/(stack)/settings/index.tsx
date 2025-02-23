import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/app/components/custom-button";

const Products = () => {
    return (
        <View className="mb-6">
        <Text className="text-6xl font-poppins-medium text-primary leading-normal">
            Ajustes de Pantalla
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
                variant='contain'
                onPress={() => router.push("/products")}
            >
                Productos
            </CustomButton>
            <CustomButton
                color="primary"
                variant="contain"
                onPress={() => router.push("/profile")}
            >
                Perfil
            </CustomButton>
        </View>
        </View>
    );
};

export default Products;
