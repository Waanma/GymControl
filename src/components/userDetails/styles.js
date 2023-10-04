import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 10,
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
    borderBottomColor: "black",
    backgroundColor: COLORS.inactive,
    borderColor: COLORS.primary,
    borderWidth: 0.5,
  },
  text:{
    padding: 3,
    margin: 2,
  },
});
