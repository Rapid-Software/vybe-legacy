import { QueueSongInfo } from "./components/TempSongCard"

export interface ProfileInfo {
    username: string,
    followers: number,
    following: number,
    description: string,
    likedSongs: QueueSongInfo[],
    profilePicture: string
} // n

export interface UserWrapped {
    songs: QueueSongInfo[],
    backgroundColor: string,
    backgroundImage: string,
    profilePicture: string,
    year: string,
    month: string
    // ... -> to get these songs
} // n

