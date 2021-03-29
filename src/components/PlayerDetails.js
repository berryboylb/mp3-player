const PlayerDetails = (props) => {

    var songTitle = props.song.title;
    var songArtist = props.song.artist;
    var songCover = props.song.img_src;

    return ( 
        <div className = "c-player-details">
            <div className = "img-details">
                <img src = {songCover} alt = "ArtistImage" />
            </div>
            <h3 className="details-title">{songTitle}</h3>
            <h4 className="details-artist">{songArtist}</h4>
        </div>
     );
}
 
export default PlayerDetails;