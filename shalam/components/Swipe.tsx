import React, { useState, useContext, useEffect } from "react";
import { TempSongCard, QueueContext } from "../components/TempSongCard";
import Swiper from "react-native-deck-swiper";
import { StyleSheet } from "react-native";

const onSwipeRight = (index: number) => {

}

const onSwipeLeft = (index: number) => {

}

// when swmpied index + 1


export const Swipe: React.FC = () => {
    const { list, soundObjList } = useContext(QueueContext); 
    const [index, setIndex] = useState(0);

    const onSwipe = () => {
        const s = soundObjList[index];

        if (s) s.sound.unloadAsync();
        setIndex(index + 1);
    }    

    return (
        <Swiper
        cards={list}
        cardIndex={index}
        renderCard={(card, cardIndex)=> {

        return (
        <TempSongCard info={card} /> )
        }}
        onSwiped={onSwipe}
        stackSize={1}
        stackScale={10}
        stackSeparation={14}
        disableTopSwipe
        disableBottomSwipe
        onSwipedRight={(index)=>onSwipeRight(index)}
        onSwipedLeft={(index)=>onSwipeLeft(index)}
        backgroundColor={"transparent"}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
});