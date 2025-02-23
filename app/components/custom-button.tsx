import React from "react";
import { View, Text, Pressable } from "react-native";
import { type PressableProps } from "react-native/Libraries/Components/Pressable/Pressable";

interface Props extends PressableProps {
    children: string;
    color: "primary" | "secondary" | "contrast";
    variant?: "outline" | "contain" | "unstyled";
}
const FONTSIZE = 'text-3xl';

const CustomButton = React.forwardRef(
    (
        { children, color, variant, onPress, onLongPress, ...rest }: Props,
        ref: React.Ref<View>
    ) => {

        const btnColor = {
            primary: ["bg-foreground", "text-secondary"],
            secondary: ["bg-highlight", "text-primary"],
            contrast: ["bg-contrast", "text-primary"]
        }[color];

        {
            if (variant === "outline")
                return (
                    <Pressable
                        className={`px-2 py-1 w-1/2 active:opacity-90 active:scale-95`}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        ref={ref}
                    >
                        <Text
                            className={`${btnColor[1]} ${FONTSIZE} font-comorant-g-medium leading-normal text-center`}
                        >
                            {children}
                        </Text>
                    </Pressable>
                );
        }
        {
            if (variant === "unstyled")
                return (
                    <Pressable
                        className={`w-1/2`}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        ref={ref}
                    >
                        <Text
                            className={`${btnColor[1]} ${FONTSIZE} font-comorant-g-medium leading-normal`}
                        >
                            {children}
                        </Text>
                    </Pressable>
                );
        }

        return (
            <Pressable
                className={`${btnColor[0]} mx-auto w-2/3 px-4 py-2 rounded-md active:opacity-90 active:scale-95`}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text
                    className={`${btnColor[1]} ${FONTSIZE} font-comorant-g-medium leading-normal text-center`}
                >
                    {children}
                </Text>
            </Pressable>
        );
    }
);

export default CustomButton;
