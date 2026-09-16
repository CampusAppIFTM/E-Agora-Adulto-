/**
 * src/screens/LoginScreen.js
 * ---------------------------------------------------------------------------
 * Tela de login.
 *
 * Observe o que ela NÃO faz:
 *   - não conhece o Firebase;
 *   - não recebe uma prop para "avisar" quem entrou.
 * Ela apenas dispara o login e cuida do próprio estado visual (carregando e
 * mensagem de erro). Quando o login dá certo, o observador em App.js troca a
 * tela sozinho.
 * ---------------------------------------------------------------------------
 */
import { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from "react-native";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

import { entrarComGoogle, descreverErro } from "../services/autenticacao";

const LoginScreen = () => {
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const aoPressionar = async () => {
    setErro(null);
    setCarregando(true);

    try {
      await entrarComGoogle();
      // Se deu certo, não fazemos nada aqui: o onAuthStateChanged assume.
      // Se o usuário cancelou, também não fazemos nada -- ele continua na tela.
    } catch (e) {
      console.log("Falha no login:", e);
      setErro(descreverErro(e));
    } finally {
      // O finally garante que o indicador SEMPRE é desligado, tenha o login
      // dado certo, falhado ou sido cancelado. Esquecer isto é o motivo mais
      // comum de um botão que "trava" carregando para sempre.
      setCarregando(false);
    }
  };

  return (
    <ImageBackground source={require("../../assets/login.png")} style={styles.container}>
      <GoogleSigninButton
        style={styles.botaoGoogle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={aoPressionar}
        disabled={carregando}
      />

      {/* Área reservada com altura fixa: evita a tela "pular" ao aparecer. */}
      <View style={styles.areaAviso}>
        {carregando && <ActivityIndicator />}
        {erro && <Text style={styles.erro}>{erro}</Text>}
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  imagem: {
    flex:1, width: "100%"
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  botaoGoogle: {
    position: "absolute",
    bottom: 200,
    width: 340,
    height: 68,
  },
  areaAviso: {
    height: 48,
    justifyContent: "center",
  },
  erro: {
    color: "#c62828",
    textAlign: "center",
  },
});
