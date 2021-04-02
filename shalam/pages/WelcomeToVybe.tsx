import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

const img = require("../assets/images/bg.png");
const logo = require("../assets/images/logo.png")

export const WelcomeToVybe: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.linearGradient}>
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
    linearGradient: {
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
        width: "79.18px",
        height: "145px",
        left: "148px",
        top: "301px"
    },
    logoText: {
        position: "absolute",
        width: "100px",
        height: "28px",
        left: "160px",
        top: "446px",
        color: "#dcdcdc",
        fontFamily: "Roboto",
        fontSize: "24px",
        lineHeight: "28px",
        fontWeight: "bold",
        fontStyle: "normal"
    },
    button: {
        position: "absolute",
        width: "233px",
        height: "56px",
        left: "71px",
        top: "677px",
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
        top: "13px",
        textAlignVertical: "center",
        color: "rgba(255,255,255,0.86)"
    },
    legal: {
        position: "absolute",
        width: 250,
        height: 24,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 12,
        color: "#cccccc",
        top: "745px"
    }
});