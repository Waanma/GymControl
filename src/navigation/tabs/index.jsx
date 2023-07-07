import React from "react"
import IonIcons from '@expo/vector-icons/Ionicons';
import ListNavigator from "../list"
import StockNavigator from "../stock"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants/themes/colors";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    const tabBarIconSize = 25;
    return (
        <BottomTab.Navigator
            initialRouteName="ListTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "Agdasima-Regular",
                    fontSize: 20,
                },
                tabBarActiveTintColor: COLORS.secondary,
                tabBarInactiveBackgroundColor: COLORS.night,
                tabBarIconSize: tabBarIconSize,
            }}
        >
            <BottomTab.Screen
                name="ListTab"
                component={ListNavigator}
                options={{
                    tabBarLabel: "List",
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcons name={focused ? 'list' : 'list-outline'} size={focused ? tabBarIconSize + 5 : tabBarIconSize} color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="StockTab"
                component={StockNavigator}
                options={{
                    tabBarLabel: "Stock",
                    tabBarIcon: ({ focused, color, size }) => (
                        <IonIcons
                            name={focused ? "cube" : "cube-outline"}
                            color={color}
                            size={focused ? tabBarIconSize + 5 : tabBarIconSize}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;