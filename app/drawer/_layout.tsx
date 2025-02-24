import Drawer from "expo-router/drawer";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layoutDrawer = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="user/index.tsx" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: "User",
                        title: "overview"
                    }}
                />
                <Drawer.Screen
                    name="schedule/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: "Horario",
                        title: "overview"
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};
export default _layoutDrawer;
