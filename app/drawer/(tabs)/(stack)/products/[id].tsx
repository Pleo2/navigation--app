import { products } from "@/mock/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const ProductScreen = () => {
    const { id } = useLocalSearchParams();

    const product = products.find((p) => p.id == id);

    if (!product) {
        return <Redirect href="/" />;
    }

    return (
        <View className="mt-2 mx-8 flex-1 bg-primary-background">
            <Text className="text-2xl font-poppins-medium">
                {product.title}
            </Text>
            <Text className="text-xl font-comorant-g-medium">
                {product.description}
            </Text>
            <Text
                className="font-space-grotesk-bold text-primary text-2xl leading-relaxed flex items-center justify-center"
            >
                $ {product.price}
            </Text>
        </View>
    );
};
export default ProductScreen;
