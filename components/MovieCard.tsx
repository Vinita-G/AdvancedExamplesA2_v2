import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";

type cardPropTypes = {
  text: string;
  genre?: string;
  rating?: number;
  watched: boolean;
  onToggleWatched: () => void;
};
