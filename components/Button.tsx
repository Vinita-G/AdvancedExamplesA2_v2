import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";

import { defaultStyles } from "../styles/defaultStyles";

type buttonPropsType = {
  text: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  onPress: () => void;
};

const Button: React.FC<buttonPropsType> = ({
  text,
  color = defaultStyles.buttonText.color,
  backgroundColor = defaultStyles.button.backgroundColor,
  fontSize = defaultStyles.buttonText.fontSize,
  fontWeight = defaultStyles.buttonText.fontWeight,
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={[
        defaultStyles.button,
        { backgroundColor: backgroundColor, borderColor: color },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          defaultStyles.buttonText,
          { color: color, fontSize: fontSize, fontWeight: fontWeight },
        ]}
      >
        {" "}
        {text}{" "}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
