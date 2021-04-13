import React, { useContext } from "react";
import { ProfileInfo } from "../types";
import { QueueSongInfo } from "../components/TempSongCard"

export const NullProfile : ProfileInfo = {
    username: "",
    followers: 0,
    following: 0,
    description: "",
    likedSongs: [],
    profilePicture: ""
}

export const ProfileContext = React.createContext<{ user: ProfileInfo }>({
    user: NullProfile
});

export const useCurrentProfile = () => {
    const { user } = useContext(ProfileContext);

    

};