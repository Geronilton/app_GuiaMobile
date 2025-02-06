import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    headerHome:{
        height: 100,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop:20,
        paddingRight:10
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingLeft:8,
    },
    viewBotao: {
        alignItems: 'flex-end',
    },
    botao: {
        backgroundColor: '#FF4C4C',
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
})


export default styles;