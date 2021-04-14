import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface SwipeOverlayProps {
    label: string,
    color: string
}

export const SwipeOverlay: React.FC<SwipeOverlayProps> = (props: SwipeOverlayProps) => {

    return (
        <View style={[styles.ovly, { borderColor: props.color }]}>
            <Text style={[styles.ovlyText, { color: props.color }]} > </Text>
            </View>
    )

};

const styles = StyleSheet.create({
    ovly: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10
    },
    ovlyText: {
        fontSize: 25,
        textAlign: "center"
    }
});

