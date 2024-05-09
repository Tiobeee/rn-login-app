import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
    repetirSenha: false,
    nome: false,
    cep: false,
    cidade: false,
    estado: false,
  });
  // Nome, Email, Senha, Repetir Senha
  // Endereço: Logradouro, CEP, Cidade, Estado

  function realizaRegistro() {
    if (nome === "") {
      setErro({ ...erro, nome: true });
      return 0;
    }
    setErro({ ...erro, nome: false });
    if (email === "") {
      setErro({ ...erro, email: true });
      return 0;
    }
    setErro({ ...erro, email: false });
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return 0;
    }
    setErro({ ...erro, senha: false });
    if (repetirSenha === "") {
      setErro({ ...erro, repetirSenha: true });
      return 0;
    }
    setErro({ ...erro, repetirSenha: false });
    if (cep === "") {
      setErro({ ...erro, cep: true });
      return 0;
    }
    setErro({ ...erro, cep: false });
    if (cidade === "") {
      setErro({ ...erro, cidade: true });
      return 0;
    }
    setErro({ ...erro, cidade: false });
    if (estado === "") {
      setErro({ ...erro, estado: true });
      return 0;
    }
    setErro({ ...erro, estado: false });

    // 2) Validar se as senhas são iguais
    if (senha !== repetirSenha) {
      setErro({ ...erro, senha: true, repetirSenha: true });
      alert("Senhas não tao igual!!");
      return;
    }
    setErro({ ...erro, senha: false, repetirSenha: false });
    navigation.navigate("LoginScreen"); 

    cadastrarNoFirebase();
    // 3) Enviar os dados para a API do Firestore junto ao Firebase Auth
    // 4) Tratar os erros
    // 5) Redirecionar para a tela de Login
  }

  async function cadastrarNoFirebase() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;
      console.log("Usuario criado com sucesso:", user);
    } catch (error) {
      console.error(error);
    }
  }

  function buscaCEP() {
    console.log("Busca CEP");
    let cepLimpo = cep.replace("-", "").trim();
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((res) => res.json()) // obrigatório em requisições fetch json
      .then((dados) => {
        // agora sim vou tratar os dados
        console.log(dados);
        setLogradouro(dados.logradouro);
        setCidade(dados.localidade);
        setEstado(dados.uf);
      })
      .catch((erro) => {
        //se der erro, vai pra ca
        console.error(erro);
        setErro("CEP não encontrado");
      });

    //
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.textin}>Faça seu Registro:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome:"
            onChangeText={setNome}
            value={nome}
            error={erro.nome}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail:"
            onChangeText={setEmail}
            value={email}
            error={erro.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha:"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry // faz com que o campo seja senha com *
            error={erro.senha}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha:"
            onChangeText={setRepetirSenha}
            value={repetirSenha}
            secureTextEntry // faz com que o campo seja senha com *
            error={erro.repetirSenha}
          />
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            <Text style={styles.textin}>Dados Pessoais: </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu cep somente numeros"
              onChangeText={setCep}
              value={cep}
              onBlur={buscaCEP} // quando o campo perde o foco, busca o CEP
              keyboardType="numeric" // abre o teclado numérico no celular
              maxLength={8} // máximo de 8 caracteres
              error={erro.cep}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite seu logradouro:"
              onChangeText={setLogradouro}
              value={logradouro}
              error={erro.logradouro}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{
                ...styles.input, // utilização do spread operator ou operador de propagação
                width: "70%",
              }}
              placeholder="cidade:"
              onChangeText={setCidade}
              value={cidade}
              error={erro.cidade}
            />
            <TextInput
              placeholder="Estado:"
              onChangeText={setEstado}
              value={estado}
              style={{
                ...styles.input,
                width: "30%",
              }}
              maxLength={2} // máximo de 2 caracteres
              error={erro.estado}
            />
          </View>
          <Button onPress={realizaRegistro} mode="outlined">
            Fazer Login
          </Button>
          <Button onPress={() => navigation.navigate("LoginScreen")}>
            Voltar ao Login
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
