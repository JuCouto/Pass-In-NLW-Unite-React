//arquivo interpretado/reconhecido pelo expo router como arquivo de configuração das minhas rotas.
//centralizo as configurações que quero compartilhar com todas as minhas rotas

import "@/styles/global.css";
import { Slot } from "expo-router";

import { Loading } from "@/components/loading";

// Fontes
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  return (
    <>
      {fontsLoaded ? <Slot /> : <Loading />}
    </>
  ); // o Slot pega todas as minhas rotas e repassa
}
