    var timer;
    var showMusicName = document.querySelector(".show-name"); 
    var spinner = document.querySelector("#spinner"); 
    var spinnerCircle = document.querySelector(".spinner-circle"); 
    var playerBtn = document.querySelector(".player_btns").getElementsByTagName("li");
    var music = document.querySelector("#music");
    var count = Math.floor(music.currentTime);
    
var musicArr = [
   ' audio/05 You Stay (feat. Meek Mill, J Balv.mp3',
   'audio/21_Savage_-_Nothin_New_(Official_Music_Video).mp3',
   'audio/AUD.mp3',
   'audio/WithoutMe.mp3'
];
var countMusic = 0;
music.src = musicArr[countMusic];    
    function playing(){
        music.play();
         spinner.style.animation = `spin 800ms ease-in infinite 300ms`;
         playerBtn[0].classList.remove("color");
         playerBtn[1].classList.add("color");
         playerBtn[2].classList.remove("color");
         playerBtn[3].classList.remove("color");
         playerBtn[4].classList.remove("color");
         
         showMusicName.innerHTML = musicArr[countMusic];
    }
    function pausePlaying(){
        music.pause();
        spinner.style.animation = "none";
        playerBtn[0].classList.remove("color");
        playerBtn[1].classList.remove("color");
        playerBtn[2].classList.add("color");
        playerBtn[3].classList.remove("color");
        playerBtn[4].classList.remove("color");
        clearInterval(timer);
    }
    
    function stopPlaying(){
        music.currentTime = 0;
        music.pause();
        spinner.style.animation = "none";
        playerBtn[0].classList.remove("color");
        playerBtn[1].classList.remove("color");
        playerBtn[2].classList.remove("color");
        playerBtn[3].classList.add("color");
        playerBtn[4].classList.remove("color");
        clearInterval(timer);
        showMusicName.innerHTML = '';
    }
    //this function plays the music forward
    function forward(){
        countMusic++;
        if(countMusic >= musicArr.length){
             countMusic = 0;
        }
        music.src = musicArr[countMusic];
        playerBtn[0].classList.add("color");
        playerBtn[1].classList.remove("color");
        playerBtn[2].classList.remove("color");
        playerBtn[3].classList.remove("color");
        playerBtn[4].classList.remove("color");
        music.play();
        spinner.style.animation = `spin 800ms ease-in infinite 300ms`;
        showMusicName.innerHTML = musicArr[countMusic];
    }
    //This function Play the music backwards
    function backward(){
        countMusic--;
        if(countMusic < 0){
             countMusic = musicArr.length - 1;
        }
         music.src = musicArr[countMusic];
        playerBtn[0].classList.remove("color");
        playerBtn[1].classList.remove("color");
        playerBtn[2].classList.remove("color");
        playerBtn[3].classList.remove("color");
        playerBtn[4].classList.add("color");
        music.play();
        spinner.style.animation = `spin 800ms ease-in infinite 300ms`;
        showMusicName.innerHTML = musicArr[countMusic];

    }
    
    function playerControl(){
        playerBtn[1].addEventListener('click',playing);
        playerBtn[2].addEventListener('click',pausePlaying);
        playerBtn[3].addEventListener('click',stopPlaying);
        playerBtn[0].addEventListener('click',forward);
        playerBtn[4].addEventListener('click',backward);
    }
    
 
    playerControl();
if(music.currentTime === music.duration){
   countMusic++;
   music.src = musicArr[countMusic]
}
