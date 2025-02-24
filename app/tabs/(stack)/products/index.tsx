import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/app/components/custom-button";
import { products } from "@/app/mock/products.store";

const ProductScreen = () => {
    return (
        <View className="mb-6">
            <View className="flex flex-col gap-2">
                <CustomButton
                    color="primary"
                    variant="contain"
                    onPress={() => router.push("/tabs/(stack)/home")}
                >
                    Inicio
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
                            <Text className="font-space-grotesk-bold text-primary text-2xl leading-relaxed flex
                            items-center justify-center">
                                $ {item.price}
                            </Text>
                            <Link
                                href={`/tabs/(stack)/products/${item.id}`}
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
