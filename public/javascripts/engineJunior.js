  //audio files used for playing the game
  var audioFiles = ["./public/audio/junior/alphabet.mp3", "./public/audio/junior/angry.mp3", "./public/audio/junior/august.mp3", "./public/audio/junior/author.mp3", "./public/audio/junior/awesome.mp3", "./public/audio/junior/bad.mp3", "./public/audio/junior/bat.mp3", "./public/audio/junior/bean.mp3", "./public/audio/junior/big.mp3", "./public/audio/junior/bike.mp3", "./public/audio/junior/bin.mp3", "./public/audio/junior/birthday.mp3", "./public/audio/junior/black.mp3", "./public/audio/junior/blog.mp3", "./public/audio/junior/blue.mp3", "./public/audio/junior/board.mp3", "./public/audio/junior/book.mp3", "./public/audio/junior/boring.mp3", "./public/audio/junior/box.mp3", "./public/audio/junior/brother.mp3", "./public/audio/junior/brown.mp3", "./public/audio/junior/busy.mp3", "./public/audio/junior/camera.mp3", "./public/audio/junior/cat.mp3", "./public/audio/junior/chip.mp3", "./public/audio/junior/chubby.mp3", "./public/audio/junior/classroom.mp3", "./public/audio/junior/color.mp3", "./public/audio/junior/comic.mp3", "./public/audio/junior/computer.mp3", "./public/audio/junior/cool.mp3", "./public/audio/junior/country.mp3", "./public/audio/junior/cute.mp3", "./public/audio/junior/diary.mp3", "./public/audio/junior/dictionary.mp3", "./public/audio/junior/dog.mp3", "./public/audio/junior/doll.mp3", "./public/audio/junior/download.mp3", "./public/audio/junior/eight.mp3", "./public/audio/junior/eleven.mp3", "./public/audio/junior/eraser.mp3", "./public/audio/junior/famous.mp3", "./public/audio/junior/fantastic.mp3", "./public/audio/junior/father.mp3", "./public/audio/junior/fish.mp3", "./public/audio/junior/five.mp3", "./public/audio/junior/fog.mp3", "./public/audio/junior/football.mp3", "./public/audio/junior/four.mp3", "./public/audio/junior/friend.mp3", "./public/audio/junior/game.mp3", "./public/audio/junior/german.mp3", "./public/audio/junior/girl.mp3", "./public/audio/junior/gray.mp3", "./public/audio/junior/great.mp3", "./public/audio/junior/green.mp3", "./public/audio/junior/guitar.mp3", "./public/audio/junior/hamburger.mp3", "./public/audio/junior/happy.mp3", "./public/audio/junior/hello.mp3", "./public/audio/junior/home.mp3", "./public/audio/junior/horrible.mp3", "./public/audio/junior/japan.mp3", "./public/audio/junior/junior.txt", "./public/audio/junior/karate.mp3", "./public/audio/junior/luck.mp3", "./public/audio/junior/mad.mp3", "./public/audio/junior/mango.mp3", "./public/audio/junior/march.mp3", "./public/audio/junior/mobile.mp3", "./public/audio/junior/monster.mp3", "./public/audio/junior/month.mp3", "./public/audio/junior/mother.mp3", "./public/audio/junior/music.mp3", "./public/audio/junior/name.mp3", "./public/audio/junior/nice.mp3", "./public/audio/junior/nickname.mp3", "./public/audio/junior/nine.mp3", "./public/audio/junior/no.mp3", "./public/audio/junior/notebook.mp3", "./public/audio/junior/old.mp3", "./public/audio/junior/once.mp3", "./public/audio/junior/one.mp3", "./public/audio/junior/orange.mp3", "./public/audio/junior/party.mp3", "./public/audio/junior/pasta.mp3", "./public/audio/junior/pen.mp3", "./public/audio/junior/pencil.mp3", "./public/audio/junior/pink.mp3", "./public/audio/junior/player.mp3", "./public/audio/junior/polite.mp3", "./public/audio/junior/poster.mp3", "./public/audio/junior/purple.mp3", "./public/audio/junior/rap.mp3", "./public/audio/junior/red.mp3", "./public/audio/junior/rice.mp3", "./public/audio/junior/rich.mp3", "./public/audio/junior/robot.mp3", "./public/audio/junior/rock.mp3", "./public/audio/junior/rude.mp3", "./public/audio/junior/ruler.mp3", "./public/audio/junior/school.mp3", "./public/audio/junior/seven.mp3", "./public/audio/junior/shop.mp3", "./public/audio/junior/sister.mp3", "./public/audio/junior/site.mp3", "./public/audio/junior/six.mp3", "./public/audio/junior/small.mp3", "./public/audio/junior/spider.mp3", "./public/audio/junior/sushi.mp3", "./public/audio/junior/sweet.mp3", "./public/audio/junior/tall.mp3", "./public/audio/junior/taxi.mp3", "./public/audio/junior/telephone.mp3", "./public/audio/junior/ten.mp3", "./public/audio/junior/thin.mp3", "./public/audio/junior/three.mp3", "./public/audio/junior/toy.mp3", "./public/audio/junior/twelve.mp3", "./public/audio/junior/twice.mp3", "./public/audio/junior/two.mp3", "./public/audio/junior/ugly.mp3", "./public/audio/junior/white.mp3", "./public/audio/junior/yellow.mp3", "./public/audio/junior/yes.mp3alphabet.mp3", "./public/audio/junior/angry.mp3", "./public/audio/junior/august.mp3", "./public/audio/junior/author.mp3", "./public/audio/junior/awesome.mp3", "./public/audio/junior/bad.mp3", "./public/audio/junior/bat.mp3", "./public/audio/junior/bean.mp3", "./public/audio/junior/big.mp3", "./public/audio/junior/bike.mp3", "./public/audio/junior/bin.mp3", "./public/audio/junior/birthday.mp3", "./public/audio/junior/black.mp3", "./public/audio/junior/blog.mp3", "./public/audio/junior/blue.mp3", "./public/audio/junior/board.mp3", "./public/audio/junior/book.mp3", "./public/audio/junior/boring.mp3", "./public/audio/junior/box.mp3", "./public/audio/junior/brother.mp3", "./public/audio/junior/brown.mp3", "./public/audio/junior/busy.mp3", "./public/audio/junior/camera.mp3", "./public/audio/junior/cat.mp3", "./public/audio/junior/chip.mp3", "./public/audio/junior/chubby.mp3", "./public/audio/junior/classroom.mp3", "./public/audio/junior/color.mp3", "./public/audio/junior/comic.mp3", "./public/audio/junior/computer.mp3", "./public/audio/junior/cool.mp3", "./public/audio/junior/country.mp3", "./public/audio/junior/cute.mp3", "./public/audio/junior/diary.mp3", "./public/audio/junior/dictionary.mp3", "./public/audio/junior/dog.mp3", "./public/audio/junior/doll.mp3", "./public/audio/junior/download.mp3", "./public/audio/junior/eight.mp3", "./public/audio/junior/eleven.mp3", "./public/audio/junior/eraser.mp3", "./public/audio/junior/famous.mp3", "./public/audio/junior/fantastic.mp3", "./public/audio/junior/father.mp3", "./public/audio/junior/fish.mp3", "./public/audio/junior/five.mp3", "./public/audio/junior/fog.mp3", "./public/audio/junior/football.mp3", "./public/audio/junior/four.mp3", "./public/audio/junior/friend.mp3", "./public/audio/junior/game.mp3", "./public/audio/junior/german.mp3", "./public/audio/junior/girl.mp3", "./public/audio/junior/gray.mp3", "./public/audio/junior/great.mp3", "./public/audio/junior/green.mp3", "./public/audio/junior/guitar.mp3", "./public/audio/junior/hamburger.mp3", "./public/audio/junior/happy.mp3", "./public/audio/junior/hello.mp3", "./public/audio/junior/home.mp3", "./public/audio/junior/horrible.mp3", "./public/audio/junior/japan.mp3", "./public/audio/junior/junior.txt", "./public/audio/junior/karate.mp3", "./public/audio/junior/luck.mp3", "./public/audio/junior/mad.mp3", "./public/audio/junior/mango.mp3", "./public/audio/junior/march.mp3", "./public/audio/junior/mobile.mp3", "./public/audio/junior/monster.mp3", "./public/audio/junior/month.mp3", "./public/audio/junior/mother.mp3", "./public/audio/junior/music.mp3", "./public/audio/junior/name.mp3", "./public/audio/junior/nice.mp3", "./public/audio/junior/nickname.mp3", "./public/audio/junior/nine.mp3", "./public/audio/junior/no.mp3", "./public/audio/junior/notebook.mp3", "./public/audio/junior/old.mp3", "./public/audio/junior/once.mp3", "./public/audio/junior/one.mp3", "./public/audio/junior/orange.mp3", "./public/audio/junior/party.mp3", "./public/audio/junior/pasta.mp3", "./public/audio/junior/pen.mp3", "./public/audio/junior/pencil.mp3", "./public/audio/junior/pink.mp3", "./public/audio/junior/player.mp3", "./public/audio/junior/polite.mp3", "./public/audio/junior/poster.mp3", "./public/audio/junior/purple.mp3", "./public/audio/junior/rap.mp3", "./public/audio/junior/red.mp3", "./public/audio/junior/rice.mp3", "./public/audio/junior/rich.mp3", "./public/audio/junior/robot.mp3", "./public/audio/junior/rock.mp3", "./public/audio/junior/rude.mp3", "./public/audio/junior/ruler.mp3", "./public/audio/junior/school.mp3", "./public/audio/junior/seven.mp3", "./public/audio/junior/shop.mp3", "./public/audio/junior/sister.mp3", "./public/audio/junior/site.mp3", "./public/audio/junior/six.mp3", "./public/audio/junior/small.mp3", "./public/audio/junior/spider.mp3", "./public/audio/junior/sushi.mp3", "./public/audio/junior/sweet.mp3", "./public/audio/junior/tall.mp3", "./public/audio/junior/taxi.mp3", "./public/audio/junior/telephone.mp3", "./public/audio/junior/ten.mp3", "./public/audio/junior/thin.mp3", "./public/audio/junior/three.mp3", "./public/audio/junior/toy.mp3", "./public/audio/junior/twelve.mp3", "./public/audio/junior/twice.mp3", "./public/audio/junior/two.mp3", "./public/audio/junior/ugly.mp3", "./public/audio/junior/white.mp3", "./public/audio/junior/yellow.mp3", "./public/audio/junior/yes.mp3"];

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
      request.open('GET', 'rankJunior');
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
      request.open('POST', 'postRankJunior');
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