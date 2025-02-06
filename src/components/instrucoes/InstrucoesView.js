import React, { useState, useEffect } from "react";
import * as Speech from 'expo-speech'
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { api } from "../../../services/api";
import styles from "../instrucoes/styles";

export default function InstrucoesView({ route }) {

    const [instrucoes, setInstrucoes] = useState([]);
    const { rotaId } = route.params;


    const speak = () => {
        instrucoes.forEach((direction, index) => {
            setTimeout(() => {
                Speech.speak(direction);
            }, index * 6000); // Dita uma nova direção a cada 5 segundos.
        });
    };

    const handleInstrucoes = async () => {
        const id = rotaId;

        try {
            const response = await api.get(`/instrucoes/${id}`);
            console.log(response.data);

            if (response.data.instrucoes && Array.isArray(response.data.instrucoes)) {
                setInstrucoes(response.data.instrucoes);
            } else {
                console.log("erro ao acessar rotas", response.data.instrucoes);
                setRotas([]);
            }
        } catch (error) {
            console.log("erro ao acessar instruções", error);
        }
    }

    useEffect(() => {
        handleInstrucoes();
        speak();
    }, []);

    return (
        <View>
            <Text style={styles.title} >Instrucões da Rota </Text>

            <View>
                <FlatList
                    data={instrucoes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.texto}>
                                {item}
                            </Text>
                        </View>
                    )}
                    contentContainerStyle={styles.listContent}
                />
            </View>
            <View  style={styles.viewBotao}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={speak}
                >
                    <Text style={styles.textButton}> Reproduzir Instrucões</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
