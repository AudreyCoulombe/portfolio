"use strict";
/*****************
Audrey's portfolio - Main page
******************/

let icons = {};
let lines = {};

// When the page is ready...
$(document).ready(function () {
  icons = {
    fashion: document.getElementById("fashion_icon"),
    printing: document.getElementById("3Dprinting_icon"),
    modeling: document.getElementById("3Dmodeling_icon"),
    animation: document.getElementById("animation_icon"),
    graphDesign: document.getElementById("graphicDesign_icon"),
    digiTxts: document.getElementById("digitalTexts_icon"),
    vr: document.getElementById("VR_icon"),
    coding: document.getElementById("coding_icon"),
    electronics: document.getElementById("electronics_icon"),
  };

  lines = {
    fashion_3Dprint: {
      line: createLine(),
      iconA: icons.fashion,
      iconB: icons.printing,
    },
    fashion_elect: {
      line: createLine(),
      iconA: icons.fashion,
      iconB: icons.electronics,
    },
    elect_3Dprint: {
      line: createLine(),
      iconA: icons.electronics,
      iconB: icons.printing,
    },
    print_3Dmodeling: {
      line: createLine(),
      iconA: icons.printing,
      iconB: icons.modeling,
    },
    elect_coding: {
      line: createLine(),
      iconA: icons.electronics,
      iconB: icons.coding,
    },
    coding_VR: {
      line: createLine(),
      iconA: icons.coding,
      iconB: icons.vr,
    },
    VR_3Dmodeling: {
      line: createLine(),
      iconA: icons.vr,
      iconB: icons.modeling,
    },
    VR_animation: {
      line: createLine(),
      iconA: icons.vr,
      iconB: icons.animation,
    },
    modeling_anim: {
      line: createLine(),
      iconA: icons.modeling,
      iconB: icons.animation,
    },
    coding_digitxts: {
      line: createLine(),
      iconA: icons.coding,
      iconB: icons.digiTxts,
    },
    digitxts_anim: {
      line: createLine(),
      iconA: icons.digiTxts,
      iconB: icons.animation,
    },
    digitxts_graphDes: {
      line: createLine(),
      iconA: icons.digiTxts,
      iconB: icons.graphDesign,
    },
    graphDes_anim: {
      line: createLine(),
      iconA: icons.graphDesign,
      iconB: icons.animation,
    },
  };

  // *****Rappel de comment naviguer dans les objects:*****
  //   console.log(Object.values(lines).length);
  //   console.log(Object.keys(lines)[1]);
  //   console.log(Object.values(lines)[1]);
  //   console.log(Object.values(lines)[1].line);
  //   console.log(Object.values(lines)[1].iconA);
  //   console.log(Object.values(lines)[1].iconB);

  // Run the updateLinePos function every 5 millis
  setInterval(updateLinePos, 5);
  setInterval(updateIconPos, 1000);
  // updateIconPos();
});

// function to create new svg lines
function createLine() {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", "grey");
  // Append the line to the svg element (in index.html)
  $("svg").append(line);
  return line;
}

function updateIconPos() {
  
  Object.keys(icons).forEach(function (key) {
    // let x = icons[key].offsetLeft;
    // let y = icons[key].offsetTop;
    let velocityX = Math.random() * 0.01;
    let velocityY = Math.random() * 0.01;
    // let viewWidth = document.documentElement.clientWidth;
    // let newX = x + viewWidth*velocityX;
    // console.log(x + " + " + viewWidth + " * " + velocityX + " = " + newX);
    // icons[key].setAttribute("left", newX+"px");
    // console.log(icons[key]);
    // icons[key].setAttribute("left", "400px");
    // 1px = (100vw / [document.documentElement.clientWidth] px)
    // let position = icons[key].offset();
    // console.log(Object.values(lines)[1]);
    

    let xPos = icons[key].offsetLeft;
    let yPos = icons[key].offsetTop;
    // console.log(xPos);
    // icons[key].offset({
    //   top: 10,
    //   left: 10
    // });
    icons[key].style.top = `${yPos + velocityX}px`;
    // icons[key].offset({
    //   top: position.top + 10,
    //   left: position.left + 10
    // });
    
    // this.x = x;
    // this.y = y;
    // // Velocity and speed
    // this.vx = 0;
    // this.vy = 0;
    // this.speed = speed;
    // // Time properties for noise() function
    // this.tx = random(0, 1000); // To make x and y noise different
    // this.ty = random(0, 1000); // we use random starting values
    // // Health properties
    // this.maxHealth = radius;
    // this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // // Display properties
    // this.fillColor = fillColor;
    // this.radius = this.health;


    // // Set velocity via noise()
    // this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    // this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // // Update position
    // this.x += this.vx;
    // this.y += this.vy;
    // // Update time properties
    // this.tx += 0.01;
    // this.ty += 0.01;
    
  });
}

// function to update the position of the lines according to the position of the icons
function updateLinePos() {
  // For each key in the "lines" object...
  Object.keys(lines).forEach(function (key) {
    // Variables for line and icons
    let line = lines[key].line;
    let iconA = lines[key].iconA;
    let iconB = lines[key].iconB;
    // Variables for center X and Y positions of icon A and B
    let iconAcenterX = iconA.offsetLeft + iconA.offsetWidth / 2;
    let iconAcenterY = iconA.offsetTop + iconA.offsetHeight / 2;
    let iconBcenterX = iconB.offsetLeft + iconB.offsetWidth / 2;
    let iconBcenterY = iconB.offsetTop + iconB.offsetHeight / 2;
    // Place the tips of the line according to icon A and B's position
    line.setAttribute("x1", iconAcenterX);
    line.setAttribute("y1", iconAcenterY);
    line.setAttribute("x2", iconBcenterX);
    line.setAttribute("y2", iconBcenterY);
  });
}
