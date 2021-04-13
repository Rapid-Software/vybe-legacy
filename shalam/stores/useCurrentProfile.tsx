import React, { useContext } from "react";
import { ProfileInfo } from "../types";
import { QueueSongInfo } from "../components/TempSongCard"

export const NullProfile : ProfileInfo = {
    username: "",
    followers: -1,
    following: -1,
    description: "",
    likedSongs: [],
    profilePicture: ""
}

export const ProfileContext = React.createContext<{ user: ProfileInfo }>({
    user: NullProfile
});

export const useCurrentProfile = () => {
    const { user } = useContext(ProfileContext);

    if (user === NullProfile) return null;
        else return user;
};

export const setCurrentProfile = (u: ProfileInfo) => {
    const { user } = useContext(ProfileContext);

    if (!u) return;

    user.username = u.username;
    user.description = u.description;
    user.followers = u.followers;
    user.following = u.following;
    user.profilePicture = u.profilePicture;
    user.likedSongs = u.likedSongs;
};

export const clearCurrentProfile = () => {

}