import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const CurriculoScreen = ({ onVoltar }) => {
  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [experiencia, setExperiencia] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Pressable onPress={onVoltar} style={styles.voltar} accessibilityRole="button">
          <Text style={styles.voltarTexto}>‹ Voltar</Text>
        </Pressable>
        <Text style={styles.eyebrow}>PRIMEIRO PASSO</Text>
        <Text style={styles.titulo}>Monte seu currículo</Text>
        <Text style={styles.subtitulo}>Organize suas informações para apresentar suas experiências com clareza.</Text>

        <View style={styles.cartao}>
          <Text style={styles.rotulo}>Seu nome</Text>
          <TextInput value={nome} onChangeText={setNome} placeholder="Digite seu nome completo" style={styles.input} />
          <Text style={styles.rotulo}>Objetivo profissional</Text>
          <TextInput value={objetivo} onChangeText={setObjetivo} placeholder="Que oportunidade você procura?" style={styles.input} />
          <Text style={styles.rotulo}>Experiências e habilidades</Text>
          <TextInput
            value={experiencia}
            onChangeText={setExperiencia}
            placeholder="Conte um pouco sobre você"
            multiline
            style={[styles.input, styles.area]}
          />
          <Pressable style={styles.acao} accessibilityRole="button">
            <Text style={styles.acaoTexto}>Salvar currículo</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurriculoScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e9f8f3" },
  conteudo: { padding: 24, paddingBottom: 40 },
  voltar: { alignSelf: "flex-start", paddingVertical: 8, marginBottom: 24 },
  voltarTexto: { color: "#123b51", fontSize: 17, fontWeight: "700" },
  eyebrow: { color: "#168b83", fontSize: 13, fontWeight: "800", letterSpacing: 1.2 },
  titulo: { color: "#123b51", fontSize: 32, fontWeight: "800", marginTop: 8 },
  subtitulo: { color: "#45616a", fontSize: 16, lineHeight: 23, marginTop: 10 },
  cartao: { backgroundColor: "#fff", borderRadius: 18, padding: 20, marginTop: 24 },
  rotulo: { color: "#123b51", fontSize: 15, fontWeight: "700", marginBottom: 8, marginTop: 14 },
  input: { borderWidth: 1, borderColor: "#b9d8d3", borderRadius: 10, padding: 13, fontSize: 15, color: "#123b51", backgroundColor: "#f9fffd" },
  area: { minHeight: 110, textAlignVertical: "top" },
  acao: { backgroundColor: "#168b83", borderRadius: 10, alignItems: "center", padding: 15, marginTop: 22 },
  acaoTexto: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
