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

  Object.keys(icons).forEach(function (key) {
    icons[key].onmouseover = function() {
      console.log("mouse over");
      // Here: display list of projects at bottom
    };
    icons[key].onmouseout = function() {
      console.log("mouse out");
      // Here: hide list of projects at bottom
    };
    icons[key].onclick = function() {
      icons[key].style.width = "17%";
      //icons[key].style.left = "50%";
      //icons[key].style.top = "41%";
      //icons[key].style.zIndex = "100";

      // icons[key].style.top = "17%";
      // document.location.href = "fashion.html";


      // var e = document.getElementById('foo');
      // e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
      document.getElementById("fashionProjects").style.display = "block";
      document.getElementById("fashionProjects").onclick=function(){
        document.getElementById("auroraImage").style.display = "block";
        document.getElementById("fashionProjects").style.display = "none";
        console.log("auroraImage clicked");
      };
    };
  });

  // onmouseover="mouseOverIcon(this)" onmouseout="mouseOutIcon(this)"
  // document.getElementById("demo").onclick = function() {myFunction()};

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

function showAurora(){
  document.getElementById("auroraImage").style.display = "block";
  console.log("clicked");
}

// function to create new svg lines
function createLine() {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", "grey");
  // Append the line to the svg element (in index.html)
  $("svg").append(line);
  return line;
}

function updateIconPos() {

  // Object.keys(icons).forEach(function (key) {
  //   let velocityX = Math.random() * 0.01;
  //   let velocityY = Math.random() * 0.01;
  //   let xPos = icons[key].offsetLeft;
  //   let yPos = icons[key].offsetTop;
  //   icons[key].style.top = `${yPos + velocityX}px`;
  // });
}

// function to update the position of the lines according to the position of the icons
function updateLinePos() {
  // For each key in the "lines" object...
  Object.keys(lines).forEach(function (key) {
    // Variables for line and icons
    let line = lines[key].line;
    let iconA = lines[key].iconA;
    let iconB = lines[key].iconB;
    // Place the tips of the line according to icon A and B's position
    line.setAttribute("x1", iconA.offsetLeft);
    line.setAttribute("y1", iconA.offsetTop);
    line.setAttribute("x2", iconB.offsetLeft);
    line.setAttribute("y2", iconB.offsetTop);
  });
}
