import React, { useEffect, useState } from "react";
import { MainNav } from "./MainNav";
import { WelcomeNav } from "./WelcomeNav";
import { SecureStore } from "../lib/securestore";
import { useSocketStore  } from "../stores/useSocketStore";

export const RootNav: React.FC = () => {
    const [token, setToken] = useState<string | null>();

    //Alert.alert("t", `${token}`)

    useEffect(() => {
        getToken()
    }, []);

    const getToken = async () => {
        setToken(await SecureStore.getToken());
    }

    useSocketStore();
    return (
        !token ? <WelcomeNav /> : <MainNav token={token} /> 
    )
}