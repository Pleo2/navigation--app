import CustomDrawer from "@/components/custom-drawer";
import { Colors } from "@/constanst/constanst";
import { Ionicons } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import { Text } from "react-native";

const _layoutDrawer = () => {
    return (
        <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.1)',
            sceneStyle: {
                backgroundColor: Colors.primary
            },
            headerStyle:{
                backgroundColor: Colors.primary, // cambiar el color del header
            },
            headerShadowVisible: false,
            headerShown: true,
            headerTintColor: Colors.foreground,
            drawerLabelStyle: {
                fontFamily: "SpaceGrotesk-Bold"
            },
            drawerActiveTintColor: Colors.contrast,
            headerBackgroundContainerStyle: {
                backgroundColor: Colors.contrast
            },
            drawerStyle: {
                 backgroundColor: Colors.primary
            }
        }}
    >
        <Drawer.Screen
            name="(tabs)"
            options={{
                headerShown: false,// motrar el header en esta section
                drawerLabel: "Inicio",
                title: "Mi App",
                drawerIcon: () => <Ionicons name="analytics-outline"/>
            }}
        />
        <Drawer.Screen
            name="user/index"
            options={{
                drawerLabel: "Usuario",
                title: "Perfil",
                drawerIcon: () => <Ionicons name="person-outline" />
            }}
        />
    </Drawer>
    );
};
export default _layoutDrawer;
