import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../styles/colors";
import { defaultStyles } from "../styles/defaultStyles";
import Button from "../components/Button";
import TextFeild from "../components/TextFeild";

export default function Index() {
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
          onPress={() => alert("open a TextFeild")}
        />
        <TextFeild />
      </View>
    </ScrollView>
  );
}
