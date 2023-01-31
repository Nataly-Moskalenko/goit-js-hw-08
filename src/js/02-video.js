import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then((seconds) => {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch((error) => {
      console.error(error);
    });
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch((error) => {
    console.error(error);
  });

player.on('timeupdate', throttle(saveCurrentTime, 1000));