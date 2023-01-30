import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

 player.on('timeupdate', function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
   }).catch(function() {    
});
  });

  player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function() {    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':           
            break;
        default:           
            break;
    }
});