const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update Play Pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update Progress and Timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // format timestamp
    // get Hours
    let hours = Math.floor(video.currentTime / 3600);
    if (hours < 10) {
        hours = '0' + String(hours);
    }
    // get Minutes
    let mins = Math.floor((video.currentTime % 3600) / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // get seconds
    let secs = Math.floor((video.currentTime % 3600) % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${hours}:${mins}:${secs}`;
}

// Set Video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);