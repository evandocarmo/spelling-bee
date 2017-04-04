  //audio files used for playing the game
  var audioFiles = ["./public/audio/basic/adventure.mp3", "./public/audio/basic/always.mp3", "./public/audio/basic/apple.mp3", "./public/audio/basic/aunt.mp3", "./public/audio/basic/autumn.mp3", "./public/audio/basic/bacon.mp3", "./public/audio/basic/banana.mp3", "./public/audio/basic/bank.mp3", "./public/audio/basic/barbecue.mp3", "./public/audio/basic/bath.mp3", "./public/audio/basic/bathroom.mp3", "./public/audio/basic/bed.mp3", "./public/audio/basic/bedroom.mp3", "./public/audio/basic/behave.mp3", "./public/audio/basic/bicycle.mp3", "./public/audio/basic/birthday.mp3", "./public/audio/basic/blackout.mp3", "./public/audio/basic/borrow.mp3", "./public/audio/basic/bowling.mp3", "./public/audio/basic/breakfast.mp3", "./public/audio/basic/businessman.mp3", "./public/audio/basic/businesswoman.mp3", "./public/audio/basic/butter.mp3", "./public/audio/basic/cafe.mp3", "./public/audio/basic/cake.mp3", "./public/audio/basic/campsite.mp3", "./public/audio/basic/canteen.mp3", "./public/audio/basic/cereal.mp3", "./public/audio/basic/chair.mp3", "./public/audio/basic/chemist.mp3", "./public/audio/basic/chocolate.mp3", "./public/audio/basic/church.mp3", "./public/audio/basic/cinema.mp3", "./public/audio/basic/clock.mp3", "./public/audio/basic/cloudy.mp3", "./public/audio/basic/coffee.mp3", "./public/audio/basic/cookie.mp3", "./public/audio/basic/cycling.mp3", "./public/audio/basic/dancing.mp3", "./public/audio/basic/deadline.mp3", "./public/audio/basic/devastate.mp3", "./public/audio/basic/difficult.mp3", "./public/audio/basic/door.mp3", "./public/audio/basic/educational.mp3", "./public/audio/basic/egg.mp3", "./public/audio/basic/eighteenth.mp3", "./public/audio/basic/eighth.mp3", "./public/audio/basic/electricity.mp3", "./public/audio/basic/endangered.mp3", "./public/audio/basic/expensive.mp3", "./public/audio/basic/fifteenth.mp3", "./public/audio/basic/fifth.mp3", "./public/audio/basic/firefighter.mp3", "./public/audio/basic/first.mp3", "./public/audio/basic/flat.mp3", "./public/audio/basic/forest.mp3", "./public/audio/basic/fourteenth.mp3", "./public/audio/basic/fourth.mp3", "./public/audio/basic/fruit.mp3", "./public/audio/basic/gallery.mp3", "./public/audio/basic/garage.mp3", "./public/audio/basic/garden.mp3", "./public/audio/basic/government.mp3", "./public/audio/basic/hall.mp3", "./public/audio/basic/hammock.mp3", "./public/audio/basic/handicraft.mp3", "./public/audio/basic/handsome.mp3", "./public/audio/basic/high.mp3", "./public/audio/basic/horoscope.mp3", "./public/audio/basic/hospital.mp3", "./public/audio/basic/house.mp3", "./public/audio/basic/intelligent.mp3", "./public/audio/basic/interesting.mp3", "./public/audio/basic/interview.mp3", "./public/audio/basic/jam.mp3", "./public/audio/basic/kitchen.mp3", "./public/audio/basic/lend.mp3", "./public/audio/basic/library.mp3", "./public/audio/basic/liner.mp3", "./public/audio/basic/lonely.mp3", "./public/audio/basic/luxury.mp3", "./public/audio/basic/march.mp3", "./public/audio/basic/midday.mp3", "./public/audio/basic/midnight.mp3", "./public/audio/basic/milk.mp3", "./public/audio/basic/motorcycle.mp3", "./public/audio/basic/mountain.mp3", "./public/audio/basic/museum.mp3", "./public/audio/basic/neighbor.mp3", "./public/audio/basic/nickname.mp3", "./public/audio/basic/nineteenth.mp3", "./public/audio/basic/ninth.mp3", "./public/audio/basic/often.mp3", "./public/audio/basic/open.mp3", "./public/audio/basic/parasailing.mp3", "./public/audio/basic/park.mp3", "./public/audio/basic/party.mp3", "./public/audio/basic/passenger.mp3", "./public/audio/basic/pub.mp3", "./public/audio/basic/puzzle.mp3", "./public/audio/basic/rafting.mp3", "./public/audio/basic/research.mp3", "./public/audio/basic/restaurant.mp3", "./public/audio/basic/scooter.mp3", "./public/audio/basic/scratch.mp3", "./public/audio/basic/second.mp3", "./public/audio/basic/sensational.mp3", "./public/audio/basic/seventeenth.mp3", "./public/audio/basic/sightseeing.mp3", "./public/audio/basic/simulation.mp3", "./public/audio/basic/sixteenth.mp3", "./public/audio/basic/sixth.mp3", "./public/audio/basic/skating.mp3", "./public/audio/basic/sofa.mp3", "./public/audio/basic/sometimes.mp3", "./public/audio/basic/soup.mp3", "./public/audio/basic/souvenir.mp3", "./public/audio/basic/spring.mp3", "./public/audio/basic/strategy.mp3", "./public/audio/basic/successful.mp3", "./public/audio/basic/suddenly.mp3", "./public/audio/basic/summer.mp3", "./public/audio/basic/sunny.mp3", "./public/audio/basic/supermarket.mp3", "./public/audio/basic/swimming.mp3", "./public/audio/basic/table.mp3", "./public/audio/basic/tea.mp3", "./public/audio/basic/teeth.mp3", "./public/audio/basic/telephone.mp3", "./public/audio/basic/temperature.mp3", "./public/audio/basic/tenth.mp3", "./public/audio/basic/third.mp3", "./public/audio/basic/toast.mp3", "./public/audio/basic/toilet.mp3", "./public/audio/basic/tooth.mp3", "./public/audio/basic/usually.mp3", "./public/audio/basic/voyage.mp3", "./public/audio/basic/waterfall.mp3", "./public/audio/basic/weather.mp3", "./public/audio/basic/window.mp3", "./public/audio/basic/windy.mp3", "./public/audio/basic/winter.mp3", "./public/audio/basic/worse.mp3", "./public/audio/basic/worst.mp3", "./public/audio/basic/always.mp3", "./public/audio/basic/apple.mp3", "./public/audio/basic/aunt.mp3", "./public/audio/basic/autumn.mp3", "./public/audio/basic/bacon.mp3", "./public/audio/basic/banana.mp3", "./public/audio/basic/bank.mp3", "./public/audio/basic/barbecue.mp3", "./public/audio/basic/basic.txt", "./public/audio/basic/bath.mp3", "./public/audio/basic/bathroom.mp3", "./public/audio/basic/bed.mp3", "./public/audio/basic/bedroom.mp3", "./public/audio/basic/behave.mp3", "./public/audio/basic/bicycle.mp3", "./public/audio/basic/birthday.mp3", "./public/audio/basic/blackout.mp3", "./public/audio/basic/borrow.mp3", "./public/audio/basic/bowling.mp3", "./public/audio/basic/breakfast.mp3", "./public/audio/basic/businessman.mp3", "./public/audio/basic/businesswoman.mp3", "./public/audio/basic/butter.mp3", "./public/audio/basic/cafe.mp3", "./public/audio/basic/cake.mp3", "./public/audio/basic/campsite.mp3", "./public/audio/basic/canteen.mp3", "./public/audio/basic/cereal.mp3", "./public/audio/basic/chair.mp3", "./public/audio/basic/chemist.mp3", "./public/audio/basic/chocolate.mp3", "./public/audio/basic/church.mp3", "./public/audio/basic/cinema.mp3", "./public/audio/basic/clock.mp3", "./public/audio/basic/cloudy.mp3", "./public/audio/basic/coffee.mp3", "./public/audio/basic/cookie.mp3", "./public/audio/basic/cycling.mp3", "./public/audio/basic/dancing.mp3", "./public/audio/basic/deadline.mp3", "./public/audio/basic/devastate.mp3", "./public/audio/basic/difficult.mp3", "./public/audio/basic/door.mp3", "./public/audio/basic/educational.mp3", "./public/audio/basic/egg.mp3", "./public/audio/basic/eighteenth.mp3", "./public/audio/basic/eighth.mp3", "./public/audio/basic/electricity.mp3", "./public/audio/basic/endangered.mp3", "./public/audio/basic/expensive.mp3", "./public/audio/basic/fifteenth.mp3", "./public/audio/basic/fifth.mp3", "./public/audio/basic/firefighter.mp3", "./public/audio/basic/first.mp3", "./public/audio/basic/flat.mp3", "./public/audio/basic/forest.mp3", "./public/audio/basic/fourteenth.mp3", "./public/audio/basic/fourth.mp3", "./public/audio/basic/fruit.mp3", "./public/audio/basic/gallery.mp3", "./public/audio/basic/garage.mp3", "./public/audio/basic/garden.mp3", "./public/audio/basic/government.mp3", "./public/audio/basic/hall.mp3", "./public/audio/basic/hammock.mp3", "./public/audio/basic/handicraft.mp3", "./public/audio/basic/handsome.mp3", "./public/audio/basic/high.mp3", "./public/audio/basic/horoscope.mp3", "./public/audio/basic/hospital.mp3", "./public/audio/basic/house.mp3", "./public/audio/basic/intelligent.mp3", "./public/audio/basic/interesting.mp3", "./public/audio/basic/interview.mp3", "./public/audio/basic/jam.mp3", "./public/audio/basic/kitchen.mp3", "./public/audio/basic/lend.mp3", "./public/audio/basic/library.mp3", "./public/audio/basic/liner.mp3", "./public/audio/basic/lonely.mp3", "./public/audio/basic/luxury.mp3", "./public/audio/basic/march.mp3", "./public/audio/basic/midday.mp3", "./public/audio/basic/midnight.mp3", "./public/audio/basic/milk.mp3", "./public/audio/basic/motorcycle.mp3", "./public/audio/basic/mountain.mp3", "./public/audio/basic/museum.mp3", "./public/audio/basic/neighbor.mp3", "./public/audio/basic/nickname.mp3", "./public/audio/basic/nineteenth.mp3", "./public/audio/basic/ninth.mp3", "./public/audio/basic/often.mp3", "./public/audio/basic/open.mp3", "./public/audio/basic/parasailing.mp3", "./public/audio/basic/park.mp3", "./public/audio/basic/party.mp3", "./public/audio/basic/passenger.mp3", "./public/audio/basic/pub.mp3", "./public/audio/basic/puzzle.mp3", "./public/audio/basic/rafting.mp3", "./public/audio/basic/research.mp3", "./public/audio/basic/restaurant.mp3", "./public/audio/basic/scooter.mp3", "./public/audio/basic/scratch.mp3", "./public/audio/basic/second.mp3", "./public/audio/basic/sensational.mp3", "./public/audio/basic/seventeenth.mp3", "./public/audio/basic/sightseeing.mp3", "./public/audio/basic/simulation.mp3", "./public/audio/basic/sixteenth.mp3", "./public/audio/basic/sixth.mp3", "./public/audio/basic/skating.mp3", "./public/audio/basic/sofa.mp3", "./public/audio/basic/sometimes.mp3", "./public/audio/basic/soup.mp3", "./public/audio/basic/souvenir.mp3", "./public/audio/basic/spring.mp3", "./public/audio/basic/strategy.mp3", "./public/audio/basic/successful.mp3", "./public/audio/basic/suddenly.mp3", "./public/audio/basic/summer.mp3", "./public/audio/basic/sunny.mp3", "./public/audio/basic/supermarket.mp3", "./public/audio/basic/swimming.mp3", "./public/audio/basic/table.mp3", "./public/audio/basic/tea.mp3", "./public/audio/basic/teeth.mp3", "./public/audio/basic/telephone.mp3", "./public/audio/basic/temperature.mp3", "./public/audio/basic/tenth.mp3", "./public/audio/basic/third.mp3", "./public/audio/basic/toast.mp3", "./public/audio/basic/toilet.mp3", "./public/audio/basic/tooth.mp3", "./public/audio/basic/usually.mp3", "./public/audio/basic/voyage.mp3", "./public/audio/basic/waterfall.mp3", "./public/audio/basic/weather.mp3", "./public/audio/basic/window.mp3", "./public/audio/basic/windy.mp3", "./public/audio/basic/winter.mp3", "./public/audio/basic/worse.mp3", "./public/audio/basic/worst.mp3", "./public/audio/basic/zoo.mp3"];

  //RANK STUFF ///////////////////////////////////////////////////////

  //function that compares the objects received from the rank api

  function rankCompare(a, b) {
      if (a.points < b.points)
          return 1;
      if (a.points > b.points)
          return -1;
      return 0;
  }

  //function that refreshes the rank on the client side
  function updateRank() {
      var request = new XMLHttpRequest();
      request.open('GET', 'rankBasic');
      request.onload = function() {
          if (request.status === 200) {
              var rankList = document.getElementById("rankList");

              while (rankList.firstChild) {
                  rankList.removeChild(rankList.firstChild);
              }
              rankList.innerHTML = '<thead><tr><td>Name</td><td>Points</td></tr></thead>';
              var responseObj = JSON.parse(request.responseText);
              responseObj.sort(rankCompare);
              responseObj.forEach(function(res) {
                  var response = res;
                  var tr = document.createElement('tr');
                  var tdName = document.createElement('td');
                  var tdPoints = document.createElement('td');
                  tdName.innerHTML = response.name;
                  tdPoints.innerHTML = response.points;
                  document.getElementById('rankList').appendChild(tr);
                  tr.appendChild(tdName);
                  tr.appendChild(tdPoints);
              });
          } else
              console.log(request.status);
      };
      request.send();
  }

  updateRank(); //calls it. it'll be called every ten seconds

  /////////////////// POINT GENERATING STUFF /////////////////////////////////////////////////

  var canProceed = true,
      points = 0,
      name;

  function getName() {
      name = document.getElementById('nickname').value.toLowerCase();
      document.getElementById('name-popup').parentNode.removeChild(document.getElementById('name-popup'));
      document.getElementById('nameDisplay').innerHTML = name;
  } //THIS FUNCTION IS CALLED ON THE HTML SO THE PAGE IS LOADED BEFORE CALLING IT

  function postRank() {
      var request = new XMLHttpRequest();
      request.open('POST', 'postRankBasic');
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = function(e) {
          if (request.status === 200)
              updateRank();
      }
      request.send(JSON.stringify({
          name: name,
          points: points
      }));
  }

  /** if canProceed is true, player is allowed to receive new word. all the buttons work but no points are counted.
      if it's false, he's heard a word, and he can only repeat it, try to guess it(check it) or reveal it. if he reveals it
      or guesses it wrong, canProceed is set to true and no points are added. If he guesses it right, canProceed is set to
      true and he adds one points, sending a call to the api putting his score in the rank.
  **/

  //WEB AUDIO API ////////////////////////////////////////////////////////////////////////////

  //function that detects if user's browser is chrome  
  function isChrome() {
      var isChromium = window.chrome,
          winNav = window.navigator,
          vendorName = winNav.vendor,
          isOpera = winNav.userAgent.indexOf("OPR") > -1,
          isIEedge = winNav.userAgent.indexOf("Edge") > -1,
          isIOSChrome = winNav.userAgent.match("CriOS");

      if (isIOSChrome) {
          return true;
      } else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
          return true;
      } else {
          return false;
      }
  }

  //if user is using chrome, use web audio API
  if (isChrome()) {

      var _createClass = function() {
          function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
          }
          return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
          };
      }();

      function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
          }
      }

      window.onload = function() {

          var context = new(window.AudioContext || window.webkitAudioContext)();

          var Buffer = function() {
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
                      request.onload = function() {
                          thisBuffer.context.decodeAudioData(request.response, function(buffer) {
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

                      this.urls.forEach(function(url, index) {
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
                          canProceed = false;
                          randomIndex = Math.floor(Math.random() * audioFiles.length);
                          randomWord = audioFiles[randomIndex];
                          cleanWord = randomWord.replace(/\.[^/.]+$/, "").split("/").pop();
                          var sound = new Sound(context, buffer.getSoundByIndex(randomIndex));
                          sound.play();
                          document.getElementById("newword").disabled = true;
                      }

                      function correction() {
                          var answer = document.getElementById('answer').value.toLowerCase();
                          var result = document.getElementById('result');
                          if (answer === cleanWord) {
                              if (!canProceed) {
                                  points += 1;
                                  postRank();
                                  updateRank();
                                  canProceed = true;
                                  document.getElementById("newword").disabled = false;
                                  document.getElementById("points").innerHTML = points;
                                  console.log(name);
                              }
                              document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
                              result.classList.add('correct');
                              result.classList.remove('incorrect');
                              result.innerHTML = '...';
                              setTimeout(function() {
                                  result.innerHTML = "Yes! That's correct!";
                              }, 500);
                          } else {
                              if (!canProceed) {
                                  canProceed = true;
                                  document.getElementById("newword").disabled = false;
                              }
                              result.classList.add('incorrect');
                              result.classList.remove('correct');
                              result.innerHTML = '...';
                              setTimeout(function() {
                                  result.innerHTML = "Sorry, try again!";
                              }, 500);
                          }
                      }

                      function reveal() {
                          document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
                          if (!canProceed) {
                              canProceed = true;
                              document.getElementById("newword").disabled = false;
                          }
                      }

                      function correctionEnter() {
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

          var Sound = function() {
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

          //ranking stuff


      };

      //if user is not using chrome, use audio element to play files
      //NATIVE AUDIO ELEMENT //////////////////////////////////////////////////////////////////////////

  } else {
      window.onload = function() {
          var randomIndex;
          var randomWord;
          var cleanWord;
          var player = document.getElementById('player');

          function init() {
              if (document.getElementById("loading"))
                  document.getElementById("loading").parentNode.removeChild(document.getElementById("loading"));
              console.log('Start game!');

              function playWord() {
                  canProceed = false;
                  randomIndex = Math.floor(Math.random() * audioFiles.length);
                  randomWord = audioFiles[randomIndex];
                  cleanWord = randomWord.replace(/\.[^/.]+$/, "").split("/").pop();
                  player.src = randomWord;
                  player.play();
                  document.getElementById("newword").disabled = true;
              }

              function correction() {
                  var answer = document.getElementById('answer').value.toLowerCase();
                  var result = document.getElementById('result');
                  if (answer === cleanWord) {
                      if (!canProceed) {
                          points += 1;
                          postRank();
                          updateRank();
                          canProceed = true;
                          document.getElementById("newword").disabled = false;
                          document.getElementById("points").innerHTML = points;
                          console.log(name);
                      }
                      document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
                      result.classList.add('correct');
                      result.classList.remove('incorrect');
                      result.innerHTML = '...';
                      setTimeout(function() {
                          result.innerHTML = "Yes! That's correct!";
                      }, 500);
                  } else {
                      if (!canProceed) {
                          canProceed = true;
                          document.getElementById("newword").disabled = false;
                      }
                      result.classList.add('incorrect');
                      result.classList.remove('correct');
                      result.innerHTML = '...';
                      setTimeout(function() {
                          result.innerHTML = "Sorry, try again!";
                      }, 500);
                  }
              }

              function reveal() {
                  document.getElementById('reveal').innerHTML = "</br>" + cleanWord;
                  if (!canProceed) {
                      canProceed = true;
                      document.getElementById("newword").disabled = false;
                  }
              }

              function correctionEnter() {
                  var y = event.keyCode;
                  if (y === 13)
                      correction();
              }

              function setRepeat() {
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
              if (loaded > 10) {
                  // enough have loaded
                  init();
              }
          }

          function preloadAudio(url) {
              var audio = new Audio();
              // once this file loads, it will call loadedAudio()
              // the file will be kept by the browser as cache
              audio.addEventListener('canplaythrough', loadedAudio(), false);
              audio.src = url;

          }

          for (var i = 0; i < audioFiles.length; i++) {
              (function(ind) {
                  setTimeout(function() {
                      preloadAudio(audioFiles[ind]);
                  }, 300 * ind);
              })(i);
          }
      };
  }