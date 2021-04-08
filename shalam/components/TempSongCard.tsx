import React, { useContext, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface QueueSongInfo {
    songName: string,
    platform: string,
    pid: string,
    image: string,
    artist: string,
    playbackUrl: string
}

const testObj: QueueSongInfo = {
    songName: "some fucking song",
    platform:  "spotify",
    pid: "some id",
    image: "url",
    artist: "artist",
    playbackUrl: "some url"
}

export interface TempSongCardProps {
    info: QueueSongInfo
}

export const QueueContext = React.createContext<{ list: QueueSongInfo[] }>({
    list: [ testObj, testObj, testObj, testObj, testObj, testObj ],
});

export const TempSongCard: React.FC<TempSongCardProps> = (props: TempSongCardProps) => {

    return (
        <View style={styles.container}>
            <Text>
                {props.info.songName}
            </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignSelf: "center",
        width: 308,
        height: 561,
        top: 90,
        borderRadius: 10,
        backgroundColor: "#ffffff"
    },
    title: {

    },
    artist: {

    },
});