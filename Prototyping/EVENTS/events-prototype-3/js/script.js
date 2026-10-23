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
//at each frame it increases the enemy timer basically
enemyTimer++;

//enemy randomized spawn
if (enemyTimer > 30) {
    let enemy = {
        x: random(width),
        y: random(height)
    };
    //adds new enemy to list
    enemies.push(enemy);

//resets enemy timer so that a new one appears again after 30 frames
    enemyTimer = 0;
}
// goes through every enemy in list (watched small video i got lost)
for (let enemy of enemies){

//calculates distance between enemy and cursor (watched a small video for this i got lost)
    let distanceToCursor = dist(
        enemy.x,
        enemy.y,
        mouseX,
        mouseY
    );
    //makes the enemies faster as more and more appear, they accelerate even faster when near the cursor (watched a video)
let speed = 4 + enemies.length * 0.2 + 250 / (distanceToCursor + 1);


let directionX = mouseX - enemy.x;
let directionY = mouseY - enemy.y;
//moves enemies horizontally and vertically towards cursor

enemy.x += directionX * speed / (distanceToCursor + 1);
enemy.y += directionY * speed / (distanceToCursor + 1);

// player cursor acts as a little white circle
    fill(255);
    circle(mouseX, mouseY, 10)
    fill (255, 50, 50);
    noStroke();
    circle(enemy.x, enemy.y, enemySize);
}
}