/**
 * src/screens/HomeScreen.js
 * ---------------------------------------------------------------------------
 * Tela exibida quando existe um usuário autenticado.
 *
 * O objeto recebido é o User do Firebase, e não o perfil bruto do Google.
 * Campos disponíveis: uid, displayName, email, photoURL, emailVerified.
 *
 * O uid é o identificador que deve ser usado como chave dos dados do usuário
 * no Firestore -- ele não muda, mesmo que a pessoa troque o e-mail.
 * ---------------------------------------------------------------------------
 */
import { useState } from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { sair } from "../services/autenticacao";
import CurriculoScreen from "./CurriculoScreen";
import EntrevistaScreen from "./EntrevistaScreen";
import PosturaScreen from "./PosturaScreen";

const HomeScreen = ({ usuario }) => {
  const [saindo, setSaindo] = useState(false);
  const [telaAtual, setTelaAtual] = useState("home");

  const aoSair = async () => {
    setSaindo(true);
    try {
      await sair();
    } catch (e) {
      console.log("Falha ao sair:", e);
      setSaindo(false);
    }
    // Não desligamos o estado no caso de sucesso porque o componente será
    // desmontado pelo observador -- atualizar o estado depois disso gera aviso.
  };

  if (telaAtual === "curriculo") {
    return <CurriculoScreen onVoltar={() => setTelaAtual("home")} />;
  }

  if (telaAtual === "entrevista") {
    return <EntrevistaScreen onVoltar={() => setTelaAtual("home")} />;
  }

  if (telaAtual === "postura") {
    return <PosturaScreen onVoltar={() => setTelaAtual("home")} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={require("../../assets/home.png")} resizeMode="stretch" style={styles.mapa} imageStyle={styles.imagemMapa}>
        <Pressable accessibilityLabel="Abrir menu" accessibilityRole="button" style={styles.menu} onPress={aoSair} disabled={saindo} />

        <Pressable
          accessibilityLabel="Abrir currículo"
          accessibilityRole="button"
          style={styles.curriculo}
          onPress={() => setTelaAtual("curriculo")}
        />
        <Pressable
          accessibilityLabel="Abrir entrevistas"
          accessibilityRole="button"
          style={styles.entrevista}
          onPress={() => setTelaAtual("entrevista")}
        />
        <Pressable accessibilityLabel="Abrir postura" accessibilityRole="button" style={styles.postura} onPress={() => setTelaAtual("postura")} />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
  mapa: {
    flex: 1,
    width: "100%",
  },
  imagemMapa: {
    width: "100%",
    height: "100%",
  },
  menu: {
    position: "absolute",
    left: "2%",
    top: "1%",
    width: "12%",
    height: "5%",
  },
  curriculo: {
    position: "absolute",
    left: "7%",
    top: "16%",
    width: "34%",
    height: "17%",
  },
  entrevista: {
    position: "absolute",
    right: "5%",
    top: "28%",
    width: "38%",
    height: "17%",
  },
  postura: {
    position: "absolute",
    left: "7%",
    top: "44%",
    width: "35%",
    height: "17%",
  },
});
