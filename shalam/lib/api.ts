import * as auth from "expo-auth-session";

export class APIHandler {

    async handleSpotifyLogin() : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: ``
        });
        return r;
    }

}