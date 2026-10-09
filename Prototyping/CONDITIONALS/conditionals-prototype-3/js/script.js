/**
 * Ant infestation on a pavement
 * antonyhatem
 * 
 * This prototype will be ants running around pavement. when your cursor is near an ant, it will stop moving.
 */

"use strict";

let molds = [];

function setup() {
  // creates the canvas
  createCanvas(windowWidth, windowWidth);

  // creates a handful of molds with random speed and position
  for (let i = 0; i < 15; i++) {
    molds.push({
      x: random(width),
      y: random(height),
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    });
  }
}

function draw() {
    //background
  background(170);

  // moves and draws all the mold, had to see online how to code this.
  for (let i = 0; i < molds.length; i++) {
    let mold = molds[i];

    // mesures distance of mold and cursor
    let distance = dist(mouseX, mouseY, mold.x, mold.y);

    // moves mold away if cursor is close
    if (distance > 50) {
      mold.x = mold.x + mold.speedX;
      mold.y = mold.y + mold.speedY;
    }

    // gives mold a random position after it left the canvas
    if (mold.x < 0 || mold.x > width ||
        mold.y < 0 || mold.y > height) {
      mold.x = random(width);
      mold.y = random(height);
    }

    // draws little mold
    fill(51, 51, 0);
    noStroke();
    ellipse(mold.x, mold.y, 30, 30);
  }
}