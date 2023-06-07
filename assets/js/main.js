// 1. render song tạo ra danh sách bài hát
const playlist = document.querySelector('.list-music');
console.log(playlist);
const app = {
    songs: [
        {
            name: 'Real Love',
            singer: 'My Anh x Khắc Hưng',
            path: './assets/mp3/Real-Love-The-Heroes-Version-My-Anh-Khac-Hung.mp3',
            imgage: './assets/img/cd/REALLOVE.jpg'
        },
        {
            name: 'Phía Sau Một Cô Gái',
            singer: 'Soobin Hoàng Sơn',
            path: './assets/mp3/Phía Sau Một Cô Gái - Soobin Hoàng Sơn (Official Music Video 4K).mp3',
            imgage: './assets/img/cd/soobin.webp'
        },
        {
            name: 'Tháng Mấy Em Nhớ Anh',
            singer: 'Hà Anh Tuấn',
            path: './assets/mp3/[Official Lyric Video] Tháng Mấy Em Nhớ Anh- -- Hà Anh Tuấn.mp3',
            imgage: './assets/img/cd/thangmayemnhianh.jpg'
        },
        {
            name: 'Tình Đầu',
            singer: 'Tăng Duy Tân',
            path: './assets/mp3/TÌNH ĐẦU - Tăng Duy Tân - Official Music Video.mp3',
            imgage: './assets/img/cd/tinhdau.jpg'
        },
        {
            name: 'Real love',
            singer: 'My Anh x Khắc Hưng',
            path: './assets/mp3/Real-Love-The-Heroes-Version-My-Anh-Khac-Hung.mp3',
            imgage: './assets/img/cd/REALLOVE.jpg'
        },
        {
            name: 'Real love',
            singer: 'My Anh x Khắc Hưng',
            path: './assets/mp3/Real-Love-The-Heroes-Version-My-Anh-Khac-Hung.mp3',
            imgage: './assets/img/cd/REALLOVE.jpg'
        },
        {
            name: 'Real love',
            singer: 'My Anh x Khắc Hưng',
            path: './assets/mp3/Real-Love-The-Heroes-Version-My-Anh-Khac-Hung.mp3',
            imgage: './assets/img/cd/REALLOVE.jpg'
        },
    ],

    render: function() {
        const htmls = this.songs.map(function(song) {
            return `<li class="item-music">
            <div class="item-music_img-wrap">
                <img src="${song.imgage}" alt="" class="item-music_img">
            </div>
            <div class="item-music_infor">
                <h3 class="item-music_infor-name">${song.name}</h3>
                <p class="item-music_infor_author">${song.singer}</p>
            </div>
            <div class="item-music_options">
                <i class="item-music_options-icon ti-more-alt"></i>
            </div>
            <audio id="myAudio" src="${song.path}"></audio>
        </li>
        `
        })

        playlist.innerHTML = (htmls.join('\n'));
    },

    loadCurrentSong: function() {
        const songNameCurrent =  document.querySelector('.music-name');
        const songImgCurrent = document.querySelector('.cd .cd-thum');
        const songAuthorCurrent = document.querySelector('.music-author');
        songNameCurrent.textContent = `${this.songs[Math.floor(Math.random() *6)].name}`;
        songAuthorCurrent.textContent = `${this.songs[Math.floor(Math.random() *6)].singer}`;
        songImgCurrent.style.backgroundImage = `url(${this.songs[Math.floor(Math.random() * 6)].imgage})`;
    },

    start: function() {
        this.render();
        this.loadCurrentSong();
    },
};

app.start();





const songFavorite = document.querySelector('.header_favorite-song-icon');
const toggleFavorite = document.querySelectorAll('.header_favorite-song .header-desc');
const btnPause = document.querySelector('.music .btn-play-pause .icon-pause');
const btnPlay = document.querySelector('.music .btn-play-pause .icon-play');
var audio = document.getElementsByTagName('audio')[(Math.floor(Math.random() * 6))];
var cd = document.querySelector('.cd .cd-thum');
var btnIncreaseVolume = document.querySelector('.range-volumn_icon-increase');
var btnDecreaseVolume = document.querySelector('.range-volumn_icon-decrease');
let isPlaying = false;
var updateTime = document.  getElementById('range-time-input-id');
var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
let index_Song = 0;
let isRandom = false;

//khi bấm vào nút play thì phát nhạc
btnPlay.addEventListener('click', function() {
    audio.play();
    cd.classList.add('rotate')
});

// khi bấm vào nút play thì nút play biến mất
// và nút pause hiện lên
btnPlay.addEventListener('click',function() {
    btnPlay.classList.add('hiden');
    btnPause.classList.remove('hiden');
});

// khi bấm vào nút pause thì nhạc dừng lại
btnPause.addEventListener('click', function() {
   audio.pause();
    cd.classList.remove('rotate')

});

// khi bấm vào nút pause thì thì nút pause biến mất nút play
// hiện ra
btnPause.addEventListener('click',function() {
    btnPause.classList.add('hiden');
    btnPlay.classList.remove('hiden');
});

// khi nhấn nút next thì sẽ phát bài hát tiếp theo
btnNext.onclick = function() {

}
// click vào favorite
songFavorite.addEventListener('click', function() {
    songFavorite.classList.toggle('songFavorite');  
});

// khi đã cho bài hát vào yêu thích thì hover vào sẽ hiện remove favorite
// và ngược lại.
songFavorite.addEventListener('click', function() {
    for( let i of toggleFavorite ) {
        i.classList.toggle('hiden');
    }
});

// làm thanh chạy thời gian khi phát nhạc
updateTime.addEventListener('input', function(e) {
    const percentComplete = updateTime.value;
    const newTime = (percentComplete / 100) * audio.duration;
    audio.currentTime = newTime;
});

updateTime.addEventListener('timeupdate', function() {
    const percentComplete = (audio.currentTime / audio.duration) * 100;
    updateTime.value = percentComplete;
})


function increaseVolumn() {
    if( audio.volume < 1.0 ) {
        audio.volume += 0.1;
    }
};

function decreaseVolumn() {
    if( audio.volume > 0.1 ) {
        audio.volume -= 0.1;
    }
};

btnDecreaseVolume.addEventListener('click', decreaseVolumn);
btnIncreaseVolume.addEventListener('click', increaseVolumn);







 




