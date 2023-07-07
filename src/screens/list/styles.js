import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    paddingTop: StatusBar.currentHeight,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "LibreBaskerville-Bold",
  },
});
