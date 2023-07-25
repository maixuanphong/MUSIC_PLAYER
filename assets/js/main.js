// 1. render song tạo ra danh sách bài hát
// 2. Play, pause, seek
// 3. CD rotate
// 4. Next, prev
// 5. random
// 6. Next, repeat when ended
// 7. active song
// 8. scroll active song into view
// 9. play song when click
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const music = $('.music');
const playlist = document.querySelector('.list-music');
const songNameCurrent =  document.querySelector('.music-name');
const songImgCurrent = document.querySelector('.cd .cd-thum');
const songAuthorCurrent = document.querySelector('.music-author');
const audio = $('#myAudio');
const btnPlay = document.querySelector('.btn-play-pause');
const cd = document.querySelector('.cd .cd-thum');
const rangeTime = document.getElementById('range-time-input-id');
const rangeVolumn = $('#range-volumn_input-id');
const btnIncreaseVolume = document.querySelector('.range-volumn_icon-increase');
const btnDecreaseVolume = document.querySelector('.range-volumn_icon-decrease');
console.log(rangeVolumn);
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnRandom = $('.btn-ramdom');
const btnRepeat = $('.btn-repeat');
const currentTimeSong = $('.range-time_current');
const durationTimeSong = $('.range-time_remaining');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
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
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/mp3/Hoa Cỏ Lau Lofi (Ver 2) - Phong Max x Bụi Chill - Giữa Mênh Mang Đồi Hoa Cỏ Lau - Lyrics Video.mp3',
            imgage: './assets/img/cd/hoacolau.jpg'
        },
        {
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/mp3/Hoa Cỏ Lau Lofi (Ver 2) - Phong Max x Bụi Chill - Giữa Mênh Mang Đồi Hoa Cỏ Lau - Lyrics Video.mp3',
            imgage: './assets/img/cd/hoacolau.jpg'
        },
        {
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/mp3/Hoa Cỏ Lau Lofi (Ver 2) - Phong Max x Bụi Chill - Giữa Mênh Mang Đồi Hoa Cỏ Lau - Lyrics Video.mp3',
            imgage: './assets/img/cd/hoacolau.jpg'
        },
        {
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/mp3/Hoa Cỏ Lau Lofi (Ver 2) - Phong Max x Bụi Chill - Giữa Mênh Mang Đồi Hoa Cỏ Lau - Lyrics Video.mp3',
            imgage: './assets/img/cd/hoacolau.jpg'
        },
        {
            name: 'Hoa Cỏ Lau',
            singer: 'Phong Max',
            path: './assets/mp3/Hoa Cỏ Lau Lofi (Ver 2) - Phong Max x Bụi Chill - Giữa Mênh Mang Đồi Hoa Cỏ Lau - Lyrics Video.mp3',
            imgage: './assets/img/cd/hoacolau.jpg'
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
        
    ],
    defineProperties: function() {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },


    render: function() {
        var _this = this;
        const htmls = this.songs.map(function(song,index) {  
            return `<li class="item-music ${index === _this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="item-music-wrap"> 
            <div class="item-music_img-wrap">
                <img src="${song.imgage}" alt="" class="item-music_img">
            </div>
            <div class="item-music_infor">
                <h3 class="item-music_infor-name">${song.name}</h3>
                <p class="item-music_infor_author">${song.singer}</p>
            </div>
            <div id="ware">
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
                <span class="stroke"></span>
            </div>
            <div class="item-music_options">
                <i class="item-music_options-icon ti-more-alt"></i>
            </div>
            </div>
        </li>
        `
        })

        playlist.innerHTML = (htmls.join('\n'));
    },

    scrollToActiveSong: function() {
        const currentplay = $('.item-music.active');
        setTimeout(() => {
            currentplay.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
        
    },
       

    loadCurrentSong: function() {
        audio.src = this.currentSong.path;
        songNameCurrent.textContent = `${this.currentSong.name}`;
        songAuthorCurrent.textContent = `${this.currentSong.singer}`;
        songImgCurrent.style.backgroundImage = `url(${this.currentSong.imgage})`;
    },


    handleEvents: function() {
        const _this = this;

        // xử lý cd quay khi start vào dừng quay khi pause
        // sử dụng animate 
        cdAnimate = cd.animate(
            [
                { transform: "rotate(360deg)"} // hiệu ứng xoay
            ],
            {
                duration: 10000,// thời gian thực hiện hiệu ứng
                iterations: Infinity,// vòng lặp hiệu ứng
            }
            )
            cdAnimate.pause();    

       // khi bấm vào nút play thì phát nhạc
        btnPlay.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
            
        }

        // khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            music.classList.add('playing');
            cdAnimate.play();
        }

        // khi song bị pause 
        audio.onpause = function() {
            _this.isPlaying = false;
            music.classList.remove('playing');
            cdAnimate.pause();
        }
        

        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const rangeTimePercet = Math.floor(audio.currentTime/ audio.duration * 100);
                rangeTime.value = rangeTimePercet;
                
                let currentMinutes = Math.floor(audio.currentTime / 60);
                let currentSeconds = Math.floor(audio.currentTime - currentMinutes*60);
                let durationMinutes = Math.floor(audio.duration / 60);
                let durationSeconds = Math.floor(audio.duration - durationMinutes*60);

                if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
                if(durationSeconds < 10) {durationSeconds = "0" + durationSeconds; }
                if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
                if(durationMinutes < 10) {durationMinutes = "0" + durationMinutes; }

                currentTimeSong.textContent = currentMinutes + ":" + currentSeconds;
                durationTimeSong.textContent = durationMinutes + ":" + durationSeconds;

            }
        }

        // xử lý khi tua bài hát
        rangeTime.onchange = function(e) {
            const seekTime = e.target.value / 100 * audio.duration;
            audio.currentTime = seekTime;
        }



        // xử lý tăng âm lượng
        btnIncreaseVolume.onclick = function() {
            
            if( audio.volume < 1.0 ) {
                audio.volume += 0.1;
            }
        }

        // xử lý giảm âm lượng
        btnDecreaseVolume.onclick =function() {
            
            if( audio.volume > 0.1 ) {
                audio.volume -= 0.1;
            }
        }

        // xử lý khi tăng, giảm âm lượng thì trên thanh âm lượng cũng thay đổi
        audio.onvolumechange = function(e) {
            const currentVolumt = Math.floor(e.target.volume * 100);
            console.log(currentVolumt);
            rangeVolumn.value = currentVolumt;
        }

        // xử lý kéo thả âm lượng trên thanh âm lượng thì âm lượng cũng thay đổi
        rangeVolumn.onchange = function(e) {
            const seekVolumne = e.target.value;
            audio.volume = seekVolumne / 100;
        }

        // xử lý next bài hát
        btnNext.onclick = function() {
            if(_this.isRandom) {
                _this.ranDomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // xử lý prev bài hát
        btnPrev.onclick = function() {
            if(_this.isRandom) {
                _this.ranDomSong();
            }
            else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();// sử dụng để khi phát đến bài nào bài đó được đẩy ln view trong playlist
        }

        //xử lý khi random bài hát
        btnRandom.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            e.target.classList.toggle('active',_this.isRandom);
            // dùng toggle đối số thứ 2 là boolean nếu là true thì 
            // add class còn nếu là false thì xóa class.
        }
        // xử lý khi repeat bài hát 
        btnRepeat.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            e.target.classList.toggle('active',_this.isRepeat);
            // dùng toggle đối số thứ 2 là boolean nếu là true thì 
            // add class còn nếu là false thì xóa class.
        }

        //xử lý next song khi audio ended
        // onended là sự kiện khi kết thúc một bài hát
        audio.onended = function() {
            // nghĩa là khi hết một bài thì nó lại thực hiện hành vi click vào nút next
            if(_this.isRepeat) {
               audio.currentTime = 0;
               audio.play();
            }
            else {
                btnNext.click()
            }
        }

        // xử lý click vào bài hát trên playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.item-music:not(.active)')
            if(songNode || e.target.closest('.item-music_options-icon')) {
                if(songNode) {
                    _this.currentIndex = Number(songNode.getAttribute('data-index'));
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
        }

        



 
    },

    nextSong: function() {
        this.currentIndex ++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex -= 1;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    ranDomSong: function() {
        var prevSongIndex = [];
        let newIndex; 
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while( newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        
    },


    start: function() {
        // định nghĩa các thuộc tính cho object
        this.defineProperties();

        // lắng nge và xử lý các sự kiện
        this.handleEvents();

        // tải thông tin bài hát đầu tiên vào ui
        this.loadCurrentSong();

        // render ra giao diện người dùng
        this.render();




    },
};

app.start();





const songFavorite = document.querySelector('.header_favorite-song-icon');
const toggleFavorite = document.querySelectorAll('.header_favorite-song .header-desc');


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



















 




