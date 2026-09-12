import MovieQuesions from "@/components/MovieQuesions";
import TextFeild from "@/components/TextFeild";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View
} from "react-native";
import Button from "../components/Button";
import { defaultStyles } from "../styles/defaultStyles";

export default function Index() {
  // 1. Track visibility state (true/false)
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ScrollView style={defaultStyles.scrollView}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={defaultStyles.title}>Movie Tracker</Text>
        <Button
          text="Create a Movie Card!"
          onPress={() => setIsVisible(!isVisible)}>
        </Button>

        <TextFeild value = "Hello, World!"/>

        {/* Open a questionaire to create a movie card */}
        {isVisible && (<MovieQuesions />)}
      </View>
    </ScrollView>
  );
}
