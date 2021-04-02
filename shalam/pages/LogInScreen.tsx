import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const img = require("../assets/images/bg.png");
const logo = require("../assets/images/logo.png")

export const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.bg}>

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "375px",
        height: "812px"
    },
    logo: {

    },
    headerText: {

    },
    subtitleText: {

    },
    spotifyButton: {
        
    }
});