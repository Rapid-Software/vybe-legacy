import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardPlayer } from "./CardPlayer";

export interface QueueSongInfo {
    songName: string,
    platform: string,
    pid: string,
    image: string,
    artist: string,
    playbackUrl: string
}

const testObj: QueueSongInfo = {
    songName: "Back In Blood",
    platform:  "spotify",
    pid: "some id",
    image: "https://cdn.discordapp.com/attachments/788969795697508373/829726171078852659/maxresdefault.png",
    artist: "Pooh Shiesty (feat. Lil Durk)",
    playbackUrl: "some url"
}

export interface TempSongCardProps {
    info: QueueSongInfo
}

export const QueueContext = React.createContext<{ list: QueueSongInfo[] }>({
    list: [ testObj, testObj, testObj ]
});

export const TempSongCard: React.FC<TempSongCardProps> = (props: TempSongCardProps) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={ { uri: props.info.image } } style={styles.image}>
            <Text style={styles.title}>
                {props.info.songName}
            </Text>
            <Text style={styles.artist}>
                {props.info.artist}
            </Text>
            <CardPlayer playbackUrl={props.info.playbackUrl} />
            </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignSelf: "center",
        width: 350,
        height: 561,
        top: 90,
        borderRadius: 10,
    },
    image: {
        width: 350,
        height: 561,
    },
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28,
        color: "#f9eded",
        left: 21,
        top: 465
    },
    artist: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 16,
        color: "#a8a8a8",
        left: 21,
        top: 470
    },
});