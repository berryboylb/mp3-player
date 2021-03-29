import '../music.css';
import { useState, useEffect } from "react";
import Player from './Player';


const Music = () => {

    const [songs] = useState([
        {
            title: 'Tic Tac',
            artist: 'Lil Uzi Vert x Future',
            src: "./assets/01 Tic Tac - (SongsLover.com).mp3",
            img_src: "./images/UzixFuttureCover.jpg",
            id: 1
        },
        {
            title: 'Not Around',
            artist: 'Drake',
            src: "./assets/01. Not Around - (SongsLover.com).mp3",
            img_src: "./images/DrakeCover.jpg",
            id: 2
        },
        {
            title: 'Tequilla Shots',
            artist: 'Kid Cudi',
            src: "./assets/02 Tequila Shots - (SongsLover.com).mp3",
            img_src: "./images/KudiCover.jpg",
            id: 3
        },
        {
            title: 'Mr Right Now',
            artist: '21 savage ft Drake',
            src: "./assets/04 Mr. Right Now (feat. Drake) - (SongsLover.com).mp3",
            img_src: "./images/21savageCover.jpg",
            id: 4
        },
        {
            title: 'Intoxicated',
            artist: 'Drake ft Chandler Cutthroat',
            src: "./assets/04. Intoxicated ft Chandler Cutthroat - (SongsLover.com).mp3",
            img_src: "./images/DrakeCover.jpg",
            id: 5
        },
        {
            title: 'Held it Down',
            artist: 'Chance the rapper ft Jeremih',
            src: "./assets/05. Held it Down - (SongsLover.com).mp3",
            img_src: "./images/ChanceCover.jpg",
            id: 6
        },
        {
            title: 'Zodiac Sign',
            artist: 'Drake ft  Jessie Reyez',
            src: "./assets/05. Zodiac Sign ft Jessie Reyez - (SongsLover.com).mp3",
            img_src: "./images/DrakeCover.jpg",
            id: 7
        },
        {
            title: 'Time Flies',
            artist: 'Drake',
            src: "./assets/07 Time Flies - (SongsLover.com).mp3",
            img_src: "./images/DrakeCover.jpg",
            id: 8
        },
        {
            title: 'Snitches and Rats',
            artist: '21 Savage ft Young Nudy',
            src: "./assets/09 Snitches & Rats (feat. Young Nudy - (SongsLover.com).mp3",
            img_src: "./images/21savageCover.jpg",
            id: 9
        },
        {
            title: 'Thats It',
            artist: 'Lil Uzi Vert',
            src: "./assets/14 Thats It - (SongsLover.com).mp3",
            img_src: "./images/UzixFuttureCover.jpg",
            id: 10
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex, songs.length]);



    return ( 
        <div className = "music">
            <Player 
               currentSongIndex={currentSongIndex}
               setCurrentSongIndex={setCurrentSongIndex}
               nextSongIndex={nextSongIndex}
               songs={songs}
            />
        </div>
     );
}
 
export default Music;