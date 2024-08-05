import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const generateRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

const getContrastColor = (bgColor: string) => {
  // https://en.wikipedia.org/wiki/Luma_(video)
  // Y=0.2126R+0.7152G+0.0722B
  let color = bgColor.substring(1); // remove #
  if (color.length === 3) {
    color = color
      .split("")
      .map(c => c + c)
      .join("");
  }
  const rgb = parseInt(color, 16);
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 128 ? "#FFF" : "#000";
};
export default function App() {
  const [bgColor, setBgColor] = useState("#FFF");

  return (
    <View style={styles.fullScreen}>
      <Pressable
        style={[styles.fullScreen, { backgroundColor: bgColor }]}
        onPress={() => setBgColor(generateRandomColor())}
      >
        <Text style={[styles.text, { color: getContrastColor(bgColor) }]}>
          Hello there
        </Text>
      </Pressable>
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
  text: {
    fontSize: 42,
    userSelect: "none",
  },
});
