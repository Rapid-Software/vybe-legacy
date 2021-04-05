import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Pages
//import { TestPage } from "../pages/TestPage";
import { WelcomeToVybe } from "../pages/WelcomeToVybe";
import { LoginScreen } from "../pages/LogInScreen";
import { TestPage } from "../pages/TestPage";

// ws
import { WebSocketProvider } from "../components/WebSocketProvider";

export type MainStackParams = {
    
};

interface MainNavParams {
    token: string
};

const Stack = createStackNavigator<MainStackParams>();

export const MainNav = (t: MainNavParams) => {
    return (
        <WebSocketProvider token={t.token}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>

                <Stack.Screen name={"TestPage" as never} component={TestPage} />

                </Stack.Navigator>
        </WebSocketProvider>
    )
}