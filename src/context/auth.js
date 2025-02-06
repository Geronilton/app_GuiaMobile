import React, { useEffect, useState, createContext } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services/api'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStorageData = async () => {
      const storageUser = await AsyncStorage.getItem("@Auth:user");
      const storageToken = await AsyncStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`;
      }
    };
    loadingStorageData();
  }, []);

  const signIn = async ({ email, senha }) => {
    try {
      const response = await api.post("/session", {
        email,
        senha
      });

      if (response.data.error) {
        Alert.alert('Erro', response.data.error); 
      } else {
        setUser(response.data.user);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        await AsyncStorage.setItem("@Auth:token", response.data.token);
        await AsyncStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Tente novamente.');
      console.log('Erro no login:', error);
      console.log('Erro no login:', error.response ? error.response.data : error.message);
    }
  };

  const signOut = async () => {

    await AsyncStorage.removeItem("@Auth:token");
    await AsyncStorage.removeItem("@Auth:user");

    api.defaults.headers.common['Authorization'] = undefined;

    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
