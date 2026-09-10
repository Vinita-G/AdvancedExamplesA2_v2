import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";

import { defaultStyles } from "../styles/defaultStyles";
import { colors } from "../styles/colors";

type textFeildPropTypes = {
  placeholder?: string;
  placeholderTextColor?: string;
  value: string;
  color?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  backgroundColor?: string;
  text?: "color";
  onChangeText: () => void;
};

const textFeild: React.FC<textFeildPropTypes> = ({
  color = defaultStyles.textFeildText.color,
  fontSize = defaultStyles.textFeildText.fontSize,
  fontWeight = defaultStyles.textFeildText.fontWeight,
  backgroundColor = defaultStyles.textFeild.backgroundColor,
  onChangeText,
}) => {
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
      onChangeText={onChangeText}
      placeholderTextColor="lightgray"
    ></TextInput>
  );
};

export default textFeild;
