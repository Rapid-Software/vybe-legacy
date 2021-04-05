import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SecureStore } from "../lib/securestore";

export const TestPage: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View>
        <Text>
            Test Page - Debug Only
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=>{SecureStore.clearToken()}}>
                </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        position: "absolute",
        backgroundColor: "#2ebd59",
        width: 306,
        top: 500,
        height: 45,
        borderRadius: 10,
    }
});