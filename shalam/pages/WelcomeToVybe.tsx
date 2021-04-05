import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

const img = require("../assets/images/bg.png");
const logo = require("../assets/images/logo.png")

export const WelcomeToVybe: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.bg}>
                <Image source={logo} style={styles.logo}></Image>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate("LoginScreen");
                }}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.legal}>By pressing the above button, you agree with our Terms and Privacy Policy</Text>
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
        position: "absolute",
        width: 79,
        height: 145,
        top: 301
    },
    logoText: {
        position: "absolute",
        width: 100,
        height: 28,
        top: 446,
        color: "#dcdcdc",
        fontFamily: "Roboto",
        fontSize: 24,
        lineHeight: 28,
        fontWeight: "bold",
        fontStyle: "normal"
    },
    button: {
        position: "absolute",
        width: 233,
        height: 56,
        top: 677,
        backgroundColor: "rgba(255,255,255,0.27)",
        borderRadius: 15,
        textAlign: "center"
    },
    buttonText: {
        position: "relative",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28,
        textAlign: "center",
        top: 13,
        textAlignVertical: "center",
        color: "rgba(255,255,255,0.86)"
    },
    legal: {
        position: "absolute",
        width: 250,
        height: 24,
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 12,
        color: "#cccccc",
        top: 745
    }
});