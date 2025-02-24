import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/custom-button";

const Profile = () => {
    return (
        <View className="flex-1 bg-primary-background">
        <View className="flex flex-col gap-2">
            <CustomButton
                color="primary"
                variant='contain'
                onPress={() => router.push("/drawer/(tabs)/(stack)/home")}
            >
                Inicio
            </CustomButton>
            <CustomButton
                color="primary"
                variant="contain"
                onPress={() => router.push("/drawer/(tabs)/(stack)/products")}
            >
                Productos
            </CustomButton>

            <CustomButton
                color="primary"
                variant="contain"
                onPress={() => router.push("/drawer/(tabs)/(stack)/settings")}
            >
                Ajuste de Pantalla
            </CustomButton>
        </View>

    </View>
    );
};

export default Profile;
