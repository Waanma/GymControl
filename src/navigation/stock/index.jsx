import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stock } from '../../screens';

const Stack = createNativeStackNavigator();

const StockNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Stock"
            screenOptions={{
                headerStyle: {
                    backGroundColor: "red",
                },
                headerTintColor: "green",
                headerTitleStyle: {
                    fontFamily: "Agdasima-Regular",
                },
            }}>
            <Stack.Screen
                name="Stock"
                component={Stock}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StockNavigator;