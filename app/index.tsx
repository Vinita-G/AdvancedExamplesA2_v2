import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { defaultStyles } from "../styles/defaultStyles";
import Button from "../components/Button";

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
        <Button text="customizable MyButton" onPress={() => alert("third")} />
      </View>
    </ScrollView>
  );
}
