import WebSocket from "isomorphic-ws";
import ReconnectingWebSocket from "reconnecting-websocket";
import { cfg } from "./config";
import { Alert } from "react-native";

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

    conn: Connection | null = null;
    hbHandle: NodeJS.Timeout | null = null;

    async connect(token: string) : Promise<Connection> {
        this.conn = await this.createSocket(token);
        this.setupHeartbeat();
        return this.conn;
    }

    async createSocket(
        tkn: Token
    ) : Promise<Connection> {
        return new Promise((resolve,reject) => {
            const skt = new ReconnectingWebSocket(cfg.websocketEndpoint, [], {
                connectionTimeout: cfg.WSSettings.connectionTimeout,
                WebSocket
            });

            const sendWrapper = (opcode: Opcode, data: unknown) => {
                const d = `{"op":"${opcode}", "d":${JSON.stringify(data)}}`;
                skt.send(d);
            };

            const handles: Listener[] = [];

            skt.addEventListener("close", (err) => {
                Alert.alert("Socket Closed", `${err.code}`)
                this.stopHeartbeat();
                skt.close();
                reject(err)
            });

            skt.addEventListener("open", () => {
                sendWrapper("auth", {
                    token: tkn
                });
            });

            skt.addEventListener("message", (e) => {
                const m = JSON.parse(e.data);

                if (m.op === "auth_good") { // good auth
                    const c: Connection = {
                        close: () => skt.close(),
                        addListener: (opcode, handle) => {
                            const h = { opcode, handle } as Listener<unknown>;

                            handles.push(h);
                            return () => handles.splice(handles.indexOf(h), 1)
                        },
                        send: sendWrapper
                    };
                    resolve(c);
                } else { // handle op codes
                    handles
                        .filter(({ opcode }) => opcode === m.op)
                        .forEach((h)=>h.handle(m.d))
                }
            });

        });
    }

    async setupHeartbeat() {
        if (!this.hbHandle && this.conn)
            this.hbHandle = setInterval(() => {
                this.conn?.send("heartbeat", {});
            }, cfg.WSSettings.heartbeatInterval)
    }

    async stopHeartbeat() {
        if (this.hbHandle) 
            clearInterval(this.hbHandle);
    }
};