// Entities
import { MusicPlayer } from "./entities/Player.js";
import { Music } from "./entities/Music.js";

// Content
import { musics } from "./content/musics.js";
import { artists } from "./content/artists.js";

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function setArtistImage(imageUrl) {
    const artistArea = document.getElementById("threeMains__artist");

    artistArea.innerHTML = `<a href="./pages/music.html"><div style="background-image: url(${imageUrl});"></div></a>`;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const artist = artists.Eminem;
const playerAudio = new MusicPlayer(new Audio());

setArtistImage(artist.profile_picture);

artist.musics.forEach((music,idx) => {
    const musicElem = Music.NewMostListenedMusicsElement(music);
    if(idx <= 3) Music.WriteNewMostListenedMusicsElement(musicElem);
});

musics.forEach(music => {
    const musicElem = Music.NewAllMusicsElement(music);
    Music.WriteNewAllMusicsElement(musicElem);
});

export { playerAudio };
