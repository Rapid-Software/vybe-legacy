import { SongCardObject, SongCard } from "../components/SongCard";
import create from "zustand";
import { combine } from "zustand/middleware";

export const useQueueStore = create(
    combine(
        {
            queue: []
        },
        (set) => ({
            setQueue: async (x: { queue: any }) => {
                set(x);
            }
        })
    )
);

export const addQueue = (c: SongCardObject) => {
    const s = useQueueStore.getState().queue;
    useQueueStore.getState().setQueue({ queue: [...s, c] })
};