import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Bar } from "react-native-progress";
import { Audio, AVPlaybackStatus } from "expo-av";
import { QueueContext } from "./TempSongCard";

export interface CardPlayerProps { 
    playbackUrl: string,
    cIndex: number
};

export const CardPlayer: React.FC<CardPlayerProps> = (props: CardPlayerProps) => {
    const [ prog, setProg ] = useState(0);
    const [ sound, setSound ] = useState<any | null>(null); // expo-av still sucks ass

    const { list, soundObjList } = useContext(QueueContext);

    useEffect(() => {
        if (!sound) 
            getSound(props.playbackUrl);
    }, []);

    const onStatus = (status: AVPlaybackStatus) => {
        let obj = soundObjList[props.cIndex];

        if (status.isLoaded) {
            if (status.isPlaying) {

                let dur = !status.durationMillis ? 30000 : status.durationMillis;
                setProg( (status.positionMillis / dur) );

                if (obj && soundObjList.length !== props.cIndex+1) obj.sound.unloadAsync();
            } else {
               if (obj && soundObjList.length === props.cIndex+1) obj.sound.playAsync();        
            }
        }
    };

    const getSound = async(uri: string) => {
        const s = await Audio.Sound.createAsync(
            { uri },
            { shouldPlay: false, isLooping: true},
            onStatus,
            true
        );
        soundObjList.push(s);
    };

    return (
        <View style={styles.bar}>
        <Bar progress={prog} borderColor={"#ffffff00"} color={"#a2370d"} height={3} width={300} unfilledColor={"#474747"} />
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