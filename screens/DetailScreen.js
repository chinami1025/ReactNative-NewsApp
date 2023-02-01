import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default DetailScreen = ({ route }) => {
  const { article } = route.params;
  return <WebView source={{ uri: article.url }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
