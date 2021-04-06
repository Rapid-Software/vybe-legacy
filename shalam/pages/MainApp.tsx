import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MainApp: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text>
            Test
        </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1d"
    },
});