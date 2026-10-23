/**
 * game of snake
 * antonyhatem
 * 
 * simple game of snake! You are a snake, you eat food and grow bigger. If you collide with any surface its game over.
 
 */

"use strict";
// player score
let score = 0;
//snake position
let snakeX = 200;
let snakeY = 200;

let speedX = size;
let speedY = 0;
//size of grid sqaures
let size = 20;
//food position
let foodX = 300;
let foodY = 300;


//makes canvas
function setup() {
    createCanvas(400, 400);

}
//background
function draw() {
    background(20);

    snakeX = snakeX + speedX;
    snakeY = snakeY + speedY;

    //draws snake!
    fill(80, 200, 100);
    rect (snakeX, snakeY, size, size);

    //draws food 
    fill(255, 20, 20);
    rect (foodX, foodY, size, size);

    //game score
    fill(255);
    textSize(20);
    text("SCORE: " + score, 10, 20);
}