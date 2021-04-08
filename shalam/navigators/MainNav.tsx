import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { SecureStore } from "../lib/securestore";
import { MainWsHandlerPrv } from "../stores/useSocketStore";

// Pages
import { TestPage } from "../pages/TestPage";
import { MainApp } from "../pages/MainApp";

// ws
import { WebSocketProvider } from "../components/WebSocketProvider";

export type MainStackParams = {
    
};

interface MainNavParams {
    token: string
};

const Stack = createStackNavigator<MainStackParams>();

export const MainNav = (t: MainNavParams) => {
    const [token, setToken] = useState<string | null>();
    
    useEffect(() => {
        if (!t.token) getToken();
            else setToken(t.token);
    }, []);

    const getToken = async () => {
        setToken(await SecureStore.getToken());
    }

    if (!token) return null
     else return (
        <WebSocketProvider token={`${token}`}>
            <MainWsHandlerPrv>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false
                }}>

                <Stack.Screen name={"TestPage" as never} component={TestPage} />
                <Stack.Screen name={"MainApp" as never} component={MainApp} />

                </Stack.Navigator>
                </MainWsHandlerPrv>
        </WebSocketProvider>
    )
}