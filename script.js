let audioElement = new Audio ('mySongs/1.mp3');
let songIndex = 0;
let playButton = document.getElementById("playButton")
let myProgressBar = document.getElementById("progressBar")
let gif = document.getElementById("gif")
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Teri Ore",
      filepath: "mySongs/1.mp3"
    },
    { songName: "Te Amo",
      filepath: "mySongs/2.mp3"
    },
    { songName: "Saudebazi",
      filepath: "mySongs/3.mp3"
    },
    { songName: "Arziyan",
      filepath: "mySongs/4.mp3"
    },
    { songName: "Tere Hawale",
      filepath: "mySongs/5.mp3"
    },
    { songName: "Saiyaan",
      filepath: "mySongs/6.mp3"
    },
    { songName: "Saiyaan",
      filepath: "mySongs/6.mp3"
    },
    
] 

songItems.forEach((element, i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName

})

//Handle play/pause click
playButton.addEventListener('click', () =>{
  if (audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    playButton.classList.remove('fa-play-circle')
    playButton.classList.add('fa-pause-circle')
    gif.style.opacity = 1;

  }else{
    audioElement.pause();
    playButton.classList.add('fa-play-circle')
    playButton.classList.remove('fa-pause-circle')
    gif.style.opacity = 0
  }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

// Update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    audioElement.src = `mySongs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle')
    playButton.classList.add('fa-pause-circle')
    
})
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `mySongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `mySongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');
})