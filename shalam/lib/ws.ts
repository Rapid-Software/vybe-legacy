import WebSocket from "isomorphic-ws";

export type Opcode = string;

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
};

export class VybeSocket {

};

export const connect = (

) => {

};