import React, { useState, useContext, useEffect } from "react";
import { TempSongCard, QueueContext, QueueSongInfo } from "../components/TempSongCard";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Text } from "react-native";
import { WSContext } from "./WebSocketProvider";

export const Swipe: React.FC = () => {
    const { list, soundObjList } = useContext(QueueContext); 
    const [index, setIndex] = useState(0);
    const { conn } = useContext(WSContext);

    const onSwipeRight = (index: number) => {
        const cur: QueueSongInfo = list[index];
        let d = {
            sid: null,
            pid: cur.pid,
            type: cur.platform,
            artist: cur.artist,
            name: cur.songName,
            image: cur.image,
            playbackurl: cur.playbackUrl
        }
        conn?.send("like_song", d);
    }
    
    const onSwipeLeft = (index: number) => {
        const cur: QueueSongInfo = list[index];
        let d = {
            sid: null,
            pid: cur.pid,
            type: cur.platform,
            artist: cur.artist,
            name: cur.songName,
            image: cur.image,
            playbackurl: cur.playbackUrl
        }
        conn?.send("reject_song", d);
    }

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
        overlayLabels={{
            left: {
                element: <Text style={{fontSize: 30}}>🗑️</Text>, /* Optional */
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    top: 125,
                    left: -30
                  }
                }
              },
              right: {
                element: <Text style={{fontSize: 30}}>🔥</Text>, /* Optional */
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    top: 125,
                    left: 30,
                  }
                }
              },
        }}

        />
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
});