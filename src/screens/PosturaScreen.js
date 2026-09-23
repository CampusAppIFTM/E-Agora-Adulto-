import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const dicas = [
  ["Olhar", "Mantenha contato visual natural e demonstre atenção."],
  ["Voz", "Fale com calma, em um volume confortável e sem pressa."],
  ["Corpo", "Sente-se com a coluna ereta e deixe os ombros relaxados."],
  ["Escuta", "Ouça a pergunta até o fim antes de começar a responder."],
];

const PosturaScreen = ({ onVoltar }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.conteudo}>
      <Pressable onPress={onVoltar} style={styles.voltar} accessibilityRole="button">
        <Text style={styles.voltarTexto}>‹ Voltar</Text>
      </Pressable>
      <Text style={styles.eyebrow}>COMUNICAÇÃO</Text>
      <Text style={styles.titulo}>Sua postura comunica</Text>
      <Text style={styles.subtitulo}>Pequenos ajustes ajudam você a transmitir segurança e presença.</Text>
      <View style={styles.lista}>
        {dicas.map(([titulo, descricao]) => (
          <View key={titulo} style={styles.item}>
            <View style={styles.icone}>
              <Text style={styles.iconeTexto}>✓</Text>
            </View>
            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>{titulo}</Text>
              <Text style={styles.descricao}>{descricao}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default PosturaScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#edf6ff" },
  conteudo: { padding: 24, paddingBottom: 40 },
  voltar: { alignSelf: "flex-start", paddingVertical: 8, marginBottom: 24 },
  voltarTexto: { color: "#173b61", fontSize: 17, fontWeight: "700" },
  eyebrow: { color: "#3978b5", fontSize: 13, fontWeight: "800", letterSpacing: 1.2 },
  titulo: { color: "#173b61", fontSize: 32, fontWeight: "800", marginTop: 8 },
  subtitulo: { color: "#52708e", fontSize: 16, lineHeight: 23, marginTop: 10 },
  lista: { marginTop: 24, gap: 12 },
  item: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 16, padding: 18 },
  icone: { width: 38, height: 38, borderRadius: 19, backgroundColor: "#bde7dd", alignItems: "center", justifyContent: "center", marginRight: 14 },
  iconeTexto: { color: "#167b70", fontSize: 22, fontWeight: "800" },
  itemTexto: { flex: 1 },
  itemTitulo: { color: "#173b61", fontSize: 17, fontWeight: "800", marginBottom: 4 },
  descricao: { color: "#52708e", fontSize: 14, lineHeight: 20 },
});
