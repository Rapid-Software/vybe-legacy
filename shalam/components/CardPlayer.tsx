import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {  } from "react-native-paper";


export interface CardPlayerProps { 
    playbackUrl: string
};

export const CardPlayer: React.FC<CardPlayerProps> = (props: CardPlayerProps) => {
    const [ sec, SetSec ] = useState(0);

    return (
        <>
        </>
    )
};

const styles = StyleSheet.create({
    outer: {

    },
    inner: {

    }
});