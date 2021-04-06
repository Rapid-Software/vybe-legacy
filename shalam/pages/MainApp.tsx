import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeDirections from "react-native-swipe-gestures";

export const MainApp: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text>
            Test
        </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1d"
    },
});