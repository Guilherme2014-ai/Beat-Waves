import { musics } from "../../content/musics.js";
import { artists } from "../../content/artists.js";
import { onDeploy } from "../../helpers/onDeploy.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const musicSlug = params.music;
const music = musics.find((music) => music.slug === musicSlug);
const musicOwner = artists[`${music.owner}`];

document.getElementById("image__container").innerHTML = `<img src="${music.picture_url}">`;
document.getElementById("content__container-h1").innerHTML = `${music.name}`;
document.getElementById("content__container-p").innerHTML = `${music.bio}`;
document.getElementById("owner__container_subgroup").innerHTML = `<a href="${onDeploy ? "/integrator-Project/pages/artistPage/" : "/src/pages/artistPage/"}index.html?artist=${musicOwner.name}"><img src="${musicOwner.profile_picture}"></a>`;
document.getElementById("lyrics").innerHTML = `${music.lyrics}`;

console.log(music);
