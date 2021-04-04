import React, { useEffect, useMemo, useState } from "react";
import { cfg } from "../lib/config";
import { VybeSocket, Connection } from "../lib/ws";
import { SecureStore } from "../lib/securestore";

type T = Connection | null;

export const WSContext = React.createContext<{ conn: T }>({
    conn: null
});

export const WebSocketProvider: React.FC = ({children}) => {
    let tk: string | null = null;
    SecureStore.getToken().then((v)=>tk=v); // switch to a state later

    const [conn, setConn] = useState<T>(null);

    useEffect(() => {
        if (!conn && !(!tk)) {
            new VybeSocket()
                .connect(tk)
                .then((v: Connection) => {
                    setConn(v);
                })
                .catch((err) => console.log(err));
        }
    }, [conn, tk]);

    return (
        <WSContext.Provider value={useMemo(()=> ({conn}), [conn])}>
            {children}
        </WSContext.Provider>
    );
};