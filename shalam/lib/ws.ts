import { resolveDiscoveryAsync } from "expo-auth-session";
import WebSocket from "isomorphic-ws";
import ReconnectingWebSocket from "reconnecting-websocket";

const connectionTimeout = 20000;
const heartbeatInterval = 8000;

export type Opcode = string;
export type Token = string;

export type ListenerHandler<Data = unknown> = (
    data: Data
) => void;

export type Listener<Data = unknown> = {
    opcode: Opcode;
    handle: ListenerHandler<Data>;
};

export type Connection = {
    close: () => void;
    addListener: <Data = unknown>(
        opcode: Opcode,
        handler: ListenerHandler<Data>
    ) => () => void;
    send: (opcode: Opcode, data: unknown) => void;
};

export class VybeSocket {

    async connect(
        token: Token
    ) : Promise<any> {
        new Promise((resolve,reject) => {
            const skt = new ReconnectingWebSocket("", [], {
                connectionTimeout,
                WebSocket
            });

            const sendWrapper = (opcode: Opcode, data: unknown) => {
                const d = `{"op":"${opcode}", "d":${JSON.stringify(data)}}`;
                skt.send(d);
            };

            const handles: Listener[] = [];

            skt.addEventListener("close", (err) => {
                skt.close();
                reject(err)
            });

            skt.addEventListener("open", () => {

            });

            skt.addEventListener("message", (e) => {
                const m = JSON.parse(e.data);

                if (m.op === "auth_good") { // good auth

                }
            });

        });
    }
};