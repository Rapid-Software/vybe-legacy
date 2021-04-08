import React from "react";
import { Text } from "react-native";

export interface TempSongCardObject {
    card: React.FC<TempSongCardProps>;
}

interface TempSongCardProps {
    isActive: boolean;
}

export const TempSongCard: React.FC<TempSongCardProps> = (props: TempSongCardProps) => {
    return (
            <Text>
                SONG CARD
            </Text>
    )
}