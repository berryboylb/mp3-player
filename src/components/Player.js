import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import '../music.css';

import {useEffect, useState, useRef} from 'react';



const Player = (props) => {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            setIsPending(false);
            audioEl.current.play();
        } else {
            setIsPending(true);
            audioEl.current.pause();  
        }
    }, [isPlaying]);

    const SkipSong = (forwards = true) => {
        if (forwards) {
            
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }


    // function getPercentProg() {
    //     var myVideo = document.getElementById('myAudio');
    //     var endBuf = myVideo.buffered.end(0);
    //     var soFar = parseInt((endBuf / myVideo.duration) * 100);
    //     if (soFar > 0  || soFar < 100){
            
    //     }else {
    //         setIsPending(true);
    //     }
    // }

    // getPercentProg();


    return ( 
        <div className = "c-player" >
            {isPending && <div className="loader"></div> }
            <audio src = {props.songs[props.currentSongIndex].src} ref={audioEl} id = "myAudio"></audio>
            <h4 className = "Play">Playing Now</h4>
            <PlayerDetails song ={props.songs[props.currentSongIndex]} />
            <PlayerControls 
            isPlaying = {isPlaying} 
            setIsPlaying = {setIsPlaying} 
            SkipSong = {SkipSong} 
            />
            <p className="theme"><strong>Next Track :</strong> {props.songs[props.nextSongIndex].title } by {props.songs[props.nextSongIndex].artist }</p>
        </div>
     );
}
 
export default Player;