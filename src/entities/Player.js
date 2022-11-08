import { setPlayerFuncs } from "../setFunctions.js";

export class MusicPlayer {
    constructor(audioEntity) {
        this._audioEntity = audioEntity;
        this._playingNow = "";
        this._musicOwner = "";
        this._musicProfilePicture = "";
        this._isplayingNow = true;
        this._isActive = false;

        this._bodyPlayerElement = document.getElementById("player");
        this._playElement = document.getElementById("play__img");
        this._playerH2Title = document.getElementById("player__h2Title");
        this._playerMarquee = document.getElementById("player__marquee");
        this._musicPlayerImage = document.getElementById("musicPlayerImage");
    }

    setActive() {
        this._isActive = true;

        this.setPlayerElements();
        setPlayerFuncs()
    }

    setSrc(musicSlug) {
        const basePath = "./assets/musics/";
        const musicPath = `${basePath}${musicSlug}.mp3`;

        if(this._audioEntity) this._audioEntity.src = musicPath;
    }

    async play(e) {
        if(this._audioEntity.src) {
            if(!this._isplayingNow) {
                this._isplayingNow = true;

                await this.playMusic(e);
            } else {
                this.pause(e);
            }
        } else {
            alert("Escolha uma Música primeiro !");
        }
    }
    pause(e) {
        e.stopPropagation();
        this._isplayingNow = false;
        this.setPauseIcon();
        if(this._audioEntity) this._audioEntity.pause();
    }
    remove() {
        if(this._audioEntity) this._audioEntity.remove();
    }

    setFullPlayer() {
        this._bodyPlayerElement.className = "player enabled";
        this._bodyPlayerElement.onclick = () => {}
    }
    setMiniPlayer(e) {
        e.stopPropagation();
        this._bodyPlayerElement.className = "player disabled";
        
        setTimeout(() => {
            this._bodyPlayerElement.onclick = () => this.setFullPlayer();
        }, 100);
    }

    setPlayerMusicTitle() {
        this._playerH2Title.innerHTML = this._playingNow;
    }
    setPlayerMusicSongOwner() {
        this._playerMarquee.innerHTML = this._musicOwner;
    }

    setMusicProfilePictureElement() {
        this._musicPlayerImage.src = this._musicProfilePicture;
    }

    setMusicProfilePicture(url) {
        this._musicProfilePicture = url;
    }
    get MusicProfilePicture() {
        return this._musicProfilePicture;
    }

    setPlayingNow(name) {
        this._playingNow = name;
    }
    get playingNow() {
        return this._playingNow;
    }

    setMusicOwner(name) {
        this._musicOwner = name;
    }
    get musicOwner() {
        return this._musicOwner;
    }

    setPlayIcon() {
        this._playElement.src = "./assets/img/pause.svg";
    }
    setPauseIcon() {
        this._playElement.src = "./assets/img/play.svg";
    }

    async playMusic(e) {
        e.stopPropagation();
        this.setPlayIcon(this._playerH2Title);
        await this._audioEntity.play();
    }

    updatePlayerState() {
        this.setPlayIcon();
        this.setPlayerMusicTitle();
        this.setPlayerMusicSongOwner();
        this.setMusicProfilePictureElement();
    }

    writePlayer() {
        const containerPlayer = document.getElementById("player__container");

        containerPlayer.innerHTML = `
        <div class="player disabled" id="player">
        <nav id="navToBack__musicPlayer"></nav>
        <img id="musicPlayerImage" src="https://media.moddb.com/images/downloads/1/212/211077/Nomusic.png" width="300" height="300">
        <div>
            <h2 class="player__h2Title" id="player__h2Title"></h2>
            <marquee class="player__marquee" id="player__marquee" behavior="smooth" direction="right"></marquee>
            <div class="player__controlsGroup">
                <div class="previous" id="previousMusic"><img class="previous__image" src="./assets/img/skip.svg"></div>
                <div class="play" id="play"><img class="play__img" id="play__img" src="./assets/img/play.svg"></div>
                <div class="next" id="nextMusic"><img src="./assets/img/skip.svg"></div>
            </div>
        </div>
        </div>
        `;
    }

    setPlayerElements() {
        this._bodyPlayerElement = document.getElementById("player");
        this._playElement = document.getElementById("play__img");
        this._playerH2Title = document.getElementById("player__h2Title");
        this._playerMarquee = document.getElementById("player__marquee");
        this._musicPlayerImage = document.getElementById("musicPlayerImage");
    }
};
