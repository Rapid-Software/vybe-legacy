import React from "react";
import { Text } from "react-native";

export interface QueueSongInfo {
    songName: string,
    platform: string,
    pid: string,
    image: string,
    artist: string,
    playbackUrl: string
}

export const QueueContext = React.createContext<{ list: QueueSongInfo[] }>({
    list: [],
});

export const TempSongCard: React.FC = () => {
    return (
            <Text>
                SONG CARD
            </Text>
    )
}