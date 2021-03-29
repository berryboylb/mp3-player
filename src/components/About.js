import {useState} from 'react';
import circle from './circle.svg';
import  '../home.css';
const About = () => {

    const [songs] = useState([
        {
            title: 'Tic Tac',
            artist: 'Lil Uzi Vert x Future',
            id: 1
        },
        {
            title: 'Not Around',
            artist: 'Drake',
            id: 2
        },
        {
            title: 'Tequilla Shots',
            artist: 'Kid Cudi',
            id: 3
        },
        {
            title: 'Mr Right Now',
            artist: '21 savage ft Drake',
            id: 4
        },
        {
            title: 'Intoxicated',
            artist: 'Drake ft Chandler Cutthroat',
            id: 5
        },
        {
            title: 'Held it Down',
            artist: 'Chance the rapper ft Jeremih',
            id: 6
        },
        {
            title: 'Zodiac Sign',
            artist: 'Drake ft  Jessie Reyez',
            id: 7
        },
        {
            title: 'Time Flies',
            artist: 'Drake',
            id: 8
        },
        {
            title: 'Snitches and Rats',
            artist: '21 Savage ft Young Nudy',
            id: 9
        },
        {
            title: 'Thats It',
            artist: 'Lil Uzi Vert',
            id: 10
        }
    ]);

    return ( 
        <div className = "about">
            <h1>Playlist</h1>
            <div className = "host-con">
            {songs.map((song) => (
                <div className ="host">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
            ))}
            </div>
            <img src={circle} className="bg" alt="Bg" />
        </div>
     );
}
 
export default About;