"use strict";

let music;
let volume = 0;

function preload() {
  // Load the music before the sketch starts
  music = loadSound("assets/sounds/aphextwin3.mp3");
}

// Set up the canvas
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
}

// Draw the game
function draw() {
  // Set the background to black
  background(0);

  // Display the message based on the volume
  if (volume == 0) {
    fill(255);
    textSize(25);
    text("I AM SAD. NO SOUL TO\nHEAR ME PREACH...", 300, 130);
  }
  else {
    fill(255, 220, 100);
    textSize(25);
    text("HEAR YE, LET THE CHOIR\nSING ITS SONG", 300, 130);
  }

  // Display the volume title
  fill(255);
  textSize(18);
  text("VOLUME", 300, 230);

  // Draw the three volume buttons
  for (let i = 0; i < 3; i++) {

    // Use orange for the selected volume
    if (volume == i) {
      fill(255, 180, 50);
    }
    else {
      fill(100);
    }

    // Draw each button
    rect(200 + i * 100, 270, 40, 15);
  }

  // Display the volume labels
  fill(255);
  textSize(14);
  text("OFF", 220, 300);
  text("LOW", 320, 300);
  text("HIGH", 420, 300);

  // Explain the keyboard controls
  textSize(14);
  text("USE UP AND DOWN ARROWS", 300, 360);
  text("OR CLICK A VOLUME LEVEL", 300, 380);
}

// Change volume when a volume button is clicked
function mousePressed() {

  // Select OFF
  if (mouseX > 190 && mouseX < 250 &&
      mouseY > 250 && mouseY < 310) {
    volume = 0;
  }

  // Select LOW
  else if (mouseX > 290 && mouseX < 350 &&
           mouseY > 250 && mouseY < 310) {
    volume = 1;
  }

  // Select HIGH
  else if (mouseX > 390 && mouseX < 450 &&
           mouseY > 250 && mouseY < 310) {
    volume = 2;
  }
// Update the music after clicking
  updateMusic();
}

// Change volume using the keyboard
function keyPressed() {

  // Increase volume with the UP arrow
  if (keyCode == UP_ARROW) {
    volume = volume + 1;
  }

  // Decrease volume with the DOWN arrow
  else if (keyCode == DOWN_ARROW) {
    volume = volume - 1;
  }

  // Keep volume between 0 and 2
  volume = constrain(volume, 0, 2);

  // Update the music
  updateMusic();
}

// Control the music based on the selected volume
function updateMusic() {

  // Stop music when volume is OFF
  if (volume == 0) {
    music.stop();
  }

  // Play music quietly at LOW
  else if (volume == 1) {
    music.setVolume(0.2);

    // Start music if it is not already playing
    if (!music.isPlaying()) {
      music.loop();
    }
  }

  // Play music louder at HIGH
  else if (volume == 2) {
    music.setVolume(1);

    // Start music if it is not already playing
    if (!music.isPlaying()) {
      music.loop();
    }
  }
}