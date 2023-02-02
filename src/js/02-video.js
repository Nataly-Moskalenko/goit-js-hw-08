import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then((seconds) => {
      localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    })
    .catch((error) => {
      console.error(error);
    });
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).catch((error) => {
  console.error(error);
});

player.on('timeupdate', throttle(saveCurrentTime, 1000));
