import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formText: {
    fontSize: 20,
    margin: 5,
  },
  formTextInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 7,
    paddingLeft:8
  },
  botao: {
    marginLeft: '30%',
    margin: 5,
    width: '130px',
  },
  ScreenCadastro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  cadastro: {
    width: '100%',
  },
  titleCadastro: {
    fontSize: 35,
    margin: 10,
  },
  botao: {
    margin:10,
    marginBottom:50,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textButton: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  });

  export default styles;