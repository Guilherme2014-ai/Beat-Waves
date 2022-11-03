import { NewRandomMusic } from "./factory/NewRandomMusic.js";
import { onDeploy } from "./helpers/onDeploy.js";
import { playerAudio } from "./index.js";
import { setNewMusic } from "./usecases/setNewMusic.js";

const allAudioChangers = document.getElementsByClassName("audioChanger");
setFuncSetNewMusicToManyHTMLElements(allAudioChangers);

const allMusicsRedirecioners = document.getElementsByClassName("musicRedirecioner");
setFuncMusicRedirectToManyHTMLElements(allMusicsRedirecioners);

const searchInput = document.getElementById("search");
const NavToBack = document.getElementById("navToBack__musicPlayer");
const player = document.getElementById("player");
const nextMusic = document.getElementById("nextMusic");
const previousMusic = document.getElementById("previousMusic");
const play = document.getElementById("play");

function setFuncMusicRedirectToManyHTMLElements(elements) {
    Array.prototype.filter.call(elements, (elem) => {
        const musicSlug = elem.getAttribute('data-value');

        elem.addEventListener("click", () => {
            window.location.href = `${onDeploy ? "/integrator-Project/pages/music/" : "/src/pages/music/"}music.html?music=${musicSlug}`;
        });
    });
}
function setFuncSetNewMusicToManyHTMLElements(elements) {
    Array.prototype.filter.call(elements, (elem) => {
        const value = elem.getAttribute('data-value').split(",");
    
        const music = {
            slug: value[0],
            name: value[1],
            owner: value[2],
            profile_picture: value[3],
        }
    
        elem.addEventListener("click", async (e) => {
            await setNewMusic(e, music.slug, music.name, music.owner, music.profile_picture);
        });
    });
}
function setNewRandomMusic(e) {
    const randomMusic = NewRandomMusic();

    setNewMusic(e, randomMusic.slug, randomMusic.name, randomMusic.owner, randomMusic.picture_url);
}

searchInput.addEventListener("keypress", (e) => {
    const key = e.key;
    const search = e.target.value;

    if(key === "Enter") {
        window.location.href = `${onDeploy ? "/integrator-Project/pages/searchResults/" : "/src/pages/searchResults/"}searchResults.html?search=${search}`;
    }
})

previousMusic.addEventListener("click", (e) => setNewRandomMusic(e));
play.addEventListener("click", (e) => playerAudio.play(e));
nextMusic.addEventListener("click", (e) => setNewRandomMusic(e));
player.addEventListener("click", (e) => playerAudio.setFullPlayer(e));
NavToBack.addEventListener("click", (e) => playerAudio.setMiniPlayer(e));
