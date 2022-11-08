import { musics } from "../content/musics.js";

export function NewRandomMusic() {
    return musics[Math.floor(Math.random() * musics.length)];
}