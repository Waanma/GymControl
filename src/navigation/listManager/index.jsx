import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListManager from "../../screens/listManager";
import { COLORS } from "../../constants/themes/colors";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const ListManagerNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="ListManager"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.night
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}>
            <Stack.Screen
                name="ListManager"
                component={ListManager}
                options={({ navigation }) => ({
                    title: "List Manager",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("ListManager")}>
                            <Ionicons name="add-circle-outline" size={25} color={COLORS.secondary} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    )
};

export default ListManagerNavigator;