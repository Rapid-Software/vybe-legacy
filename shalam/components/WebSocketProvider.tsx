import React, { useEffect, useMemo, useState } from "react";
import { cfg } from "../lib/config";
import { VybeSocket, Connection } from "../lib/ws";
import { SecureStore } from "../lib/securestore";
import { Alert } from "react-native";

type T = Connection | null;

export const WSContext = React.createContext<{ conn: T }>({
    conn: null
});

interface WSPProps {
    children: React.ReactNode,
    token: string
};

export const WebSocketProvider: React.FC<WSPProps> = (props: WSPProps) => {
    const [conn, setConn] = useState<T>(null);

    useEffect(() => {
        if (!conn) {
            new VybeSocket()
                .connect(props.token)
                .then((v: Connection) => {
                    setConn(v);
                })
                .catch((err) => {console.warn(err)});
        }
    }, [conn, props.token]);

    return (
        <WSContext.Provider value={useMemo(()=> ({conn}), [conn])}>
            {props.children}
        </WSContext.Provider>
    );
};