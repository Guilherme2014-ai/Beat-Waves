import { NewRandomMusic } from "./factory/NewRandomMusic.js";
import { baseUrl } from "./helpers/onDeploy.js";
import { playerAudio } from "./index.js";
import { setNewMusic } from "./usecases/setNewMusic.js";

const allAudioChangers = document.getElementsByClassName("audioChanger");
const allMusicsRedirecioners = document.getElementsByClassName("musicRedirecioner");


const searchInput = document.getElementById("search");

function setFuncMusicRedirectToManyHTMLElements(elements) {
    Array.prototype.filter.call(elements, (elem) => {
        const musicSlug = elem.getAttribute('data-value');

        elem.addEventListener("click", () => {
            window.location.href = `${baseUrl}pages/music/music.html?music=${musicSlug}`;
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
setFuncMusicRedirectToManyHTMLElements(allMusicsRedirecioners);
setFuncSetNewMusicToManyHTMLElements(allAudioChangers);

searchInput.addEventListener("keypress", (e) => {
    const key = e.key;
    const search = e.target.value;

    if(key === "Enter") {
        window.location.href = `${baseUrl}pages/searchResults/searchResults.html?search=${search}`;
    }
})

export function setPlayerFuncs() {
    const player = document.getElementById("player");
    const play = document.getElementById("play");
    const previousMusic = document.getElementById("previousMusic");
    const nextMusic = document.getElementById("nextMusic");
    const NavToBack = document.getElementById("navToBack__musicPlayer");

    previousMusic.addEventListener("click", (e) => setNewRandomMusic(e));
    play.addEventListener("click", (e) => playerAudio.play(e));
    nextMusic.addEventListener("click", (e) => setNewRandomMusic(e));
    player.addEventListener("click", (e) => playerAudio.setFullPlayer(e));
    NavToBack.addEventListener("click", (e) => playerAudio.setMiniPlayer(e));   
}
