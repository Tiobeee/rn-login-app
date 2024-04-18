import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState("");
  // Nome, Email, Senha, Repetir Senha
  // Endereço: Logradouro, CEP, Cidade, Estado

  function realizaRegistro() {
    const x = {nome, email, senha, repetirSenha, logradouro, cep, cidade, estado}
    if (x.trim() === "" ) {
      console.log("Preencha os campo direito ai namoral");
      alert("PREENCHA OS CAMPOSSSSS");
      return false;
    } else {
      return true;
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
          />
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail:"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha:"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry // faz com que o campo seja senha com *
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha:"
            onChangeText={setRepetirSenha}
            value={repetirSenha}
            secureTextEntry // faz com que o campo seja senha com *
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
            />
            <TextInput
              style={styles.input}
              placeholder="Digite seu logradouro:"
              onChangeText={setLogradouro}
              value={logradouro}
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
