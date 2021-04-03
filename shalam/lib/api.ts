import * as auth from "expo-auth-session";

export class APIHandler {

    static async handleSpotifyLogin() : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: `https://google.com`,
            returnUrl: rurl
        });
        return r;
    }

}