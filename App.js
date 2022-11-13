import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Aatmaj From 🦍{"\n\n"}</Text>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/83284294?v=4",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{"\n\n"}</Text>
      <Button
        title="Get Score"
        color="#841584"
        accessibilityLabel="Get The Score Of The Test"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
