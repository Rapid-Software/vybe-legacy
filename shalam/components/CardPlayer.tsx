import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Audio, AVPlaybackStatus } from "expo-av";
import { QueueContext } from "./TempSongCard";

export interface playbackObject {
    sound: Audio.Sound;
    status: AVPlaybackStatus;
}

export interface CardPlayerProps { 
    playbackUrl: string
};

export const CardPlayer: React.FC<CardPlayerProps> = (props: CardPlayerProps) => {
    const [ sec, setSec ] = useState(0);
    const [ prog, setProg ] = useState(0.0);
    const [ sound, setSound ] = useState<any | null>(null); // expo-av sucks ass
    
    const { list, soundObjList } = useContext(QueueContext);

    useEffect(() => {
        if (!sound)
            getSound(props.playbackUrl);
    });

    const getSound = async(uri: string) => {
         const s = await Audio.Sound.createAsync(
            { uri },
            { shouldPlay: true, isLooping: true }
        );

        setSound(s);
        soundObjList.push(s);
    };

    return (
        <ProgressBar progress={prog} />
    )
};

const styles = StyleSheet.create({
    outer: {

    },
    inner: {

    }
});