import { TempSongCardObject, TempSongCard } from "../components/TempSongCard";
import create from "zustand";
import { combine } from "zustand/middleware";

export const useQueueStore = create(
    combine(
        {
            queue: [],
            likedHistory: []
        },
        (set) => ({
            setQueue: async (x: { queue: any }) => {
                set(x);
            },
            setHistory: async(x: { likedHistory: any }) => {
                set(x);
            },
            setKeys: async(x: { queue: any, likedHistory: any }) => {
                set(x);
            }
        })
    )
);

export const addQueue = (c: TempSongCardObject) => {
    const s = useQueueStore.getState().queue;
    useQueueStore.getState().setQueue({ queue: [...s, c] })
};

export const setQueue = (c: TempSongCardObject[]) => {
    useQueueStore.getState().setQueue({queue: c});
};

export const addHistory = (c: TempSongCardObject) => {
    const s = useQueueStore.getState().likedHistory;
    useQueueStore.getState().setHistory({ likedHistory: [...s, c] })
};