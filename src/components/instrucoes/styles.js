import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    listContent: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#e6e6e6',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    texto: {
        fontSize: 16,
        textAlign: 'justify',
    },
    viewBotao: {
        alignItems: 'center',
        marginTop: 20,
    },
    botao: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
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