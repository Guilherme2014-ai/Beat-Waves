import { baseUrl } from "../../helpers/onDeploy.js";

const searchInput = document.getElementById("search");
const allMusicsRedirecioners = document.getElementsByClassName("musicRedirecioner");
setFuncMusicRedirectToManyHTMLElements(allMusicsRedirecioners);

function setFuncMusicRedirectToManyHTMLElements(elements) {
    Array.prototype.filter.call(elements, (elem) => {
        console.log(elem);
        const musicSlug = elem.getAttribute('data-value');

        elem.addEventListener("click", () => {
            window.location.href = `${baseUrl}pages/music/music.html?music=${musicSlug}`;
        });
    });
}

searchInput.addEventListener("keypress", (e) => {
    const key = e.key;
    const search = e.target.value;

    if(key === "Enter") {
        window.location.href = `${baseUrl}pages/searchResults/searchResults.html?search=${search}`;
    }
})
