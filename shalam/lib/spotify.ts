import * as auth from "expo-auth-session";

export class SpotifyLogin {

    async handleLogin() : Promise<auth.AuthSessionResult> {
        let rurl: string = auth.makeRedirectUri();
        let r: auth.AuthSessionResult = await auth.startAsync({
            authUrl: ""
        });
        return r;
    }

}