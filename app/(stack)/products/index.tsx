import { View, Text, FlatList } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "../../components/custom-button";
import { products } from "@/app/mock/products.store";

const ProductScreen = () => {
    return (
        <View className="mb-6">
            <Text className="text-6xl font-poppins-medium text-primary leading-normal">
                Productos
            </Text>
            <View className="flex flex-col gap-2">
                <CustomButton
                    color="primary"
                    variant="contain"
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

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <View className="mt-10">
                <Text className="text-2xl font-work-black">{item.title}</Text>
                <Text className="">{item.description}</Text>

                <View className="flex flex-row justify-between mt-2">
                  <Text className="font-work-black">{item.price}</Text>
                  <Link
                    href={`/(stack)/products/${item.id}`}
                    className="text-primary"
                  >
                    Ver detalles
                  </Link>
                </View>
              </View>
                                        }
            />
        </View>
    );
};

export default ProductScreen;
