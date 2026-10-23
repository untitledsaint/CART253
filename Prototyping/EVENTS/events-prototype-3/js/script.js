/**
 * survive spawning ennemies
 * antonyhatem
 * 
 * for this third prototype, its going to be a little game where you survive incoming ennemies that will try and touch your cursor. avoid them.
 */

"use strict";
// puts enemies in a stored list
let enemies = [];
//checks if its gameover
let gameOver = false;
//enemy size
let enemySize = 25; 
//enemy appearing rate
let enemyTimer = 0;

//makes canvas
function setup() {
    createCanvas(1000, 1000);

}
//makes background + other draws
function draw() {
    background(10);

    // displays gameover during a triggered gameover
if (gameOver) {
    fill(255, 20, 20);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("GAME OVER", width / 2, height / 2);

    return;
}

    
}