"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
  var audioFiles = ["./public/audio/basic/adventure.mp3", "./public/audio/basic/always.mp3", "./public/audio/basic/apple.mp3", "./public/audio/basic/aunt.mp3", "./public/audio/basic/autumn.mp3", "./public/audio/basic/bacon.mp3", "./public/audio/basic/banana.mp3", "./public/audio/basic/bank.mp3", "./public/audio/basic/barbecue.mp3", "./public/audio/basic/bath.mp3", "./public/audio/basic/bathroom.mp3", "./public/audio/basic/bed.mp3", "./public/audio/basic/bedroom.mp3", "./public/audio/basic/behave.mp3", "./public/audio/basic/bicycle.mp3", "./public/audio/basic/birthday.mp3", "./public/audio/basic/blackout.mp3", "./public/audio/basic/borrow.mp3", "./public/audio/basic/bowling.mp3", "./public/audio/basic/breakfast.mp3", "./public/audio/basic/businessman.mp3", "./public/audio/basic/businesswoman.mp3", "./public/audio/basic/butter.mp3", "./public/audio/basic/cafe.mp3", "./public/audio/basic/cake.mp3", "./public/audio/basic/campsite.mp3", "./public/audio/basic/canteen.mp3", "./public/audio/basic/cereal.mp3", "./public/audio/basic/chair.mp3", "./public/audio/basic/chemist.mp3", "./public/audio/basic/chocolate.mp3", "./public/audio/basic/church.mp3", "./public/audio/basic/cinema.mp3", "./public/audio/basic/clock.mp3", "./public/audio/basic/cloudy.mp3", "./public/audio/basic/coffee.mp3", "./public/audio/basic/cookie.mp3", "./public/audio/basic/cycling.mp3", "./public/audio/basic/dancing.mp3", "./public/audio/basic/deadline.mp3", "./public/audio/basic/devastate.mp3", "./public/audio/basic/difficult.mp3", "./public/audio/basic/door.mp3", "./public/audio/basic/educational.mp3", "./public/audio/basic/egg.mp3", "./public/audio/basic/eighteenth.mp3", "./public/audio/basic/eighth.mp3", "./public/audio/basic/electricity.mp3", "./public/audio/basic/endangered.mp3", "./public/audio/basic/expensive.mp3", "./public/audio/basic/fifteenth.mp3", "./public/audio/basic/fifth.mp3", "./public/audio/basic/firefighter.mp3", "./public/audio/basic/first.mp3", "./public/audio/basic/flat.mp3", "./public/audio/basic/forest.mp3", "./public/audio/basic/fourteenth.mp3", "./public/audio/basic/fourth.mp3", "./public/audio/basic/fruit.mp3", "./public/audio/basic/gallery.mp3", "./public/audio/basic/garage.mp3", "./public/audio/basic/garden.mp3", "./public/audio/basic/government.mp3", "./public/audio/basic/hall.mp3", "./public/audio/basic/hammock.mp3", "./public/audio/basic/handicraft.mp3", "./public/audio/basic/handsome.mp3", "./public/audio/basic/high.mp3", "./public/audio/basic/horoscope.mp3", "./public/audio/basic/hospital.mp3", "./public/audio/basic/house.mp3", "./public/audio/basic/intelligent.mp3", "./public/audio/basic/interesting.mp3", "./public/audio/basic/interview.mp3", "./public/audio/basic/jam.mp3", "./public/audio/basic/kitchen.mp3", "./public/audio/basic/lend.mp3", "./public/audio/basic/library.mp3", "./public/audio/basic/liner.mp3", "./public/audio/basic/lonely.mp3", "./public/audio/basic/luxury.mp3", "./public/audio/basic/march.mp3", "./public/audio/basic/midday.mp3", "./public/audio/basic/midnight.mp3", "./public/audio/basic/milk.mp3", "./public/audio/basic/motorcycle.mp3", "./public/audio/basic/mountain.mp3", "./public/audio/basic/museum.mp3", "./public/audio/basic/neighbor.mp3", "./public/audio/basic/nickname.mp3", "./public/audio/basic/nineteenth.mp3", "./public/audio/basic/ninth.mp3", "./public/audio/basic/often.mp3", "./public/audio/basic/open.mp3", "./public/audio/basic/parasailing.mp3", "./public/audio/basic/park.mp3", "./public/audio/basic/party.mp3", "./public/audio/basic/passenger.mp3", "./public/audio/basic/pub.mp3", "./public/audio/basic/puzzle.mp3", "./public/audio/basic/rafting.mp3", "./public/audio/basic/research.mp3", "./public/audio/basic/restaurant.mp3", "./public/audio/basic/scooter.mp3", "./public/audio/basic/scratch.mp3", "./public/audio/basic/second.mp3", "./public/audio/basic/sensational.mp3", "./public/audio/basic/seventeenth.mp3", "./public/audio/basic/sightseeing.mp3", "./public/audio/basic/simulation.mp3", "./public/audio/basic/sixteenth.mp3", "./public/audio/basic/sixth.mp3", "./public/audio/basic/skating.mp3", "./public/audio/basic/sofa.mp3", "./public/audio/basic/sometimes.mp3", "./public/audio/basic/soup.mp3", "./public/audio/basic/souvenir.mp3", "./public/audio/basic/spring.mp3", "./public/audio/basic/strategy.mp3", "./public/audio/basic/successful.mp3", "./public/audio/basic/suddenly.mp3", "./public/audio/basic/summer.mp3", "./public/audio/basic/sunny.mp3", "./public/audio/basic/supermarket.mp3", "./public/audio/basic/swimming.mp3", "./public/audio/basic/table.mp3", "./public/audio/basic/tea.mp3", "./public/audio/basic/teeth.mp3", "./public/audio/basic/telephone.mp3", "./public/audio/basic/temperature.mp3", "./public/audio/basic/tenth.mp3", "./public/audio/basic/third.mp3", "./public/audio/basic/toast.mp3", "./public/audio/basic/toilet.mp3", "./public/audio/basic/tooth.mp3", "./public/audio/basic/usually.mp3", "./public/audio/basic/voyage.mp3", "./public/audio/basic/waterfall.mp3", "./public/audio/basic/weather.mp3", "./public/audio/basic/window.mp3", "./public/audio/basic/windy.mp3", "./public/audio/basic/winter.mp3", "./public/audio/basic/worse.mp3", "./public/audio/basic/worst.mp3", "./public/audio/basic/always.mp3", "./public/audio/basic/apple.mp3", "./public/audio/basic/aunt.mp3", "./public/audio/basic/autumn.mp3", "./public/audio/basic/bacon.mp3", "./public/audio/basic/banana.mp3", "./public/audio/basic/bank.mp3", "./public/audio/basic/barbecue.mp3", "./public/audio/basic/basic.txt", "./public/audio/basic/bath.mp3", "./public/audio/basic/bathroom.mp3", "./public/audio/basic/bed.mp3", "./public/audio/basic/bedroom.mp3", "./public/audio/basic/behave.mp3", "./public/audio/basic/bicycle.mp3", "./public/audio/basic/birthday.mp3", "./public/audio/basic/blackout.mp3", "./public/audio/basic/borrow.mp3", "./public/audio/basic/bowling.mp3", "./public/audio/basic/breakfast.mp3", "./public/audio/basic/businessman.mp3", "./public/audio/basic/businesswoman.mp3", "./public/audio/basic/butter.mp3", "./public/audio/basic/cafe.mp3", "./public/audio/basic/cake.mp3", "./public/audio/basic/campsite.mp3", "./public/audio/basic/canteen.mp3", "./public/audio/basic/cereal.mp3", "./public/audio/basic/chair.mp3", "./public/audio/basic/chemist.mp3", "./public/audio/basic/chocolate.mp3", "./public/audio/basic/church.mp3", "./public/audio/basic/cinema.mp3", "./public/audio/basic/clock.mp3", "./public/audio/basic/cloudy.mp3", "./public/audio/basic/coffee.mp3", "./public/audio/basic/cookie.mp3", "./public/audio/basic/cycling.mp3", "./public/audio/basic/dancing.mp3", "./public/audio/basic/deadline.mp3", "./public/audio/basic/devastate.mp3", "./public/audio/basic/difficult.mp3", "./public/audio/basic/door.mp3", "./public/audio/basic/educational.mp3", "./public/audio/basic/egg.mp3", "./public/audio/basic/eighteenth.mp3", "./public/audio/basic/eighth.mp3", "./public/audio/basic/electricity.mp3", "./public/audio/basic/endangered.mp3", "./public/audio/basic/expensive.mp3", "./public/audio/basic/fifteenth.mp3", "./public/audio/basic/fifth.mp3", "./public/audio/basic/firefighter.mp3", "./public/audio/basic/first.mp3", "./public/audio/basic/flat.mp3", "./public/audio/basic/forest.mp3", "./public/audio/basic/fourteenth.mp3", "./public/audio/basic/fourth.mp3", "./public/audio/basic/fruit.mp3", "./public/audio/basic/gallery.mp3", "./public/audio/basic/garage.mp3", "./public/audio/basic/garden.mp3", "./public/audio/basic/government.mp3", "./public/audio/basic/hall.mp3", "./public/audio/basic/hammock.mp3", "./public/audio/basic/handicraft.mp3", "./public/audio/basic/handsome.mp3", "./public/audio/basic/high.mp3", "./public/audio/basic/horoscope.mp3", "./public/audio/basic/hospital.mp3", "./public/audio/basic/house.mp3", "./public/audio/basic/intelligent.mp3", "./public/audio/basic/interesting.mp3", "./public/audio/basic/interview.mp3", "./public/audio/basic/jam.mp3", "./public/audio/basic/kitchen.mp3", "./public/audio/basic/lend.mp3", "./public/audio/basic/library.mp3", "./public/audio/basic/liner.mp3", "./public/audio/basic/lonely.mp3", "./public/audio/basic/luxury.mp3", "./public/audio/basic/march.mp3", "./public/audio/basic/midday.mp3", "./public/audio/basic/midnight.mp3", "./public/audio/basic/milk.mp3", "./public/audio/basic/motorcycle.mp3", "./public/audio/basic/mountain.mp3", "./public/audio/basic/museum.mp3", "./public/audio/basic/neighbor.mp3", "./public/audio/basic/nickname.mp3", "./public/audio/basic/nineteenth.mp3", "./public/audio/basic/ninth.mp3", "./public/audio/basic/often.mp3", "./public/audio/basic/open.mp3", "./public/audio/basic/parasailing.mp3", "./public/audio/basic/park.mp3", "./public/audio/basic/party.mp3", "./public/audio/basic/passenger.mp3", "./public/audio/basic/pub.mp3", "./public/audio/basic/puzzle.mp3", "./public/audio/basic/rafting.mp3", "./public/audio/basic/research.mp3", "./public/audio/basic/restaurant.mp3", "./public/audio/basic/scooter.mp3", "./public/audio/basic/scratch.mp3", "./public/audio/basic/second.mp3", "./public/audio/basic/sensational.mp3", "./public/audio/basic/seventeenth.mp3", "./public/audio/basic/sightseeing.mp3", "./public/audio/basic/simulation.mp3", "./public/audio/basic/sixteenth.mp3", "./public/audio/basic/sixth.mp3", "./public/audio/basic/skating.mp3", "./public/audio/basic/sofa.mp3", "./public/audio/basic/sometimes.mp3", "./public/audio/basic/soup.mp3", "./public/audio/basic/souvenir.mp3", "./public/audio/basic/spring.mp3", "./public/audio/basic/strategy.mp3", "./public/audio/basic/successful.mp3", "./public/audio/basic/suddenly.mp3", "./public/audio/basic/summer.mp3", "./public/audio/basic/sunny.mp3", "./public/audio/basic/supermarket.mp3", "./public/audio/basic/swimming.mp3", "./public/audio/basic/table.mp3", "./public/audio/basic/tea.mp3", "./public/audio/basic/teeth.mp3", "./public/audio/basic/telephone.mp3", "./public/audio/basic/temperature.mp3", "./public/audio/basic/tenth.mp3", "./public/audio/basic/third.mp3", "./public/audio/basic/toast.mp3", "./public/audio/basic/toilet.mp3", "./public/audio/basic/tooth.mp3", "./public/audio/basic/usually.mp3", "./public/audio/basic/voyage.mp3", "./public/audio/basic/waterfall.mp3", "./public/audio/basic/weather.mp3", "./public/audio/basic/window.mp3", "./public/audio/basic/windy.mp3", "./public/audio/basic/winter.mp3", "./public/audio/basic/worse.mp3", "./public/audio/basic/worst.mp3", "./public/audio/basic/zoo.mp3"];

  var context = new (window.AudioContext || window.webkitAudioContext)();

  var Buffer = function () {
    function Buffer(context, urls) {
      _classCallCheck(this, Buffer);

      this.context = context;
      this.urls = urls;
      this.buffer = [];
    }

    _createClass(Buffer, [{
      key: "loadSound",
      value: function loadSound(url, index) {
        console.log(index + " words loaded.");
        var request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        var thisBuffer = this;
        request.onload = function () {
          thisBuffer.context.decodeAudioData(request.response, function (buffer) {
            thisBuffer.buffer[index] = buffer;
            if (index === 10) {
              thisBuffer.loaded();
            }
          });
        };
        request.send();
      }
    }, {
      key: "loadAll",
      value: function loadAll() {
        var _this = this;

        this.urls.forEach(function (url, index) {
          _this.loadSound(url, index);
        });
      }
    }, {
      key: "loaded",
      value: function loaded() {
        // what happens when all the files are loaded
        var randomIndex;
        var randomWord;
        var cleanWord;
        var loading = document.getElementById("loading");
        if (loading) loading.parentNode.removeChild(loading);
        console.log('Start game!');

        function playWord() {
          randomIndex = Math.floor(Math.random() * audioFiles.length);
          randomWord = audioFiles[randomIndex];
          cleanWord = randomWord.replace(/\.[^/.]+$/, "").split("/").pop();
          var sound = new Sound(context, buffer.getSoundByIndex(randomIndex));
          sound.play();
        }

        function correction() {
          var answer = document.getElementById('answer').value.toLowerCase();
          var result = document.getElementById('result');
          if (answer === cleanWord) {
            result.classList.add('correct');
            result.classList.remove('incorrect');
            result.innerHTML = '...';
            setTimeout(function () {
              result.innerHTML = "Yes! That's correct!";
            }, 500);
          } else {
            result.classList.add('incorrect');
            result.classList.remove('correct');
            result.innerHTML = '...';
            setTimeout(function () {
              result.innerHTML = "Sorry, try again!";
            }, 500);
          }
        }

        function reveal() {
          document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
        }

        function correctionEnter(event) {
          var y = event.keyCode;
          if (y === 13) correction();
        }

        function setRepeat() {
          var sound = new Sound(context, buffer.getSoundByIndex(randomIndex));
          sound.play();
        }

        document.getElementById("newword").onclick = playWord;
        document.getElementById("submit").onclick = correction;
        document.getElementById("revealButton").onclick = reveal;
        document.getElementById("repeat").onclick = setRepeat;
        document.getElementById("answer").onkeydown = correctionEnter;
      }
    }, {
      key: "getSoundByIndex",
      value: function getSoundByIndex(index) {
        return this.buffer[index];
      }
    }]);

    return Buffer;
  }();

  var Sound = function () {
    function Sound(context, buffer) {
      _classCallCheck(this, Sound);

      this.context = context;
      this.buffer = buffer;
    }

    _createClass(Sound, [{
      key: "init",
      value: function init() {
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
      }
    }, {
      key: "play",
      value: function play() {
        this.init();
        this.source.start(this.context.currentTime);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.5);
        this.source.stop(this.context.currentTime + 0.5);
      }
    }]);

    return Sound;
  }();

  var buffer = new Buffer(context, audioFiles);
  buffer.loadAll();
};