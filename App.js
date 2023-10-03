import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
