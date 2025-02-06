import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from "./style"
import { api } from '../../../services/api';


export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Cadastrar = async () => {
    try {
      const data = {
        nome,
        email,
        password
      }
      // Enviar os dados para o servidor local
      const response = await api.post('/register', data);
      if (response.status === 200) {
        alert('Usuário criado com sucesso!');
      }
      // Limpar os campos do formulário após o envio
      setNome('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <View style={styles.ScreenCadastro}>
      <View style={styles.cadastro}>
        <Text style={styles.titleCadastro}>Cadastre-se</Text>

        <Text style={styles.formText}> Nome:</Text>
        <TextInput style={styles.formTextInput}
          value={nome} 
          onChangeText={nome => setNome(nome)}
          placeholder="Nome" 
          />
        

        <Text style={styles.formText}> E-mail:</Text>
        <TextInput style={styles.formTextInput}
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder="E-mail"
        />

        <Text style={styles.formText}> Defina uma Senha:</Text>
        <TextInput style={styles.formTextInput}
          value={password} 
          onChangeText={senha => setPassword(senha)}
          placeholder="Senha"
        />

        <View style={styles.viewBotao} >
          <TouchableOpacity
            style={styles.botao}
            onPress={Cadastrar}
          >
            <Text style={styles.textButton}> Cadastrar</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Login') }}>
              <Text style={{ fontSize: 18}} > Realizar 
            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>  Login !!</Text>
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}