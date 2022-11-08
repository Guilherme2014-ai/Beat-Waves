import { Music } from "../../entities/Music.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const search = params.search;
const musics = Music.SearchMusics(search);

const musicContainerElement = document.getElementById("musics__container");

musics.forEach((music) => {
    const musicElement = Music.NewMostListenedMusicsElement(music);

    musicContainerElement.innerHTML += musicElement;
});
