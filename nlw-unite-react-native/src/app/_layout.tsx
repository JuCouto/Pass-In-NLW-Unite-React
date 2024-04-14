//arquivo interpretado/reconhecido pelo expo router como arquivo de configuração das minhas rotas.
//centralizo as configurações que quero compartilhar com todas as minhas rotas

import "../styles/global.css";
import { Slot } from "expo-router";

export default function Layout() {
  return <Slot />; // o Slot pega todas as minhas rotas e repassa
}
