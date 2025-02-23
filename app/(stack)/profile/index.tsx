import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/app/components/custom-button";

const Profile = () => {
    return (
        <View className="mb-6">
        <Text className="text-6xl font-poppins-medium text-primary leading-normal">
            Perfil
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
                onPress={() => router.push("/products")}
            >
                Productos
            </CustomButton>

            <CustomButton
                color="primary"
                variant="contain"
                onPress={() => router.push("/settings")}
            >
                Ajuste de Pantalla
            </CustomButton>
        </View>

    </View>
    );
};

export default Profile;
