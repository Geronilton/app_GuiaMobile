import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { api } from '../../../services/api'
import { AuthContext } from "../../context/auth";
import { useNavigation } from "@react-navigation/native";

export default function RotasView() {
    const [rotas, setRotas] = useState([]);
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleRotas = async () => {
        const id = user.id;
        try {
            const response = await api.get(`/rotas/${id}`);
            console.log(response.data.rotas);

            if (response.data.rotas && Array.isArray(response.data.rotas)) {
                setRotas(response.data.rotas);
            } else {
                console.log("erro ao acessar rotas", response.data.rotas);
                setRotas([]);
            }


        } catch (error) {
            console.log("erro ao acessar rotas", error);
        }
    }

    useEffect(() => {
        handleRotas();
    }, []);

    return (
        <View>

            <Text style={styles.title}>Rotas</Text>
            <FlatList
                data={rotas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.texto}>
                            <Text style={styles.bold}>Origem:</Text> {item.origem}
                        </Text>
                        <Text style={styles.texto}>
                            <Text style={styles.bold}>Destino:</Text> {item.destino}
                        </Text>
                        <Text style={styles.texto}>
                            <Text style={styles.bold}>Tipo da Rota:</Text> {item.tipo_de_rota}
                        </Text>
                        <View style={styles.viewBotao} >
                            <TouchableOpacity
                                style={styles.botao}
                                onPress={() => navigation.navigate('Instrucoes', { rotaId: item.id })}
                            >
                                <Text style={styles.textButton}> Acessar Instrucões</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}