import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const img = require("../assets/images/bg.png");

export const WelcomeToVybe: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.linearGradient}>
                <Text>Test</Text>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {

    },
    logoText: {

    },
    button: {

    },
    legal: {

    }
});