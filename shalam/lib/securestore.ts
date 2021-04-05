import * as st from "expo-secure-store";

export class SecureStore {

    static async validateDevice() : Promise<Boolean> {
        return await st.isAvailableAsync();
    }

    static async storeToken(tkn: string) : Promise<void> {
        return await st.setItemAsync("token", tkn);
    }

    static async getToken() : Promise<string | null> {
        return await st.getItemAsync("token");
    }

    static async clearToken() : Promise<void> {
        return await st.deleteItemAsync("token");
    }

    static async isTokenAvailable() : Promise<Boolean> {
        let valid = await st.isAvailableAsync();
        if (!valid) return false;
            else if (await !this.getToken()) return false;
                else return true;
    }

}