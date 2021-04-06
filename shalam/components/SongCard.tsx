import React from "react";
import { View, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const onSwipeRight = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <Text>
            SWIPE RIGHT
            </Text>
    )
}

const onSwipeLeft = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <Text>
            SWIPE LEFT
            </Text>
    )
}

export interface SongCardObject {
    card: React.FC<SongCardProps>;
}

interface SongCardProps {

}

export const SongCard: React.FC<SongCardProps> = () => {

    return (
        <Swipeable
            renderRightActions={(progress, dragx) => onSwipeRight(progress, dragx)}
            renderLeftActions={(progress, dragx) => onSwipeLeft(progress, dragx)}
        >
            <Text>
                SONG CARD
            </Text>
            </Swipeable>
    )
}