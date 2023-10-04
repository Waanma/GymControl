import React from "react";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./store/index";


export default function App() {
  const [loaded] = useFonts({
    "Agdasima-Regular": require('../assets/fonts/Agdasima-Regular.ttf'),
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
    "Inconsolata-VariableFont_wdth,wght": require("../assets/fonts/Agdasima-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <AppNavigator />      
    </Provider>
  );

}
