import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Pages
import { TestPage } from "../pages/TestPage";

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

        <Stack.Screen name={"Test" as never} component={TestPage} />

        </Stack.Navigator>
    )
}