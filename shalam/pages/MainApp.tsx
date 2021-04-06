import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const onSwipeRight = () => {
    return (
        <Text>
        right
    </Text>
    )
};

const onSwipeLeft = () => {
    return (
        <Text>
        left
    </Text>
    )
};

export const MainApp: React.FC = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
            <Swipeable renderRightActions={onSwipeRight}
            renderLeftActions={onSwipeLeft}>
            <Text>
                this text is moveable
            </Text>
            </Swipeable>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1d",
        alignItems: "center",
        justifyContent: "center"
    },
});