import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

export type MainStackParams = {

};

const Stack = createStackNavigator<MainStackParams>();



export const MainNav = () => {
    return (
        // WebSocket Provider Here
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        </Stack.Navigator>
    )
}