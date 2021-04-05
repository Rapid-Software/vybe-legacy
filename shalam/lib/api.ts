import * as auth from "expo-auth-session";
import { SecureStore } from "../lib/securestore";
import { cfg } from "./config";
import { Alert } from "react-native";

export class APIHandler {

    static async handleSpotifyLogin() : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: `${cfg.apiEndpoint}/auth/spotify/login`,
            returnUrl: "exp://vybe/success"
        });

        // @ts-ignore
        await SecureStore.storeToken(r.params.token);
        return r;
    }

}