import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "../styles/defaultStyles";
import { colors } from "../styles/colors";

type textFeildPropTypes = {
  placeholder?: string;
  placeholderTextColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  backgroundColor?: string;
  text?: "color";
  onChangeText?: () => void;
};

const textFeild: React.FC<textFeildPropTypes> = ({
  color = defaultStyles.textFeildInputText.color,
  fontSize = defaultStyles.textFeildInputText.fontSize,
  fontWeight = defaultStyles.textFeildInputText.fontWeight,
  backgroundColor = defaultStyles.textFeild.backgroundColor,
  placeholder = "Enter here",
  placeholderTextColor = defaultStyles.text.color,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <TextInput
      style={[
        defaultStyles.textFeild,
        {
          backgroundColor: backgroundColor,
          borderColor: color,
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
        },
      ]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={(newValue) => setValue(newValue)}
    ></TextInput>
  );
};

export default textFeild;
