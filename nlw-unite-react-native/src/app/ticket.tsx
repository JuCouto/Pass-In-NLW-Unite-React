import { Header } from "@/components/header";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Ticket() {
  return <View className="flex-1 bg-green-500">
    <StatusBar style="light" />
    <Header title="Minha credencial" />
  </View>
}