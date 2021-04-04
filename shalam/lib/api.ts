import * as auth from "expo-auth-session";
import { cfg } from "./config";

export class APIHandler {

    static async handleSpotifyLogin() : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: `${cfg.apiEndpoint}/auth/spotify/login`,
            returnUrl: "vybe://vybe/success"
        });
        return r;
    }

}