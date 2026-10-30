/**
 * DOTS DOTS DOTS
 * antonyhatem
 * 
 * second prototype is an interactive canvas of polka dots that change colors randomly after hovering cursor over them. makes for a satisfying sight of colors after coloring every dot.
 */

"use strict";
//stores circles
let circles =[];
/**
 making canvas and circles
*/

function setup() {
    createCanvas(500, 500);
    
// loops to place circles on canvas everywhere in straight fashion
    for (let x = 25; x < 500; x += 50) {
        for (let y = 25; y < 500; y += 50) {

//creates circle and add it to an array 
            circles.push(createCircle(x, y));
        }
    }
}


/**
 *draws handful of useful things 
*/
function draw() {
    background(30);
for (let circle of circles) {
    updateCircle(circle);


    fill(circle.colour);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
    }
}
//creates and returns circle object
function createCircle(x, y) {
    return {
        x: x,
        y: y,
        size: 60,
        colour: color(255),
        isHovered: false
    };
}
//goes thru circles
function updateCircle(circle) {

    // chceks distance between cursor and circle
    let distance = dist(mouseX, mouseY, circle.x, circle.y);


//checks if mouse is inside circle bounds
    let hovering = distance < circle.size / 2;


//changes color for circle after hovering over
    if (hovering && !circle.isHovered) {
        circle.colour = color(random(255), random(255), random(255));
    }
// i think remembers if cursor is over a circle
    circle.isHovered = hovering;
}
