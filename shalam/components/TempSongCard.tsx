import React, { useContext, useState } from "react";
import { Text } from "react-native";

export interface QueueSongInfo {
    songName: string,
    platform: string,
    pid: string,
    image: string,
    artist: string,
    playbackUrl: string
}

export interface TempSongCardProps {
    info: QueueSongInfo
}

export const QueueContext = React.createContext<{ list: QueueSongInfo[] }>({
    list: [],
});

export const TempSongCard: React.FC<TempSongCardProps> = (props: TempSongCardProps) => {

    return (
        <>
        </>
    )
}