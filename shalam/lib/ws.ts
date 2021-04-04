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
        const skt = new ReconnectingWebSocket("", [], {
            connectionTimeout,
            WebSocket
        });

        const sendWrapper = (opcode: Opcode, data: unknown) => {
            const d = ``;

            skt.send(d);
        };

        const handles: Listener[] = [];

        return "";
    }

};