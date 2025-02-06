import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenLogin: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '5%',
    paddingRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150
  },
  containerLogin: {
    borderRadius: 15,
    width: '100%',
  },

  formText: {
    fontSize: 20,
    margin: 5,
  },
  formTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 7,
    paddingLeft:8
  },
  botao: {
    margin:10,
    marginBottom:50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor:'#2196F3',
  },
  textButton:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoApp:{
    width: 150, 
    height: 150, 
    resizeMode: 'contain',
    borderRadius:20,
    marginBottom:50
  },
  });



  export default styles;