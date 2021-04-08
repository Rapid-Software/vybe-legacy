import React, { useState, useContext } from "react";
import { TempSongCard, QueueContext, QueueSongInfo } from "../components/TempSongCard";
import Swiper from "react-native-deck-swiper";

const renderNextCard = () => {
    
}

export const Swipe: React.FC = () => {
    const { list } = useContext(QueueContext); 
    const [index, setIndex] = useState(0);

    return (
        <Swiper
        cards={list}
        cardIndex={index}
        renderCard={(card)=><TempSongCard info={card} />}
        />
    );
}