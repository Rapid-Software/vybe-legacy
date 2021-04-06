import React, { useContext, useEffect } from "react";
import { Alert } from "react-native";
import { WSContext } from "../components/WebSocketProvider";


export const useSocketStore = () => {
    const { conn } = useContext(WSContext);
    
    useEffect(() => {
        if (!conn)
            return;

        const handles = [
            conn.addListener<any>("heartbeat_ack", () => {
                //conn.send("heartbeat_ack", {});
                Alert.alert("ack", "ack");
            })
        ];

        return () => {
            handles.forEach((h)=>h());
        };
    }, [conn]);
};


