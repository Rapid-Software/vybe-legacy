import React from "react";
import { View } from "react-native";

const onSwipeRight = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
}

const onSwipeLeft = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
}

interface SongCardProps {

}

export const SongCard: React.FC<SongCardProps> = () => {
    return (
        <View>
            </View>
    )
}