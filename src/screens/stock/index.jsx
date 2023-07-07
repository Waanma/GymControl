import React from "react";
import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

const Stock = () => {
    return (
        <SafeAreaView styles={styles.container}>
            <View>
                <Text>Stock</Text>
            </View>
            <FlatList />
        </SafeAreaView>
    );
};

export default Stock;