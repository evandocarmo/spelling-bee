window.onload = function(){
    var audioFiles = ["./public/audio/basic/adventure.mp3", 
    "./public/audio/basic/always.mp3", 
    "./public/audio/basic/apple.mp3", 
    "./public/audio/basic/aunt.mp3", 
    "./public/audio/basic/autumn.mp3", 
    "./public/audio/basic/bacon.mp3", 
    "./public/audio/basic/banana.mp3", 
    "./public/audio/basic/bank.mp3", 
    "./public/audio/basic/barbecue.mp3", 
    "./public/audio/basic/bath.mp3", 
    "./public/audio/basic/bathroom.mp3", 
    "./public/audio/basic/bed.mp3", 
    "./public/audio/basic/bedroom.mp3", 
    "./public/audio/basic/behave.mp3", 
    "./public/audio/basic/bicycle.mp3", 
    "./public/audio/basic/birthday.mp3", 
    "./public/audio/basic/blackout.mp3", 
    "./public/audio/basic/borrow.mp3", 
    "./public/audio/basic/bowling.mp3", 
    "./public/audio/basic/breakfast.mp3", 
    "./public/audio/basic/businessman.mp3", 
    "./public/audio/basic/businesswoman.mp3", 
    "./public/audio/basic/butter.mp3", 
    "./public/audio/basic/cafe.mp3", 
    "./public/audio/basic/cake.mp3", 
    "./public/audio/basic/campsite.mp3", 
    "./public/audio/basic/canteen.mp3", 
    "./public/audio/basic/cereal.mp3", 
    "./public/audio/basic/chair.mp3", 
    "./public/audio/basic/chemist.mp3", 
    "./public/audio/basic/chocolate.mp3", 
    "./public/audio/basic/church.mp3", 
    "./public/audio/basic/cinema.mp3", 
    "./public/audio/basic/clock.mp3", 
    "./public/audio/basic/cloudy.mp3", 
    "./public/audio/basic/coffee.mp3", 
    "./public/audio/basic/cookie.mp3", 
    "./public/audio/basic/cycling.mp3", 
    "./public/audio/basic/dancing.mp3", 
    "./public/audio/basic/deadline.mp3", 
    "./public/audio/basic/devastate.mp3", 
    "./public/audio/basic/difficult.mp3", 
    "./public/audio/basic/door.mp3", 
    "./public/audio/basic/educational.mp3", 
    "./public/audio/basic/egg.mp3", 
    "./public/audio/basic/eighteenth.mp3", 
    "./public/audio/basic/eighth.mp3", 
    "./public/audio/basic/electricity.mp3", 
    "./public/audio/basic/endangered.mp3", 
    "./public/audio/basic/expensive.mp3", 
    "./public/audio/basic/fifteenth.mp3", 
    "./public/audio/basic/fifth.mp3", 
    "./public/audio/basic/firefighter.mp3", 
    "./public/audio/basic/first.mp3", 
    "./public/audio/basic/flat.mp3", 
    "./public/audio/basic/forest.mp3", 
    "./public/audio/basic/fourteenth.mp3", 
    "./public/audio/basic/fourth.mp3", 
    "./public/audio/basic/fruit.mp3", 
    "./public/audio/basic/gallery.mp3", 
    "./public/audio/basic/garage.mp3", 
    "./public/audio/basic/garden.mp3", 
    "./public/audio/basic/government.mp3", 
    "./public/audio/basic/hall.mp3", 
    "./public/audio/basic/hammock.mp3", 
    "./public/audio/basic/handicraft.mp3", 
    "./public/audio/basic/handsome.mp3", 
    "./public/audio/basic/high.mp3", 
    "./public/audio/basic/horoscope.mp3", 
    "./public/audio/basic/hospital.mp3", 
    "./public/audio/basic/house.mp3", 
    "./public/audio/basic/intelligent.mp3", 
    "./public/audio/basic/interesting.mp3", 
    "./public/audio/basic/interview.mp3", 
    "./public/audio/basic/jam.mp3", 
    "./public/audio/basic/kitchen.mp3", 
    "./public/audio/basic/lend.mp3", 
    "./public/audio/basic/library.mp3", 
    "./public/audio/basic/liner.mp3", 
    "./public/audio/basic/lonely.mp3", 
    "./public/audio/basic/luxury.mp3", 
    "./public/audio/basic/march.mp3", 
    "./public/audio/basic/midday.mp3", 
    "./public/audio/basic/midnight.mp3", 
    "./public/audio/basic/milk.mp3", 
    "./public/audio/basic/motorcycle.mp3", 
    "./public/audio/basic/mountain.mp3", 
    "./public/audio/basic/museum.mp3", 
    "./public/audio/basic/neighbor.mp3", 
    "./public/audio/basic/nickname.mp3", 
    "./public/audio/basic/nineteenth.mp3", 
    "./public/audio/basic/ninth.mp3", 
    "./public/audio/basic/often.mp3", 
    "./public/audio/basic/open.mp3", 
    "./public/audio/basic/parasailing.mp3", 
    "./public/audio/basic/park.mp3", 
    "./public/audio/basic/party.mp3", 
    "./public/audio/basic/passenger.mp3", 
    "./public/audio/basic/pub.mp3", 
    "./public/audio/basic/puzzle.mp3", 
    "./public/audio/basic/rafting.mp3", 
    "./public/audio/basic/research.mp3", 
    "./public/audio/basic/restaurant.mp3", 
    "./public/audio/basic/scooter.mp3", 
    "./public/audio/basic/scratch.mp3", 
    "./public/audio/basic/second.mp3", 
    "./public/audio/basic/sensational.mp3", 
    "./public/audio/basic/seventeenth.mp3", 
    "./public/audio/basic/sightseeing.mp3", 
    "./public/audio/basic/simulation.mp3", 
    "./public/audio/basic/sixteenth.mp3", 
    "./public/audio/basic/sixth.mp3", 
    "./public/audio/basic/skating.mp3", 
    "./public/audio/basic/sofa.mp3", 
    "./public/audio/basic/sometimes.mp3", 
    "./public/audio/basic/soup.mp3", 
    "./public/audio/basic/souvenir.mp3", 
    "./public/audio/basic/spring.mp3", 
    "./public/audio/basic/strategy.mp3", 
    "./public/audio/basic/successful.mp3", 
    "./public/audio/basic/suddenly.mp3", 
    "./public/audio/basic/summer.mp3", 
    "./public/audio/basic/sunny.mp3", 
    "./public/audio/basic/supermarket.mp3", 
    "./public/audio/basic/swimming.mp3", 
    "./public/audio/basic/table.mp3", 
    "./public/audio/basic/tea.mp3", 
    "./public/audio/basic/teeth.mp3", 
    "./public/audio/basic/telephone.mp3", 
    "./public/audio/basic/temperature.mp3", 
    "./public/audio/basic/tenth.mp3", 
    "./public/audio/basic/third.mp3", 
    "./public/audio/basic/toast.mp3", 
    "./public/audio/basic/toilet.mp3", 
    "./public/audio/basic/tooth.mp3", 
    "./public/audio/basic/usually.mp3", 
    "./public/audio/basic/voyage.mp3", 
    "./public/audio/basic/waterfall.mp3", 
    "./public/audio/basic/weather.mp3", 
    "./public/audio/basic/window.mp3", 
    "./public/audio/basic/windy.mp3", 
    "./public/audio/basic/winter.mp3", 
    "./public/audio/basic/worse.mp3", 
    "./public/audio/basic/worst.mp3",
    "./public/audio/basic/always.mp3", 
    "./public/audio/basic/apple.mp3", 
    "./public/audio/basic/aunt.mp3", 
    "./public/audio/basic/autumn.mp3", 
    "./public/audio/basic/bacon.mp3", 
    "./public/audio/basic/banana.mp3", 
    "./public/audio/basic/bank.mp3", 
    "./public/audio/basic/barbecue.mp3", 
    "./public/audio/basic/basic.txt", 
    "./public/audio/basic/bath.mp3", 
    "./public/audio/basic/bathroom.mp3", 
    "./public/audio/basic/bed.mp3", 
    "./public/audio/basic/bedroom.mp3", 
    "./public/audio/basic/behave.mp3", 
    "./public/audio/basic/bicycle.mp3", 
    "./public/audio/basic/birthday.mp3", 
    "./public/audio/basic/blackout.mp3", 
    "./public/audio/basic/borrow.mp3", 
    "./public/audio/basic/bowling.mp3", 
    "./public/audio/basic/breakfast.mp3", 
    "./public/audio/basic/businessman.mp3", 
    "./public/audio/basic/businesswoman.mp3", 
    "./public/audio/basic/butter.mp3", 
    "./public/audio/basic/cafe.mp3", 
    "./public/audio/basic/cake.mp3", 
    "./public/audio/basic/campsite.mp3", 
    "./public/audio/basic/canteen.mp3", 
    "./public/audio/basic/cereal.mp3", 
    "./public/audio/basic/chair.mp3", 
    "./public/audio/basic/chemist.mp3", 
    "./public/audio/basic/chocolate.mp3", 
    "./public/audio/basic/church.mp3", 
    "./public/audio/basic/cinema.mp3", 
    "./public/audio/basic/clock.mp3", 
    "./public/audio/basic/cloudy.mp3", 
    "./public/audio/basic/coffee.mp3", 
    "./public/audio/basic/cookie.mp3", 
    "./public/audio/basic/cycling.mp3", 
    "./public/audio/basic/dancing.mp3", 
    "./public/audio/basic/deadline.mp3", 
    "./public/audio/basic/devastate.mp3", 
    "./public/audio/basic/difficult.mp3", 
    "./public/audio/basic/door.mp3", 
    "./public/audio/basic/educational.mp3", 
    "./public/audio/basic/egg.mp3", 
    "./public/audio/basic/eighteenth.mp3", 
    "./public/audio/basic/eighth.mp3", 
    "./public/audio/basic/electricity.mp3", 
    "./public/audio/basic/endangered.mp3", 
    "./public/audio/basic/expensive.mp3", 
    "./public/audio/basic/fifteenth.mp3", 
    "./public/audio/basic/fifth.mp3", 
    "./public/audio/basic/firefighter.mp3", 
    "./public/audio/basic/first.mp3", 
    "./public/audio/basic/flat.mp3", 
    "./public/audio/basic/forest.mp3", 
    "./public/audio/basic/fourteenth.mp3", 
    "./public/audio/basic/fourth.mp3", 
    "./public/audio/basic/fruit.mp3", 
    "./public/audio/basic/gallery.mp3", 
    "./public/audio/basic/garage.mp3", 
    "./public/audio/basic/garden.mp3", 
    "./public/audio/basic/government.mp3", 
    "./public/audio/basic/hall.mp3", 
    "./public/audio/basic/hammock.mp3", 
    "./public/audio/basic/handicraft.mp3", 
    "./public/audio/basic/handsome.mp3", 
    "./public/audio/basic/high.mp3", 
    "./public/audio/basic/horoscope.mp3", 
    "./public/audio/basic/hospital.mp3", 
    "./public/audio/basic/house.mp3", 
    "./public/audio/basic/intelligent.mp3", 
    "./public/audio/basic/interesting.mp3", 
    "./public/audio/basic/interview.mp3", 
    "./public/audio/basic/jam.mp3", 
    "./public/audio/basic/kitchen.mp3", 
    "./public/audio/basic/lend.mp3", 
    "./public/audio/basic/library.mp3", 
    "./public/audio/basic/liner.mp3", 
    "./public/audio/basic/lonely.mp3", 
    "./public/audio/basic/luxury.mp3", 
    "./public/audio/basic/march.mp3", 
    "./public/audio/basic/midday.mp3", 
    "./public/audio/basic/midnight.mp3", 
    "./public/audio/basic/milk.mp3", 
    "./public/audio/basic/motorcycle.mp3", 
    "./public/audio/basic/mountain.mp3", 
    "./public/audio/basic/museum.mp3", 
    "./public/audio/basic/neighbor.mp3", 
    "./public/audio/basic/nickname.mp3", 
    "./public/audio/basic/nineteenth.mp3", 
    "./public/audio/basic/ninth.mp3", 
    "./public/audio/basic/often.mp3", 
    "./public/audio/basic/open.mp3", 
    "./public/audio/basic/parasailing.mp3", 
    "./public/audio/basic/park.mp3", 
    "./public/audio/basic/party.mp3", 
    "./public/audio/basic/passenger.mp3", 
    "./public/audio/basic/pub.mp3", 
    "./public/audio/basic/puzzle.mp3", 
    "./public/audio/basic/rafting.mp3", 
    "./public/audio/basic/research.mp3", 
    "./public/audio/basic/restaurant.mp3", 
    "./public/audio/basic/scooter.mp3", 
    "./public/audio/basic/scratch.mp3", 
    "./public/audio/basic/second.mp3", 
    "./public/audio/basic/sensational.mp3", 
    "./public/audio/basic/seventeenth.mp3", 
    "./public/audio/basic/sightseeing.mp3", 
    "./public/audio/basic/simulation.mp3", 
    "./public/audio/basic/sixteenth.mp3", 
    "./public/audio/basic/sixth.mp3", 
    "./public/audio/basic/skating.mp3", 
    "./public/audio/basic/sofa.mp3", 
    "./public/audio/basic/sometimes.mp3", 
    "./public/audio/basic/soup.mp3", 
    "./public/audio/basic/souvenir.mp3", 
    "./public/audio/basic/spring.mp3", 
    "./public/audio/basic/strategy.mp3", 
    "./public/audio/basic/successful.mp3", 
    "./public/audio/basic/suddenly.mp3", 
    "./public/audio/basic/summer.mp3", 
    "./public/audio/basic/sunny.mp3", 
    "./public/audio/basic/supermarket.mp3", 
    "./public/audio/basic/swimming.mp3", 
    "./public/audio/basic/table.mp3", 
    "./public/audio/basic/tea.mp3", 
    "./public/audio/basic/teeth.mp3", 
    "./public/audio/basic/telephone.mp3", 
    "./public/audio/basic/temperature.mp3", 
    "./public/audio/basic/tenth.mp3", 
    "./public/audio/basic/third.mp3", 
    "./public/audio/basic/toast.mp3", 
    "./public/audio/basic/toilet.mp3", 
    "./public/audio/basic/tooth.mp3", 
    "./public/audio/basic/usually.mp3", 
    "./public/audio/basic/voyage.mp3", 
    "./public/audio/basic/waterfall.mp3", 
    "./public/audio/basic/weather.mp3", 
    "./public/audio/basic/window.mp3", 
    "./public/audio/basic/windy.mp3", 
    "./public/audio/basic/winter.mp3", 
    "./public/audio/basic/worse.mp3", 
    "./public/audio/basic/worst.mp3", 
    "./public/audio/basic/zoo.mp3"];
    
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
        if (loaded > 10){
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