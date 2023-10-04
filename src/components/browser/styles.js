import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 5,
    
  },
  browserContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  button:{
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.night,
    padding: 5,
    borderRadius: 5,
    width: 10,
    marginRight: 10,
  },
  buttonText:{
    color: COLORS.secondary,
    padding: 5,
    height: 30,
  },
});
