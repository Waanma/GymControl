import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    gap: 50,
  },
  browserContainer: {
  flex: 1,
  width: "70%",
},
  flatList:{
}
});
