const onDeploy = window.location.href.split("github").length > 1;

const searchInput = document.getElementById("search");
const allMusicsRedirecioners = document.getElementsByClassName("musicRedirecioner");
setFuncMusicRedirectToManyHTMLElements(allMusicsRedirecioners);

function setFuncMusicRedirectToManyHTMLElements(elements) {
    Array.prototype.filter.call(elements, (elem) => {
        const musicSlug = elem.getAttribute('data-value');

        elem.addEventListener("click", () => {
            window.location.href = `${onDeploy ? "/integrator-Project/pages/music/" : "/src/pages/music/"}music.html?music=${musicSlug}`;
        });
    });
}

searchInput.addEventListener("keypress", (e) => {
    const key = e.key;
    const search = e.target.value;

    if(key === "Enter") {
        window.location.href = `${onDeploy ? "/integrator-Project/pages/searchResults/" : "/src/pages/searchResults/"}searchResults.html?search=${search}`;
    }
})
