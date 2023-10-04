import React from "react";
import { View, TextInput, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Browser = () => {
    const [text, onChangeText] = React.useState('Search');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.browserContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Browser;