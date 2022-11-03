import { playerAudio } from "../index.js";

export async function setNewMusic(e, musicSlug, musicName, musicOwner, musicUrl) {
    e.stopPropagation();
    
    playerAudio.remove();
    playerAudio.setSrc(musicSlug);

    playerAudio.setPlayingNow(musicName);
    playerAudio.setMusicOwner(musicOwner);
    playerAudio.setMusicProfilePicture(musicUrl);

    playerAudio.updatePlayerState();

    await playerAudio.playMusic(e);
}
