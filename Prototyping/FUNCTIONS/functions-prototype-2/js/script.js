/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circleX = 250;
let circleY = 250;
let circleSize = 60;
let circleColour;
/**
 making canvas
*/

function setup() {
    createCanvas(500, 500);

    circleColour = color(255);
}


/**
 *draws circle
*/
function draw() {
    background(30);
// chceks distance between cursor and circle
    let distance = dist(mouseX, mouseY, circleX, circleY);
//checks if mouse is inside circle bounds
    let hovering = distance < circleSize / 2;
//changes color for circle after hovering over
    if (hovering && !isHovered) {
        circleColour = color(random(255), random(255), random(255));
    }
// i think remembers if cursor is over a circle
    isHovered = hovering;

    fill(circleColour);
    noStroke();
    ellipse(circleX, CircleY, CircleSize);
}