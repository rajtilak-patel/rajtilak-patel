const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
    name: "music-1 (1)",
    title: "wakhra swag",
    artist: "lisa misra"
    // img: "img-1 (1)"
    },
    {
    name: "music-1 (2)",
    title: "apne",
    artist: "arijit"
    // img: "img-1 (2)"
    },
    {
    name: "music-1 (3)",
    title: "khushi",
    artist: "vishal misra"
    // img: "img-1 (3)"
    },
    {
    name: "music-1 (4)",
    title: "raja",
    artist: "rajtilak"
    // img: "img-1 (3)"
    },
    {
    name: "music-1 (5)",
    title: "geetu",
    artist: "gitesh"
    // img: "img-1 (3)"
    },
    {
    name: "music-1 (6)",
    title: "polo",
    artist: "friend"
    // img: "img-1 (3)"
    },
    {
    name: "music-1 (7)",
    title: "raj",
    artist: "patel"
    // img: "img-1 (3)"
    },
    {
    name: "music-1 (8)",
    title: "ram",
    artist: "prakas"
    // img: "img-1 (3)"
    },
];

let isPlaying = false;
// for play function 
const playMusic =  () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime'); 
};
// for pause function 
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime'); 
};

play.addEventListener("click", () => {
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic();
});

// changing the song 
const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    // music.src = "music/" + songs.name + ".mp3";
    music.src = `music/${songs.name}.mp3 `;
    img.src = "images/"+songs.name +".jpg";
    // img.src = `images/"${songs.name}.jpg`;
};
   songIndex = 0;
   

   const nextSong =()=>{
    songIndex = (songIndex+1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   }

   const prevSong =()=>{
    songIndex = (songIndex- 1 + songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   }

   next.addEventListener('click',nextSong);
   prev.addEventListener('click',prevSong);






