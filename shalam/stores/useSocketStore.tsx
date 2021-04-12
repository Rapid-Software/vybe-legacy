import React, { useContext, useEffect } from "react";
import { WSContext } from "../components/WebSocketProvider";


export const useSocketStore = () => {
    const { conn } = useContext(WSContext);
    
    useEffect(() => {
        if (!conn)
            return;

        const handles = [
            conn.addListener<any>("heartbeat_ack", () => {
                //conn.send("heartbeat_ack", {});
                //Alert.alert("ack", "ack");
            }),

            conn.addListener<any>("get_new_songs_done", ( { songs } ) => {

            })
        ];

        return () => {
            handles.forEach((h)=>h());
        };
    }, [conn]);
};

export const MainWsHandlerPrv: React.FC = ({ children }) => {
    useSocketStore();
    return <>{children}</>;
}; 