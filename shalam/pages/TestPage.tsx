import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SecureStore } from "../lib/securestore";

export const TestPage: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text>
            Vybe Beta User Dashboard - Not for prod use
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=>{SecureStore.clearToken()}}>
                <Text style={styles.buttonText}>
                    Reset Tokens
                </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.appButton} onPress={()=>{}}>
                <Text style={styles.buttonText}>
                    Continue To App
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        position: "absolute",
        backgroundColor: "#2ebd59",
        width: 306,
        top: 500,
        height: 45,
        borderRadius: 10,
    },
    appButton: {
        position: "absolute",
        backgroundColor: "#2ebd59",
        width: 306,
        top: 600,
        height: 45,
        borderRadius: 10,
    },
    buttonText: {
        position: "relative",
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 19,
        color: "#ffffff",
        top: 12
    },
});