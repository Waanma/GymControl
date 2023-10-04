import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { addUser } from "../../store/actions/list.action.js"
import { COLORS } from "../../constants/themes/colors";

const ListManager = ({ navigation }) => {
    const [newUserName, setNewUserName] = useState("");
    const [newUserPhone, setNewUserPhone] = useState("");
    const [newUserDni, setNewUserDni] = useState("");
    const [newUserAdress, setNewUserAdress] = useState("");
    const [newUserAge, setNewUserAge] = useState("");

    const dispatch = useDispatch();

    const enableButton = newUserName && newUserPhone && newUserDni && newUserAdress && newUserAge;

    const handleAddUser = () => {
        const newUser = {
            id: Math.random(),
            newUserName,
            newUserPhone,
            newUserAge,
            newUserDni,
            newUserAdress,
        };
        dispatch(addUser(newUser));
        setNewUserName("");
        setNewUserPhone("");
        setNewUserDni("");
        setNewUserAdress("");
        setNewUserAge("");
        navigation.navigate("List");
    }
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    value={newUserName}
                    onChangeText={setNewUserName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={newUserPhone}
                    onChangeText={setNewUserPhone}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={newUserAge}
                    onChangeText={setNewUserAge}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="DNI"
                    value={newUserDni}
                    onChangeText={setNewUserDni}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Adress"
                    value={newUserAdress}
                    onChangeText={setNewUserAdress}
                />
                <Button
                    title="Add User"
                    color={COLORS.primary}
                    onPress={handleAddUser}
                    disabled={!enableButton}
                />
            </View>
        </View>
    )

}

export default ListManager;