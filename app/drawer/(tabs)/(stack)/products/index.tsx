import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/custom-button";
import { products } from "@/mock/products.store";
import { DrawerActions } from "@react-navigation/native";

const ProductScreen = () => {
    const navigation = useNavigation();
    const ontogleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    };
    return (
        <View className="flex-1 bg-primary-background">
            <View className="flex flex-col gap-2">
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/drawer/(tabs)/(stack)/home")}
                >
                    Inicio
                </CustomButton>
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/drawer/(tabs)/(stack)/profile")}
                >
                    Perfil
                </CustomButton>

                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/drawer/(tabs)/(stack)/settings")}
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

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="mt-10 mx-8">
                        <Text className="text-2xl font-poppins-medium">
                            {item.title}
                        </Text>
                        <Text className="text-xl font-comorant-g-medium">
                            {item.description}
                        </Text>

                        <View className="flex flex-row justify-between mt-2">
                            <Text className="font-space-grotesk-bold text-primary text-xl leading-relaxed flex
                            items-center justify-center">
                                $ {item.price}
                            </Text>
                            <Link
                                href={`/drawer/(tabs)/(stack)/products/${item.id}`}
                                className="text-primary font-space-grotesk-bold"
                            >
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductScreen;
