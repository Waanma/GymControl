import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles"

const Details = ({ route }) => {
    const {
        newUserName,
        newUserPhone,
        newUserAge,
        newUserDni,
        newUserAdress,
    } = route.params;
    return (        
            <SafeAreaView style={styles.container}>
                <View style={styles.dataContainer}>
                <View style={styles.nameContainer}>
                <Text style={styles.name}>{newUserName}</Text>
                </View>
                <Text >Phone: {newUserPhone}</Text>
                <Text >Age: {newUserAge}</Text>
                <Text >Dni: {newUserDni}</Text>
                <Text >Adress: {newUserAdress}</Text>
                </View>
                <View style={styles.countContainer}>
                    <View style={styles.count}>
                        <Text>Count</Text>
                    </View>
                    <View style={styles.countContent}>
                    <Text>Days of the week:</Text>
                    <Text>Week:</Text>
                    <Text>Days left:</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.paySistem}>
                        <Text>Pay sistem</Text>
                    </View>
                    <View style={styles.payContent}>
                    <Text>Cash/creditCard</Text>
                    <Text>$</Text>
                    </View>
                </View>
            </SafeAreaView>
    );
};

export default Details;