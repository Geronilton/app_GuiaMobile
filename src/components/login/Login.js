import React, { useState,useContext } from "react";
import { Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { AuthContext } from "../../context/auth.js";
import styles from "./style";
import logoApp from "../../../assets/logoApp.png"


export default function Login({navigation}) {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleSignIn = async () => {

      try {
          const data = {
              email: login,
              senha:pass
          };
          await signIn(data);
      } catch (error) {
          alert("Verifique se os campos estão corretos!");
          console.log("Erro ao logar (cliente)", error);
      }
  };

  return (
    <View style={styles.ScreenLogin}> 
    <Image source={logoApp} style={styles.logoApp}/>
      <View style={styles.containerLogin}>
    
        <Text style={styles.formText}> Login:</Text>
        <TextInput style={styles.formTextInput}
          placeholder="Email"
          value={login} 
          onChangeText={text => setLogin(text)}></TextInput>


        <Text style={styles.formText}>Senha:</Text>
        <TextInput style={styles.formTextInput}
          value={pass} 
          onChangeText={pass => setPass(pass)} 
          secureTextEntry
          placeholder="Senha"
          />
          

        <TouchableOpacity style={styles.botao}
        onPress={handleSignIn}
         >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <View style={styles.botaoSession}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Cadastro') }}>
              <Text style={{ fontSize: 16}} > Não possui uma conta? 
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>  Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
