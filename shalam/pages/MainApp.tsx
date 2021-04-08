import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Swipe } from "../components/Swipe";

export const MainApp: React.FC = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <Swipe />
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1d",
    },
});