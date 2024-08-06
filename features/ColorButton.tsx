import { getContrastColor, generateRandomColor } from "../utils/color";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export function ColorButton({ children }: { children: string }) {
  const [bgColor, setBgColor] = useState("#FFF");
  const contrastColor = useMemo(() => getContrastColor(bgColor), [bgColor]);

  return (
    <Pressable
      style={[styles.fullScreen, { backgroundColor: bgColor }]}
      onPress={() => setBgColor(generateRandomColor())}
    >
      <Text style={[styles.text, { color: contrastColor }]}>{children}</Text>
    </Pressable>
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
