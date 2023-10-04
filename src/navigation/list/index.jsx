import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from '../../screens';
import { COLORS } from '../../constants/themes/colors';
import ListManager from "../../screens/listManager";
import { Details, UserDetails } from "../../components";

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="List"
            screenOptions={{
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontFamily: "Agdasima-Regular",
                },
            }}>
            <Stack.Screen
                name="List"
                component={List}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: COLORS.night },
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("ListManager")}>
                            <Ionicons name="add-circle-outline" size={25} color={COLORS.secondary} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="ListManager"
                component={ListManager}
                options={{
                    title: "List Manager",
                    headerTintColor: COLORS.secondary,
                    headerStyle: { backgroundColor: COLORS.night },
                }}
            />

            <Stack.Screen
                name="UserDetails"
                component={Details}
                options={{ 
                    title: "User Details",
                    headerTintColor: COLORS.secondary,
                    headerStyle: { backgroundColor: COLORS.night },
                }}
            />
        </Stack.Navigator>
    );
};

export default ListNavigator;