import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const perguntas = [
  "Fale um pouco sobre você.",
  "Por que você quer esta oportunidade?",
  "Conte uma situação em que resolveu um problema.",
  "Quais são seus pontos fortes?",
];

const EntrevistaScreen = ({ onVoltar }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.conteudo}>
      <Pressable onPress={onVoltar} style={styles.voltar} accessibilityRole="button">
        <Text style={styles.voltarTexto}>‹ Voltar</Text>
      </Pressable>
      <Text style={styles.eyebrow}>TREINE AGORA</Text>
      <Text style={styles.titulo}>Prepare-se para a entrevista</Text>
      <Text style={styles.subtitulo}>Pratique respostas objetivas e chegue mais confiante à conversa.</Text>
      <View style={styles.cartao}>
        {perguntas.map((pergunta, indice) => (
          <View key={pergunta} style={styles.pergunta}>
            <Text style={styles.numero}>{String(indice + 1).padStart(2, "0")}</Text>
            <Text style={styles.texto}>{pergunta}</Text>
          </View>
        ))}
        <Pressable style={styles.acao} accessibilityRole="button">
          <Text style={styles.acaoTexto}>Começar treino</Text>
        </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default EntrevistaScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff4dc" },
  conteudo: { padding: 24, paddingBottom: 40 },
  voltar: { alignSelf: "flex-start", paddingVertical: 8, marginBottom: 24 },
  voltarTexto: { color: "#573d26", fontSize: 17, fontWeight: "700" },
  eyebrow: { color: "#d26d23", fontSize: 13, fontWeight: "800", letterSpacing: 1.2 },
  titulo: { color: "#573d26", fontSize: 32, fontWeight: "800", marginTop: 8 },
  subtitulo: { color: "#765d46", fontSize: 16, lineHeight: 23, marginTop: 10 },
  cartao: { backgroundColor: "#fff", borderRadius: 18, padding: 20, marginTop: 24 },
  pergunta: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#f0dfc5", paddingVertical: 16 },
  numero: { color: "#e2782b", fontSize: 15, fontWeight: "800", width: 38 },
  texto: { color: "#573d26", fontSize: 16, flex: 1, lineHeight: 22 },
  acao: { backgroundColor: "#e2782b", borderRadius: 10, alignItems: "center", padding: 15, marginTop: 22 },
  acaoTexto: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
