import * as auth from "expo-auth-session";
import { SecureStore } from "../lib/securestore";
import { cfg } from "./config";

export class APIHandler {

    static async handleSpotifyLogin(navigation: any) : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: `${cfg.apiEndpoint}/auth/spotify/login`,
            returnUrl: "exp://vybe/success"
        });

        // @ts-ignore
        await SecureStore.storeToken(r.params.token);
        navigation.navigate("MainNav", {
                // @ts-ignore
                token: r.params.token
        }); // this
        return r;
    }

}