import React from "react";
import {
  TextInput,
  View
} from "react-native";
import { defaultStyles } from "../styles/defaultStyles";

type textFeildPropTypes = {
  placeholder?: string;
  placeholderTextColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  backgroundColor?: string;
  text?: string;
  onChangeText?: (newValue: string) => void;
  value: string;
  width?: number | string;
};

const textFeild: React.FC<textFeildPropTypes> = ({
  color = defaultStyles.textFeildInputText.color,
  fontSize = defaultStyles.textFeildInputText.fontSize,
  fontWeight = defaultStyles.textFeildInputText.fontWeight,
  backgroundColor = defaultStyles.textFeild.backgroundColor,
  placeholder = "Enter here",
  placeholderTextColor = defaultStyles.text.color,
  value,
  onChangeText,
}) => {
  return (
    <View style = {{ width: "80%" }}>
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
      value = {value}
      placeholder = {placeholder}
      placeholderTextColor = {placeholderTextColor}
      onChangeText = {onChangeText}
      >
      </TextInput> 
    </View>
  );
};

export default textFeild;
