import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const UserDetails = ({ id, newUserName, navigation }) => {
  const onPress = (id) => {
    navigation.navigate("UserDetails", { placeId: id });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.text}>Name: {newUserName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserDetails;