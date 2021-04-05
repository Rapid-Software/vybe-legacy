import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { APIHandler } from "../lib/api";

const img = require("../assets/images/bg.png");
const logo = require("../assets/images/logo.png")
const spotify = require("../assets/images/spotify1.png");

export const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.bg}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.headerText}>Hello There!</Text>
                <Text style={styles.subtitleText}>In order to get started we’re gonna have to make some connections.</Text>
                <TouchableOpacity style={styles.spotifyButton} onPress={()=>APIHandler.handleSpotifyLogin()}>
                    <Image source={spotify} style={styles.spotifyLogo}/>
                    <Text style={styles.spotifyText}>Login with Spotify</Text>
                    </TouchableOpacity>
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
        width: 32,
        height: 60,
        left: 30,
        top: 60
    },
    headerText: {
        position: "absolute",
        width: 250,
        height: 38,
        textAlign: "center",
        top: 275,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 37,
        color: "#dcdcdc"
    },
    subtitleText: {
        position: "absolute",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center",
        top: 325,
        color: "#dcdcdc",
        width: 350
    },
    spotifyButton: {
        position: "absolute",
        backgroundColor: "#2ebd59",
        width: 306,
        height: 45,
        borderRadius: 10,
    },
    spotifyText: {
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
    spotifyLogo: {
        position: "absolute",
        width: 36,
        left: 12,
        bottom: 5,
        alignItems: "center",
        height: 36,
        resizeMode: "contain"
    }
});