/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circle;
/**
 making canvas
*/

function setup() {
    createCanvas(500, 500);

    circle = createCircle(250, 250);
}


/**
 *draws handful of useful things 
*/
function draw() {
    background(30);

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

    fill(circle.colour);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
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