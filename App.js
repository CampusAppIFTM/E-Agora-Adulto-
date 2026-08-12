import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//funções de autenticação
export const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onLogout = async () => {
  await GoogleSignin.signOut();
};

// valor obtido no arquivo google-services.json
GoogleSignin.configure({
  webClientId: "438872457138-miq1lm1c3cue420bg81k8erkqd9o3cij.apps.googleusercontent.com",
});

// Telas
const LoginScreen = ({ login, setUser }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <Button
        title="entrar"
        onPress={() => {
          setIsSigninInProgress(true);
          onLogin().then(dadosAuth => {
            console.log(dadosAuth);
            setUser(dadosAuth.data.user);
            login(true);
          });
        }}
      />
    </View>
  );
};

const HomeScreen = ({ login, user }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <Text style={styles.text}>Bem vindo {user.name}</Text>
    <Image
      source={{ uri: user.photo }}
      style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16 }}
    />
    <Button title="Sair" onPress={() => onLogout().then(() => login(false))} />
  </View>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <HomeScreen login={setIsAuthenticated} user={user} />
      ) : (
        <LoginScreen login={setIsAuthenticated} setUser={setUser} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    marginBottom: 16,
  },
});