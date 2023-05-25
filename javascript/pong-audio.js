/*This File creates the sound file players and their default properties
If you create a new player, be sure to import it at the top of index.js!
*/

//import * as Tone from "../lib/Tone.js";

class soundFile {
  constructor(file, deferPlay) {
    //this.deferPlay = false;
    this.player = new Tone.Player({
      url: "./sounds/" + file,
      loop: false,
      autostart: false
    }).toMaster();
  }
  //Play function also with pre-stop and deferred playing
  play() {
    //defer playback if sound isn't finished loading
    if (this.player.loaded === true) {
      this.deferPlay = false;
      this.player.stop();
      this.player.start();
    } else {
      this.deferPlay = true;
    }
  }
  //Stop function that may have easier syntax
  stop() {
    this.player.stop();
  }
}

//Try to play sounds that had their playback deferred
export function playDeferredSounds() {
  for (var i = 0; i < soundArray.length; i++) {
    if (soundArray[i].deferPlay === true) {
      soundArray[i].play();
    }
  }
}

export var soundArray = []; //list of sounds loaded

//Here is where all the Sound File Players Start

export var wallSound = new soundFile("wall.wav"); //load sound
soundArray.push(wallSound); //add sound to list of sounds

export var wall2Sound = new soundFile("wall2.wav"); //load sound
soundArray.push(wall2Sound); //add sound to list of sounds

export var wall3Sound = new soundFile("wall3.wav"); //load sound
soundArray.push(wall3Sound); //add sound to list of sounds

export var wall4Sound = new soundFile("wall4.wav"); //load sound
soundArray.push(wall4Sound); //add sound to list of sounds

export var wall5Sound = new soundFile("wall5.wav"); //load sound
soundArray.push(wall5Sound); //add sound to list of sounds

export var paddleSound = new soundFile("paddle.wav");
soundArray.push(paddleSound);

export var paddle2Sound = new soundFile("paddle2.wav");
soundArray.push(paddle2Sound);

export var paddle3Sound = new soundFile("paddle3.wav");
soundArray.push(paddle3Sound);

export var scoreSound = new soundFile("score.wav");
soundArray.push(scoreSound);

export var ambientSound = new soundFile("ambient.wav");
soundArray.push(ambientSound);
ambientSound.player.loop = true; //turn on looping
ambientSound.player.volume.value = -20; //turn down volume

export var adventureMusic = new soundFile("adv.wav");
soundArray.push(adventureMusic);
adventureMusic.player.loop = true;
adventureMusic.player.volume.value = -16;

export var villageMusic = new soundFile("vil.wav");
soundArray.push(villageMusic);
villageMusic.player.loop = true;
villageMusic.player.volume.value = -16;
