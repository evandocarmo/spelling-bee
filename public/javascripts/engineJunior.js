window.onload = function(){
    var audioFiles = ["./public/audio/junior/alphabet.mp3", 
    "./public/audio/junior/angry.mp3", 
    "./public/audio/junior/august.mp3", 
    "./public/audio/junior/author.mp3", 
    "./public/audio/junior/awesome.mp3", 
    "./public/audio/junior/bad.mp3", 
    "./public/audio/junior/bat.mp3", 
    "./public/audio/junior/bean.mp3", 
    "./public/audio/junior/big.mp3", 
    "./public/audio/junior/bike.mp3", 
    "./public/audio/junior/bin.mp3", 
    "./public/audio/junior/birthday.mp3", 
    "./public/audio/junior/black.mp3", 
    "./public/audio/junior/blog.mp3", 
    "./public/audio/junior/blue.mp3", 
    "./public/audio/junior/board.mp3", 
    "./public/audio/junior/book.mp3", 
    "./public/audio/junior/boring.mp3", 
    "./public/audio/junior/box.mp3", 
    "./public/audio/junior/brother.mp3", 
    "./public/audio/junior/brown.mp3", 
    "./public/audio/junior/busy.mp3", 
    "./public/audio/junior/camera.mp3", 
    "./public/audio/junior/cat.mp3", 
    "./public/audio/junior/chip.mp3", 
    "./public/audio/junior/chubby.mp3", 
    "./public/audio/junior/classroom.mp3", 
    "./public/audio/junior/color.mp3", 
    "./public/audio/junior/comic.mp3", 
    "./public/audio/junior/computer.mp3", 
    "./public/audio/junior/cool.mp3", 
    "./public/audio/junior/country.mp3", 
    "./public/audio/junior/cute.mp3", 
    "./public/audio/junior/diary.mp3", 
    "./public/audio/junior/dictionary.mp3", 
    "./public/audio/junior/dog.mp3", 
    "./public/audio/junior/doll.mp3", 
    "./public/audio/junior/download.mp3", 
    "./public/audio/junior/eight.mp3", 
    "./public/audio/junior/eleven.mp3", 
    "./public/audio/junior/eraser.mp3", 
    "./public/audio/junior/famous.mp3", 
    "./public/audio/junior/fantastic.mp3", 
    "./public/audio/junior/father.mp3", 
    "./public/audio/junior/fish.mp3", 
    "./public/audio/junior/five.mp3", 
    "./public/audio/junior/fog.mp3", 
    "./public/audio/junior/football.mp3", 
    "./public/audio/junior/four.mp3", 
    "./public/audio/junior/friend.mp3", 
    "./public/audio/junior/game.mp3", 
    "./public/audio/junior/german.mp3", 
    "./public/audio/junior/girl.mp3", 
    "./public/audio/junior/gray.mp3", 
    "./public/audio/junior/great.mp3", 
    "./public/audio/junior/green.mp3", 
    "./public/audio/junior/guitar.mp3", 
    "./public/audio/junior/hamburger.mp3", 
    "./public/audio/junior/happy.mp3", 
    "./public/audio/junior/hello.mp3", 
    "./public/audio/junior/home.mp3", 
    "./public/audio/junior/horrible.mp3", 
    "./public/audio/junior/japan.mp3", 
    "./public/audio/junior/junior.txt", 
    "./public/audio/junior/karate.mp3", 
    "./public/audio/junior/luck.mp3", 
    "./public/audio/junior/mad.mp3", 
    "./public/audio/junior/mango.mp3", 
    "./public/audio/junior/march.mp3", 
    "./public/audio/junior/mobile.mp3", 
    "./public/audio/junior/monster.mp3", 
    "./public/audio/junior/month.mp3", 
    "./public/audio/junior/mother.mp3", 
    "./public/audio/junior/music.mp3", 
    "./public/audio/junior/name.mp3", 
    "./public/audio/junior/nice.mp3", 
    "./public/audio/junior/nickname.mp3", 
    "./public/audio/junior/nine.mp3", 
    "./public/audio/junior/no.mp3", 
    "./public/audio/junior/notebook.mp3", 
    "./public/audio/junior/old.mp3", 
    "./public/audio/junior/once.mp3", 
    "./public/audio/junior/one.mp3", 
    "./public/audio/junior/orange.mp3", 
    "./public/audio/junior/party.mp3", 
    "./public/audio/junior/pasta.mp3", 
    "./public/audio/junior/pen.mp3", 
    "./public/audio/junior/pencil.mp3", 
    "./public/audio/junior/pink.mp3", 
    "./public/audio/junior/player.mp3", 
    "./public/audio/junior/polite.mp3", 
    "./public/audio/junior/poster.mp3", 
    "./public/audio/junior/purple.mp3", 
    "./public/audio/junior/rap.mp3", 
    "./public/audio/junior/red.mp3", 
    "./public/audio/junior/rice.mp3", 
    "./public/audio/junior/rich.mp3", 
    "./public/audio/junior/robot.mp3", 
    "./public/audio/junior/rock.mp3", 
    "./public/audio/junior/rude.mp3", 
    "./public/audio/junior/ruler.mp3", 
    "./public/audio/junior/school.mp3", 
    "./public/audio/junior/seven.mp3", 
    "./public/audio/junior/shop.mp3", 
    "./public/audio/junior/sister.mp3", 
    "./public/audio/junior/site.mp3", 
    "./public/audio/junior/six.mp3", 
    "./public/audio/junior/small.mp3", 
    "./public/audio/junior/spider.mp3", 
    "./public/audio/junior/sushi.mp3", 
    "./public/audio/junior/sweet.mp3", 
    "./public/audio/junior/tall.mp3", 
    "./public/audio/junior/taxi.mp3", 
    "./public/audio/junior/telephone.mp3", 
    "./public/audio/junior/ten.mp3", 
    "./public/audio/junior/thin.mp3", 
    "./public/audio/junior/three.mp3", 
    "./public/audio/junior/toy.mp3", 
    "./public/audio/junior/twelve.mp3", 
    "./public/audio/junior/twice.mp3", 
    "./public/audio/junior/two.mp3", 
    "./public/audio/junior/ugly.mp3", 
    "./public/audio/junior/white.mp3", 
    "./public/audio/junior/yellow.mp3", 
    "./public/audio/junior/yes.mp3alphabet.mp3", 
    "./public/audio/junior/angry.mp3", 
    "./public/audio/junior/august.mp3", 
    "./public/audio/junior/author.mp3", 
    "./public/audio/junior/awesome.mp3", 
    "./public/audio/junior/bad.mp3", 
    "./public/audio/junior/bat.mp3", 
    "./public/audio/junior/bean.mp3", 
    "./public/audio/junior/big.mp3", 
    "./public/audio/junior/bike.mp3", 
    "./public/audio/junior/bin.mp3", 
    "./public/audio/junior/birthday.mp3", 
    "./public/audio/junior/black.mp3", 
    "./public/audio/junior/blog.mp3", 
    "./public/audio/junior/blue.mp3", 
    "./public/audio/junior/board.mp3", 
    "./public/audio/junior/book.mp3", 
    "./public/audio/junior/boring.mp3", 
    "./public/audio/junior/box.mp3", 
    "./public/audio/junior/brother.mp3", 
    "./public/audio/junior/brown.mp3", 
    "./public/audio/junior/busy.mp3", 
    "./public/audio/junior/camera.mp3", 
    "./public/audio/junior/cat.mp3", 
    "./public/audio/junior/chip.mp3", 
    "./public/audio/junior/chubby.mp3", 
    "./public/audio/junior/classroom.mp3", 
    "./public/audio/junior/color.mp3", 
    "./public/audio/junior/comic.mp3", 
    "./public/audio/junior/computer.mp3", 
    "./public/audio/junior/cool.mp3", 
    "./public/audio/junior/country.mp3", 
    "./public/audio/junior/cute.mp3", 
    "./public/audio/junior/diary.mp3", 
    "./public/audio/junior/dictionary.mp3", 
    "./public/audio/junior/dog.mp3", 
    "./public/audio/junior/doll.mp3", 
    "./public/audio/junior/download.mp3", 
    "./public/audio/junior/eight.mp3", 
    "./public/audio/junior/eleven.mp3", 
    "./public/audio/junior/eraser.mp3", 
    "./public/audio/junior/famous.mp3", 
    "./public/audio/junior/fantastic.mp3", 
    "./public/audio/junior/father.mp3", 
    "./public/audio/junior/fish.mp3", 
    "./public/audio/junior/five.mp3", 
    "./public/audio/junior/fog.mp3", 
    "./public/audio/junior/football.mp3", 
    "./public/audio/junior/four.mp3", 
    "./public/audio/junior/friend.mp3", 
    "./public/audio/junior/game.mp3", 
    "./public/audio/junior/german.mp3", 
    "./public/audio/junior/girl.mp3", 
    "./public/audio/junior/gray.mp3", 
    "./public/audio/junior/great.mp3", 
    "./public/audio/junior/green.mp3", 
    "./public/audio/junior/guitar.mp3", 
    "./public/audio/junior/hamburger.mp3", 
    "./public/audio/junior/happy.mp3", 
    "./public/audio/junior/hello.mp3", 
    "./public/audio/junior/home.mp3", 
    "./public/audio/junior/horrible.mp3", 
    "./public/audio/junior/japan.mp3", 
    "./public/audio/junior/junior.txt", 
    "./public/audio/junior/karate.mp3", 
    "./public/audio/junior/luck.mp3", 
    "./public/audio/junior/mad.mp3", 
    "./public/audio/junior/mango.mp3", 
    "./public/audio/junior/march.mp3", 
    "./public/audio/junior/mobile.mp3", 
    "./public/audio/junior/monster.mp3", 
    "./public/audio/junior/month.mp3", 
    "./public/audio/junior/mother.mp3", 
    "./public/audio/junior/music.mp3", 
    "./public/audio/junior/name.mp3", 
    "./public/audio/junior/nice.mp3", 
    "./public/audio/junior/nickname.mp3", 
    "./public/audio/junior/nine.mp3", 
    "./public/audio/junior/no.mp3", 
    "./public/audio/junior/notebook.mp3", 
    "./public/audio/junior/old.mp3", 
    "./public/audio/junior/once.mp3", 
    "./public/audio/junior/one.mp3", 
    "./public/audio/junior/orange.mp3", 
    "./public/audio/junior/party.mp3", 
    "./public/audio/junior/pasta.mp3", 
    "./public/audio/junior/pen.mp3", 
    "./public/audio/junior/pencil.mp3", 
    "./public/audio/junior/pink.mp3", 
    "./public/audio/junior/player.mp3", 
    "./public/audio/junior/polite.mp3", 
    "./public/audio/junior/poster.mp3", 
    "./public/audio/junior/purple.mp3", 
    "./public/audio/junior/rap.mp3", 
    "./public/audio/junior/red.mp3", 
    "./public/audio/junior/rice.mp3", 
    "./public/audio/junior/rich.mp3", 
    "./public/audio/junior/robot.mp3", 
    "./public/audio/junior/rock.mp3", 
    "./public/audio/junior/rude.mp3", 
    "./public/audio/junior/ruler.mp3", 
    "./public/audio/junior/school.mp3", 
    "./public/audio/junior/seven.mp3", 
    "./public/audio/junior/shop.mp3", 
    "./public/audio/junior/sister.mp3", 
    "./public/audio/junior/site.mp3", 
    "./public/audio/junior/six.mp3", 
    "./public/audio/junior/small.mp3", 
    "./public/audio/junior/spider.mp3", 
    "./public/audio/junior/sushi.mp3", 
    "./public/audio/junior/sweet.mp3", 
    "./public/audio/junior/tall.mp3", 
    "./public/audio/junior/taxi.mp3", 
    "./public/audio/junior/telephone.mp3", 
    "./public/audio/junior/ten.mp3", 
    "./public/audio/junior/thin.mp3", 
    "./public/audio/junior/three.mp3", 
    "./public/audio/junior/toy.mp3", 
    "./public/audio/junior/twelve.mp3", 
    "./public/audio/junior/twice.mp3", 
    "./public/audio/junior/two.mp3", 
    "./public/audio/junior/ugly.mp3", 
    "./public/audio/junior/white.mp3", 
    "./public/audio/junior/yellow.mp3", 
    "./public/audio/junior/yes.mp3"];
    var randomIndex;
        var randomWord;
        var cleanWord;
        var player = document.getElementById('player');
        
        function init(){
            var loading = document.getElementById("loading");
            if(loading)
                loading.parentNode.removeChild(loading);
            console.log('Start game!');
            function playWord(){
                randomIndex = Math.floor(Math.random() * audioFiles.length);
                randomWord = audioFiles[randomIndex];
                cleanWord = randomWord.replace(/\.[^/.]+$/, "").split("/").pop();
                player.src = randomWord;
                player.play();
            }
            
            function correction(){
                var answer = document.getElementById('answer').value.toLowerCase();
                if (answer === cleanWord){
                    document.getElementById("result").innerHTML = "Yes! That's correct!";
                } else {
                    document.getElementById("result").innerHTML = "Sorry, try again!";
                }
            }
            
            function reveal(){
                 document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
            }
            
            function correctionEnter(){
                var y = event.keyCode;
                if(y === 13)
                correction();
            }
            
            function setRepeat(){
                var audio = new Audio();
                audio.src = randomWord;
                player.src = randomWord;
                player.play();
                
            }
            
            document.getElementById("newword").onclick = playWord;
            document.getElementById("submit").onclick = correction;
            document.getElementById("revealButton").onclick = reveal;
            document.getElementById("repeat").onclick = setRepeat;
            document.getElementById("answer").onkeydown = correctionEnter; 
        }
        
        var loaded = 0;
        function loadedAudio() {
            // this will be called every time an audio file is loaded
            // we keep track of the loaded files vs the requested files
            loaded++;
            console.log(loaded + " words.");
            if (loaded > 20){
            	// enough have loaded
            	init();
            }
        }
        
        function preloadAudio(url) {
            var audio = new Audio();
            // once this file loads, it will call loadedAudio()
            // the file will be kept by the browser as cache
            audio.addEventListener('canplaythrough', loadedAudio, false);
            audio.src = url;
            
        }
        
        for (var i = 0; i < audioFiles.length; i++) {
        (function(ind) {
               setTimeout(function(){preloadAudio(audioFiles[ind]);}, 300 * ind);
           })(i);
        }
};