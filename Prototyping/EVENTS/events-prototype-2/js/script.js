/**
 * paint splatter
 * antonyhatem
 * 
 * this second prototype will be quite messy. your cursor will keep leaving words on the canvas and by clicking it will change colors! 
 */


"use strict";

// word that follows mouse
let word = "YOU CANT STOP ME";

// stores words on screen
let words = [];

// word color
let wordColor;

// makes canvas
function setup() {
  createCanvas(windowHeight, windowWidth);

  // starting word color
  wordColor = color(255);

  // text style
  textSize(30);
  textAlign(CENTER, CENTER);
}

// draws
function draw() {
  background(0);

  // draws all the words left behind
  for (let i = 0; i < words.length; i++) {
    fill(words[i].color);
    text(word, words[i].x, words[i].y);
  }

  // leaves new word at mouse position
  words.push({
    x: mouseX,
    y: mouseY,
    color: wordColor
  });

  // draws the word following cursor
  fill(wordColor);
  text(word, mouseX, mouseY);
}

// changes color to random once left or right click is clicked
function mousePressed() {

  // picks a random color
  wordColor = color(
    random(255),
    random(255),
    random(255)
  );
}