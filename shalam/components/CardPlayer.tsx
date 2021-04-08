import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import Sound from "react-native-sound";

export interface CardPlayerProps { 
    playbackUrl: string
};

export const CardPlayer: React.FC<CardPlayerProps> = (props: CardPlayerProps) => {
    const [ sec, setSec ] = useState(0);
    const [ prog, setProg ] = useState(0.0);
    const [ sound, setSound ] = useState(null);
    
    useEffect(() => {

    });

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