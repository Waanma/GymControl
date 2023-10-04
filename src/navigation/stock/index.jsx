import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stock } from '../../screens';
import { COLORS } from "../../constants/themes/colors";

const Stack = createNativeStackNavigator();

const StockNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Stock"
            screenOptions={{
                headerStyle: {
                    backGroundColor: "red",
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontFamily: "Agdasima-Regular",
                },
            }}>
            <Stack.Screen
                name="Stock"
                component={Stock}
                options={{ headerStyle: { backgroundColor: COLORS.night } }} />
        </Stack.Navigator>
    );
};

export default StockNavigator;