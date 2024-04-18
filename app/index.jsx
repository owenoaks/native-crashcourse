import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Ora!</Text>
      <StatusBar style="auto" />
      <Link href="home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}

//SafeAreaView secures that all our content is visible on all different devices
