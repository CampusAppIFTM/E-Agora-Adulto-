<<<<<<< HEAD

import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";



export const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onLogout = async () => {
  return await GoogleSignin.signOut();
};



GoogleSignin.configure({
  webClientId:
    "580703660761-eoncaofbq4akc06hta3jh8bm641ghiag.apps.googleusercontent.com",
});



const LoginScreen = ({ login }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  return (
    <View style={styles.layout}>
      {isSigninInProgress && <ActivityIndicator />}

      <Text style={styles.title}>Login</Text>

      <Button
        title="Entrar"
        onPress={() => {
          setIsSigninInProgress(true);

          onLogin().then((user) => {
            console.log(user);

            // Guarda o objeto retornado pelo Google
            login(user);

            setIsSigninInProgress(false);
          });
        }}
      />
    </View>
  );
};



const HomeScreen = ({ user, login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>

    <Text style={styles.text}>
      Bem-vindo {user.user.name}
    </Text>

    <Image
      source={{
        uri: user.user.photo,
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
      }}
    />

    <Button
      title="Sair"
      onPress={() => {
        onLogout().then(() => login(false));
      }}
    />
  </View>
);


const App = () => {

  const [user, setUser] = useState(false);

  return (
    <View style={styles.container}>
      {user ? (
        <HomeScreen user={user} login={setUser} />
      ) : (
        <LoginScreen login={setUser} />
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
    justifyContent: "center",
    alignItems: "center",
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
=======
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
>>>>>>> 047867ef830105c9bc7a8a1a9839c7fe6e6d55a3
