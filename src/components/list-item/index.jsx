import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ id, newUserName, newUserPhone, newUserAge, newUserDni, newUserAdress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.navigate("UserDetails", {
        newUserName: newUserName,
        newUserPhone: newUserPhone,
        newUserAge: newUserAge,
        newUserDni: newUserDni,
        newUserAdress: newUserAdress,
      });
    }}>
      <View style={styles.listContainer}>
        <Text style={styles.text}>Name: {newUserName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;