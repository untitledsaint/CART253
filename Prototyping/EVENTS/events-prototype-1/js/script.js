/**
 * game of snake but the snake has stunted growth and its just a test of patience until you give up!
 * 
 * antonyhatem
 * 
 * simple game of snake that everyone knows about except you dont grow! you are a snake, you eat food by moving in a grid  and if you collide with anything else its game over. 
 */

"use strict";

// grid size
let size = 20;

// snake position
let snakeX = 200;
let snakeY = 200;

// snake
let speedX = size;
let speedY = 0;

// food position
let foodX = 300;
let foodY = 200;

// score
let score = 0;

// sets up the game with canvas and game speed
function setup() {
  createCanvas(400, 450);

  // framerate tick speed for snake
  frameRate(7);
}

// draws the game
function draw() {
  background(0,140,0);

  fill(0);
  rect(0, 0, 400, 50);


  fill(255, 200, 40);
  textSize(24);
  textAlign(CENTER, LEFT);
  text("TEST OF PATIENCE", 280, 25);


  // moves the snake
  snakeX = snakeX + speedX;
  snakeY = snakeY + speedY;

  // draws the snake
  fill(80, 250, 100);
  rect(snakeX, snakeY, size, size);

  // draws the food
  fill(255, 70, 70);
  rect(foodX, foodY, size, size);

  // shows the score
  fill(220, 10, 10);
  textSize(18);
  text("FOOD: " + score, 40, 20);

  // checks if the snake eats the food and gives a point if it does
  if (snakeX == foodX && snakeY == foodY) {
    score = score + 1;

    // put the food in a new random position 
    foodX = floor(random(0, 20)) * size;
    foodY = floor(random(0, 20)) * size;
  }

  // checks if the snake hits a wall then gameover!
  if (snakeX < 0 || snakeX >= width ||
      snakeY < 0 || snakeY >= height) {
    noLoop();
    fill(255);
    textSize(25);
    text("GAME OVER", 200, 200);
  }
}

// control the snake with the arrow keys
function keyPressed() {
  if (keyCode == UP_ARROW) {
    speedX = 0;
    speedY = -size;
  }
  else if (keyCode == DOWN_ARROW) {
    speedX = 0;
    speedY = size;
  }
  else if (keyCode == LEFT_ARROW) {
    speedX = -size;
    speedY = 0;
  }
  else if (keyCode == RIGHT_ARROW) {
    speedX = size;
    speedY = 0;
  }
}
