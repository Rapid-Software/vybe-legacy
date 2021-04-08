import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Audio } from "expo-av";
import { QueueContext } from "./TempSongCard";

export interface CardPlayerProps { 
    playbackUrl: string
};

export const CardPlayer: React.FC<CardPlayerProps> = (props: CardPlayerProps) => {
    const [ prog, setProg ] = useState(0);
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

    useEffect(() => {
        if (sound) {
            const handle = setInterval(() => {
                setProg( prog + 1)
                if (prog > 28) setProg(0);
            }, 1000)

            return () => {
                clearInterval(handle);
            };
        }
    });

    return (
        <ProgressBar progress={prog / 29} />
    )
};

const styles = StyleSheet.create({

});