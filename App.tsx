import { StyleSheet, View } from "react-native";
import {ColorButton} from "./features/ColorButton";

export default function App() {
  return (
    <View style={styles.fullScreen}>
      <ColorButton>Hello there</ColorButton>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
