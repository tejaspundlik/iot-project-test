import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const [sound, setSound] = React.useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Score.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.container}>
      <Text>Hello! Welcome To /appName/{"\n\n"}</Text>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1491/1491517.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{"\n\n"}</Text>
      <Button
        title="Get Score"
        color="#841584"
        accessibilityLabel="Gets The Score Of The Test"
        onPress={playSound}
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
