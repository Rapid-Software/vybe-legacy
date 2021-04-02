import * as st from "expo-secure-store";

export class SecureStore {

    async validateDevice() : Promise<Boolean> {
        return await st.isAvailableAsync();
    }

    async storeToken(tkn: string) : Promise<void> {
        return await st.setItemAsync("token", tkn);
    }

    async getToken() : Promise<string | null> {
        return await st.getItemAsync("token");
    }

}