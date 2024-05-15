import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, Surface, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../config/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
  });

  function realizaLogin() {
    console.log("Fazer Login");
    if (email === "") {
      setErro({ ...erro, email: true });
      return;
    } else {
      setErro({ ...erro, email: false });
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return;
    } else {
      setErro({ ...erro, senha: false });
    }
    realizaLoginNoFirebase();
  }

  async function realizaLoginNoFirebase() {
    try {
      const usuarioRef = await signInWithEmailAndPassword(auth, email, senha);
      const user = usuarioRef.user;
      console.log("Usuário cadastrado", user);
      const collectionRef = collection(db, "usuarios");
      const docRef = await setDoc(doc(collectionRef, user.uid), {
        nome: nome,
          logradouro: logradouro,
          cep: cep,
          cidade: cidade,
          estado: estado,
      });
    } catch (e) {
      console.error(e);
      
    }
  }

  return (
    <Surface style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Faça seu Login
        </Text>
        <TextInput
          placeholder="Digite seu e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          error={erro.email}
        />
        <TextInput
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry // faz com que o campo seja senha com *
          style={styles.input}
          error={erro.senha}
        />
        <View>
          <Button onPress={realizaLogin} mode="contained">
            Fazer Login
          </Button>
        </View>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Faça seu cadastro
        </Button>
      </View>
    </Surface>
  );
}
