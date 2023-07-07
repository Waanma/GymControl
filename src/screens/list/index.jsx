import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

const List = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>List</Text>
            </View>
        </SafeAreaView>
    );
};

export default List;