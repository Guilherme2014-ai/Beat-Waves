import { artists } from "../../content/artists.js";
import { musics } from "../../content/musics.js";
import { baseUrl } from "../../helpers/onDeploy.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const artistName = params.artist;
console.log(artistName);

const artist = artists[`${artistName}`];
const artistMusics = musics.filter((music) => music.owner === artist.name);


document.getElementById("artist_banner").src = artist.profile_picture;
document.getElementById("link__play").href = artist.spotify_url;

artistMusics.forEach((music, idx) => {
    if(idx < 3) document.getElementById("content_section__topMusics").innerHTML += `
    <a href="${baseUrl}pages/music/music.html?music=${music.slug}">
        <div>
            <img src="${music.picture_url}" alt="monster">
            <span>${music.name}</span>
        </div>
    </a>
    `;
});

document.getElementById("about_artist").innerHTML = `Sobre ${artist.name}`;
document.getElementById("artist_bio").innerHTML = artist.bio;

document.getElementById("instagram").href = artist.instagram_url;
document.getElementById("spotify").href = artist.spotify_url;
document.getElementById("youtube").href = artist.youtube_url;
