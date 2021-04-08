import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Bar } from "react-native-progress";
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
                if (prog > 28) setProg(0.5);
            }, 1000)

            return () => {
                clearInterval(handle);
            };
        }
    });

    return (
        <View style={styles.bar}>
        <Bar progress={prog / 29} borderColor={"#ffffff00"} color={"#a2370d"} height={3} width={300} unfilledColor={"#474747"} />
        </View>
    )
};

const styles = StyleSheet.create({
    bar: {
        top: 485,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    }
});