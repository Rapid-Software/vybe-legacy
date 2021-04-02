import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Pages
//import { TestPage } from "../pages/TestPage";
import { WelcomeToVybe } from "../pages/WelcomeToVybe";
import { LoginScreen } from "../pages/LogInScreen";

export type WelcomeStackParams = {

};

const Stack = createStackNavigator<WelcomeStackParams>();

export const WelcomeNav = () => {
    return (
        // WebSocket Provider Here
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>

        <Stack.Screen name={"Welcome" as never} component={WelcomeToVybe} />
        <Stack.Screen name={"LoginScreen" as never} component={LoginScreen} />

        </Stack.Navigator>
    )
}