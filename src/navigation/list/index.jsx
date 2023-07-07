import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from '../../screens';
import {COLORS} from '../../constants/themes/colors';

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="List"
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
                name="List"
                component={List}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default ListNavigator;