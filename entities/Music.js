import { musics } from "../content/musics.js";

export class Music {
    static SearchMusics(str) {
        const strSlugfied = str.toLocaleLowerCase().replaceAll(" ", "_");

        return musics.filter((music) => music.slug.includes(strSlugfied));
    }

    static WriteNewMostListenedMusicsElement(stringHTMLElements) {
        const mostListenElemArea = document.getElementById("threeMains__mostListens");
        mostListenElemArea.innerHTML += stringHTMLElements;
    }
    static WriteNewAllMusicsElement(stringHTMLElements) {
        const allMusicsElemArea = document.getElementById("allMusics__musics__container");
        allMusicsElemArea.innerHTML += stringHTMLElements;
    }
    
    static NewMostListenedMusicsElement(music) {
        return `
            <div class="threeMains__mostListens__music">
                <div class="musicRedirecioner" data-value="${music.slug}">
                    <div>
                        <img src="${music.picture_url}" alt="Music Banner">

                        <div>
                            <span>${music.name}</span>
                            <p>${music.owner}</p>
                        </div>
                    </div>

                    <aside>
                        <div class="audioChanger" data-value="${music.slug},${music.name},${music.owner},${music.picture_url}"><img src="./assets/img/play.svg"></div>
                    </aside>
                </div>
            </div>
    `
    }
    static NewAllMusicsElement(music) {
        return `
            <div data-value="${music.slug}" class="allMusics__musics__container__music musicRedirecioner" style="background-image: url(${music.picture_url});">
                <div class="audioChanger" data-value="${music.slug},${music.name},${music.owner},${music.picture_url}">
                    <img src="./assets/img/play.svg">
                </div>
            </div>
        `
    }
}
