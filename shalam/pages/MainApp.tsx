import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { TempSongCard, TempSongCardObject } from "../components/TempSongCard";
import { useQueueStore, addQueue } from "../stores/useQueueStore";

export const MainApp: React.FC = () => {
    const navigation = useNavigation();
    const s = useQueueStore().queue;

    return (
    <View style={styles.container}>
            <TempSongCard isActive={true}>
                </TempSongCard>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1d",
        alignItems: "center",
        justifyContent: "center"
    },
    activeSong: {

    },
    leftSong: {

    },
    rightSong: {
        
    }
});