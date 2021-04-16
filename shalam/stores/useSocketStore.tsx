import React, { useContext, useEffect } from "react";
import { WSContext } from "../components/WebSocketProvider";
import { QueueSongInfo, QueueContext } from "../components/TempSongCard";
import { Alert } from "react-native";



export const useSocketStore = () => {
    const { conn } = useContext(WSContext);
    const { list, soundObjList } = useContext(QueueContext);

    useEffect(() => {
        if (!conn)
            return;

        const handles = [
            conn.addListener<any>("heartbeat_ack", () => {
                //conn.send("heartbeat_ack", {});
                //Alert.alert("ack", "ack");
            }),

            conn.addListener<any>("get_new_songs_done", ( { songs } ) => {
                
                songs.map((x: QueueSongInfo) => {
                    Alert.alert("s", x.songName);
                    list.push(x);
                    Alert.alert("z")
                });
            }), // finish these socket listeners
            conn.addListener<any>("get_user_profile_done", ( { profile } ) => {
                
            }),
            conn.addListener<any>("get_user_wrapped_done", ( { data } ) => {

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