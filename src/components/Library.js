import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
        <h2>Library</h2>
        <div className="library-songs">
        {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} song={song} key={song.id} id={song.id} songs={songs} setCurrentSong={setCurrentSong} />)}
        </div>

        </div>
    )
}

export default Library;