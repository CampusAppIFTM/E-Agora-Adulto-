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
import { StatusBar, View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GoogleSigninButton, handleGoogleLogin, handleAppleLogin } from "@react-native-google-signin/google-signin";

import { entrarComGoogle, descreverErro } from "../services/autenticacao";

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';

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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
 
      {/* Top gradient sky area with owl mascot + skyline */}
      <LinearGradient
        colors={['#0a2a6e', '#1f7fd6', '#39c6e0']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.topSection}
      >
        {/* Simple skyline silhouette using boxes */}
        <View style={styles.skyline}>
          {[70, 110, 60, 140, 90, 130, 75].map((h, i) => (
            <View key={i} style={[styles.building, { height: h }]} />
          ))}
        </View>
 
        {/* Owl mascot - replace with your own asset at ./assets/owl-teacher.png */}
        <Image
          source={require('../../assets/owl-teacher.png')}
          style={styles.owl}
          resizeMode="contain"
        />
      </LinearGradient>
 
      {/* Bottom card area */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>E AGORA,{'\n'}ADULTO?</Text>
 
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.8}
          onPress={handleGoogleLogin}
        >
          <AntDesign name="google" size={22} color="#4285F4" style={styles.icon} />
          <Text style={styles.googleText}>GOOGLE</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          style={styles.appleButton}
          activeOpacity={0.8}
          onPress={handleAppleLogin}
        >
          <Ionicons name="logo-apple" size={22} color="#fff" style={styles.icon} />
          <Text style={styles.appleText}>APPLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
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
    width: 240,
    height: 48,
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
