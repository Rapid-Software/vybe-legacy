import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Pages
import { WelcomeToVybe } from "../pages/WelcomeToVybe";
import { LoginScreen } from "../pages/LogInScreen";

// MainNav
import { MainNav } from "../navigators/MainNav";

export type WelcomeStackParams = {

};

const Stack = createStackNavigator<WelcomeStackParams>();

export const WelcomeNav = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>

        <Stack.Screen name={"Welcome" as never} component={WelcomeToVybe} />
        <Stack.Screen name={"LoginScreen" as never} component={LoginScreen} />
        <Stack.Screen name={"MainNav" as never} component={MainNav} />

        </Stack.Navigator>
    )
}