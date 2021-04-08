import React, { useState, useContext } from "react";
import { TempSongCard, QueueContext, QueueSongInfo } from "../components/TempSongCard";
import Swiper from "react-native-deck-swiper";

const renderNextCard = () => {

}

const onSwipeRight = (index: number) => {

}

const onSwipeLeft = (index: number) => {

}

export const Swipe: React.FC = () => {
    const { list } = useContext(QueueContext); 
    const [index, setIndex] = useState(0);

    const onSwipe = () => {
        setIndex(index + 1);
    }    

    return (
        <Swiper
        cards={list}
        cardIndex={index}
        renderCard={(card)=><TempSongCard info={card} />}
        onSwiped={onSwipe}
        stackSize={2}
        stackScale={10}
        stackSeparation={14}
        disableTopSwipe
        disableBottomSwipe
        onSwipedRight={(index)=>onSwipeRight(index)}
        onSwipedLeft={(index)=>onSwipeLeft(index)}
        />
    );
}