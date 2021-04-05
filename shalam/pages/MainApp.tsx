import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export const MainApp: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View>
        <Text>
            Test
        </Text>
        </View>
    )
};