import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export const TestPage: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View>
        <Text>
            Test
        </Text>
        </View>
    )
};