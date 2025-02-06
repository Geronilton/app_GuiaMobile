import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './src/context/auth';
import Cadastro from './src/components/cadastro/Cadastro';
import Login from './src/components/login/Login';
import Home from './src/components/home/Home';
import InstrucoesView from './src/components/instrucoes/InstrucoesView';
import RotasView from './src/components/rotas/RotasView';

const Stack = createStackNavigator();

const AppScreem = () => {
  const { signed } = useContext(AuthContext);

  return (
    <NavigationContainer>
    {signed ? (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rotas" component={RotasView} />
        <Stack.Screen name="Instrucoes" component={InstrucoesView} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )}
  </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppScreem />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
