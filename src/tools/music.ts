const musicUrl = new URL('@/assets/bgm/bgm.mp3', import.meta.url).href
const music = new Audio(musicUrl);
music.loop = true;
export default music;