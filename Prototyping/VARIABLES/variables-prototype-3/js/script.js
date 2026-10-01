/**
 * VARIABLES ASSIGNMENT prototype 1 of 3
 * antonyhatem
 *
 * This will maybe be a bird flying...
 */

"use strict"

const cat = {
    x: 100,
    y: 100,
    speed: 5,
    image: catImage
}
//loads cat image
async function preload() {
    cat.image = await loadImage("cat.png");
}

//creating canvas
async function setup() {
  createCanvas(800,800);

  await preload();
}

//conditionals
function draw(){

background("hotpink");

cat.x += cat.speed;
if (cat.x + cat.image.width >= width) {
  cat.speed = -cat.speed;

}
  else if (cat.x < 0) {
    cat.speed = -cat.speed;
}

//rendering/displaying
image(cat.image, cat.x, cat.y);

}