import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { View, Text, TouchableOpacity } from 'react-native';
import RotasView from '../rotas/RotasView';
import styles from '../home/style';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <View >

      <View style={styles.headerHome}> 
        <Text style={styles.userName} >Bem-vindo, {user?.nome || "Usuário"}!</Text>
        <View style={styles.viewBotao} >
          <TouchableOpacity
            style={styles.botao}
            onPress={signOut}
          >
            <Text style={styles.textButton}> Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RotasView />
    </View>
  )
}