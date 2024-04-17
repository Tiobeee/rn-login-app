import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  // Nome, Email, Senha, Repetir Senha
  // Endereço: Logradouro, CEP, Cidade, Estado
  return (
    <View>
      <Text style={styles.textin}>Faça seu Registro:</Text>
      <TextInput style={styles.boxes} 
        placeholder="Digite seu nome:"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput style={styles.boxes} 
        placeholder="Digite seu e-mail:"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput style={styles.boxes} 
        placeholder="Digite sua senha:"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry // faz com que o campo seja senha com *
      />
        <TextInput style={styles.boxes} 
        placeholder="Confirme sua senha:"
        onChangeText={setRepetirSenha}
        value={repetirSenha}
        secureTextEntry // faz com que o campo seja senha com *
      />
      <Text style={styles.textin}>Dados Pessoais: </Text>
        <TextInput style={styles.boxes} 
        placeholder="Digite seu logradouro:"
        onChangeText={setLogradouro}
        value={logradouro}
      />
        <TextInput style={styles.boxes} 
        placeholder="Digite seu cep:"
        onChangeText={setCep}
        value={cep}
      />
        <TextInput style={styles.boxes} 
        placeholder="Digite sua cidade:"
        onChangeText={setCidade}
        value={cidade}

      />
        <TextInput style={styles.boxes} 
        placeholder="Digite seu estado:"
        onChangeText={setEstado}
        value={estado}
      />
       <Button onPress>Fazer Login</Button>
       <Button onPress={() =>navigation.navigate("RegisterScreen")}>
        Faça seu cadastro
        </Button>
    </View>
  );
}


const styles = StyleSheet.create({
    boxes:{
        margin: '2px'
    },
    textin:{
        color: 'purple',
        fontFamily: 'Comic-Sans MC',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: '10px'
    }
})