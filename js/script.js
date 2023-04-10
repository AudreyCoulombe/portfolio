"use strict";
/*****************
Audrey's portfolio - Main page
******************/

let icons = {};
let lines = {};

// When the page is ready...
$(document).ready(function () {
  // icons = {
  //   fashion: document.getElementById("fashion_icon"),
  //   printing: document.getElementById("3Dprinting_icon"),
  //   modeling: document.getElementById("3Dmodeling_icon"),
  //   animation: document.getElementById("animation_icon"),
  //   graphDesign: document.getElementById("graphicDesign_icon"),
  //   digiTxts: document.getElementById("digitalTexts_icon"),
  //   vr: document.getElementById("VR_icon"),
  //   coding: document.getElementById("coding_icon"),
  //   electronics: document.getElementById("electronics_icon"),
  // };

  icons = {
    fashion: {
      icon: document.getElementById("fashion_icon"),
      idMainField: "fashion_field",
      projects: {
        printedTextiles: {
          iconImgSrc: "./assets/images/printedTextiles_icon.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Research-Creation on 3D Printed Textiles",
          projectYear: "2021",
          projectMedium: "TPU | Illustrator, Blender, Cura",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: ["3Dmodeling_field", "3Dprinting_field"],
        },
        vitalFatal: {
          iconImgSrc: "./assets/images/vitalFatal_icon.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Vital/Fatal",
          projectYear: "2020",
          projectMedium:
            "Fabric, 3D printed PLA, electronics | Arduino IDE, Blender, Cura",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.x",
          projectRelatedFields: [
            "electronics_field",
            "coding_field",
            "3Dmodeling_field",
            "3Dprinting_field",
          ],
        },
        aurora: {
          iconImgSrc: "./assets/images/aurora_icon.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Aurora",
          projectYear: "2018",
          projectMedium: "Fabric, electronics, fiber optic",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: ["electronics_field", "coding_field"],
        },
        // burdenedMind: {},
        // spreadYourArt: {},
        // analogVSdigital: {},
        // fashionTech: {},
      },
    },
    printing: {
      icon: document.getElementById("3Dprinting_icon"),
      // idMainField: "3Dprinting_field",
      // projects: {},
    },
    modeling: {
      icon: document.getElementById("3Dmodeling_icon"),
      // idMainField: "3Dmodeling_field",
      // projects: {},
    },
    animation: {
      icon: document.getElementById("animation_icon"),
      // idMainField: "animation_field",
      projects: {
        ModernTimes: {
          iconImgSrc: "",
          projectVidSrc: "./assets/images/x.mp4",
          projectImgsSrcs: [],
          projectTitle: "Modern Times",
          projectYear: "2022",
          projectMedium: "Adobe Premiere, Adobe After Effects",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: ["digitalTexts_field"],
        },
      },
    },
    graphDesign: {
      icon: document.getElementById("graphicDesign_icon"),
      idMainField: "graphicDesign_field",
      projects: {
        listenVSspeak: {
          iconImgSrc: "./assets/images/x.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "I Listen More Than I Speak",
          projectYear: "2022",
          projectMedium: "Illustrator, Photoshop",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: ["digitalTexts_field"],
        },
        // TimesNewRoman: {},
      },
    },
    digiTxts: {
      icon: document.getElementById("digitalTexts_icon"),
      // idMainField: "digitalTexts_field",
      // projects: {},
    },
    vr: {
      icon: document.getElementById("VR_icon"),
      idMainField: "VR_field",
      projects: {
        energyBeings: {
          iconImgSrc: "./assets/images/x.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "We Are All Energy Beings",
          projectYear: "2022",
          projectMedium:
            "Oculus Quest 2 | Unity, Blender, Touch Designer, photogrammetry",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: [
            "coding_field",
            "animation_field",
            "3Dmodeling_field",
          ],
        },
        virtualSurreality: {
          iconImgSrc: "./assets/images/x.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Virtual Surreality",
          projectYear: "2022",
          projectMedium: "Oculus Quest 2 | Unity, Blender, Substance Painter",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: [
            "coding_field",
            "animation_field",
            "3Dmodeling_field",
          ],
        },
      },
    },
    coding: {
      icon: document.getElementById("coding_icon"),
      idMainField: "coding_field",
      projects: {
        algorithmicPortrait: {
          iconImgSrc: "./assets/images/x.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Algorithmic Portrait",
          projectYear: "2022",
          projectMedium: "Node.js, DALL·E Mini, javascript, html, css",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: ["digitalTexts_field"],
        },
      },
    },
    electronics: {
      icon: document.getElementById("electronics_icon"),
      idMainField: "electronics_field",
      projects: {
        fentalert: {
          iconImgSrc: "./assets/images/x.png",
          projectImgsSrcs: ["./assets/images/x.png"],
          projectTitle: "Fentalert",
          projectYear: "2022",
          projectMedium:
            "Electronics, 3D printed PLA, crafted lab equipment, sound card | Arduino IDE, Blender, Cura, Reaper",
          projectDescription:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla faci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
          projectRelatedFields: [
            "coding_field",
            "3Dprinting_field",
            "3Dmodeling_field",
          ],
        },
      },
    },
  };

  lines = {
    fashion_3Dprint: {
      line: createLine(),
      iconA: icons.fashion.icon,
      iconB: icons.printing.icon,
    },
    fashion_elect: {
      line: createLine(),
      iconA: icons.fashion.icon,
      iconB: icons.electronics.icon,
    },
    elect_3Dprint: {
      line: createLine(),
      iconA: icons.electronics.icon,
      iconB: icons.printing.icon,
    },
    print_3Dmodeling: {
      line: createLine(),
      iconA: icons.printing.icon,
      iconB: icons.modeling.icon,
    },
    elect_coding: {
      line: createLine(),
      iconA: icons.electronics.icon,
      iconB: icons.coding.icon,
    },
    coding_VR: {
      line: createLine(),
      iconA: icons.coding.icon,
      iconB: icons.vr.icon,
    },
    VR_3Dmodeling: {
      line: createLine(),
      iconA: icons.vr.icon,
      iconB: icons.modeling.icon,
    },
    VR_animation: {
      line: createLine(),
      iconA: icons.vr.icon,
      iconB: icons.animation.icon,
    },
    modeling_anim: {
      line: createLine(),
      iconA: icons.modeling.icon,
      iconB: icons.animation.icon,
    },
    coding_digitxts: {
      line: createLine(),
      iconA: icons.coding.icon,
      iconB: icons.digiTxts.icon,
    },
    digitxts_anim: {
      line: createLine(),
      iconA: icons.digiTxts.icon,
      iconB: icons.animation.icon,
    },
    digitxts_graphDes: {
      line: createLine(),
      iconA: icons.digiTxts.icon,
      iconB: icons.graphDesign.icon,
    },
    graphDes_anim: {
      line: createLine(),
      iconA: icons.graphDesign.icon,
      iconB: icons.animation.icon,
    },
  };

  // For each keys in the icons object...
  Object.keys(icons).forEach(function (actualKey) {
    let actualIcon = icons[actualKey].icon;
    // When the mouse is over the icon...
    actualIcon.onmouseover = function () {
      console.log("mouse over");
      // Here: display list of projects at bottom
    };

    // When the mouse goes out the icon...
    actualIcon.onmouseout = function () {
      console.log("mouse out");
      // Here: hide list of projects at bottom
    };

    // If the icon has the class "icon" (if it's not a dark grey icon)...
    if (actualIcon.classList.contains("icon")) {
      // Add a click event listener
      actualIcon.onclick = function () {
        hideElements(actualKey);
        showRelatedFields(actualKey);
        displayPrjsIcons(actualKey);
      };
    }
  });

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

// Function to hide elements when an icon is clicked
// Uses fadeOut() custom function for smooth transition
function hideElements(clickedIcon) {
  icons[clickedIcon].icon.style.transform = "translate(-50%, -50%) scale(1.5)";
  
  // For each keys in the icon object...
  Object.keys(icons).forEach(function (iconKey) {
      fadeOut(icons[iconKey].icon);
  });
  // Make all the lines fade out
  Object.keys(lines).forEach(function (lineKey) {
    fadeOut(lines[lineKey].line);
  });
  // Make the bg image fade out
  fadeOut(document.getElementById("iridescentCircle"));
}

// Function to make fadingElement fade and then stop displaying it
function fadeOut(fadingElement) {
  let opacity = 1;
  // Interval to change opacity every 10 millis
  let opacityChange = setInterval(function () {
    // If opacity is smaller or equal to 0...
    if (opacity <= 0) {
      // Stop the changing the opacity
      clearInterval(opacityChange);
      // Stop displaying the element
      fadingElement.style.display = "none";
    }
    // Subtract 0.01 from opacity value
    opacity -= 0.01;
    // Assign new opacity value to element
    fadingElement.style.opacity = opacity;
  }, 2);
}

// Function to show related fields icons on the left of the screen
function showRelatedFields(actualKey) {
  // Store the main field element in a variable
  let mainField = document.getElementById(icons[actualKey].idMainField);
  // Variable for the fields container
  let fieldsDiv = document.getElementById("allFields");

  // Make the main field appear first in the field container (on top left of the screen)
  fieldsDiv.insertBefore(mainField, fieldsDiv.firstChild);
  // Change css class of the main field
  mainField.classList.remove("fields");
  mainField.classList.add("mainField");
  // Add a css class to the fields container the makes it fade in
  fieldsDiv.classList.add("fadeIn");
}

// Function to display projects icons and handle mouseover and click events
function displayPrjsIcons(actualKey) {
  let projectKeys = Object.keys(icons[actualKey].projects);
  let projectIsClicked = false;

  // For each project...
  projectKeys.forEach(function (projectKey, index) {
    let project = icons[actualKey].projects[projectKey];
    let projectIconSrc = project.iconImgSrc;
    let mainField = document.getElementById(icons[actualKey].idMainField);
    // Create an image element
    let projectIcon = document.createElement("IMG");
    projectIcon.setAttribute("src", projectIconSrc);
    projectIcon.setAttribute("width", `${100 / projectKeys.length}%`);
    projectIcon.setAttribute("alt", "Project preview");
    projectIcon.classList.add("projectsIcon");
    document.getElementById("projIconsDiv").appendChild(projectIcon);
    // Delay the animation from one project to the other so we don't see the same colors at the same time
    projectIcon.style.animationDelay = ` ${3 * index}s, 1.5s`;

    // When the mouse is over the project icon...
    projectIcon.onmouseover = function () {
      // If the project was not clicked...
      if (projectIsClicked == false) {
        let projectFields = project.projectRelatedFields;
        projectIcon.style.transform = "translateY(-50%) scale(1.3)";
        projectIcon.style.zIndex = "6000";
        // Make related field icons turn pink
        for (let i = 0; i < projectFields.length; i++) {
          document.getElementById(projectFields[i]).style.backgroundColor="rgb(245, 165, 200)";
        }
        // Add css class to animate the main field
        setTimeout(function () {
          mainField.classList.add("animateMainField");
        }, 2);
      }
    };
    // When the mouse goes out of the project icon...
    projectIcon.onmouseout = function () {
      // If the project was not clicked...
      if (projectIsClicked == false) {
        let fieldsIcons = document.getElementsByClassName("fields");
        projectIcon.style.transform = "translateY(-50%)";
        projectIcon.style.zIndex = "1";
        // Make related field icons turn back to grey
        for (let i = 0; i < fieldsIcons.length; i++) {
          fieldsIcons[i].style.backgroundColor = "rgb(128, 128, 128)";
        }
        // Remove the css class that animated the main field
        mainField.classList.remove("animateMainField");
      }
    };

    // When the project icon is clicked...
    projectIcon.onclick = function () {
      projectIsClicked = true;
      projectIcon.style.transform = "translateY(-50%) scale(1.3)";
      projectIcon.style.zIndex = "6000";
      fadeOut(document.getElementById("projIconsDiv"));
      
      displayProject(project, projectIcon);
    };
  });
}

function displayProject(project, projectIcon) {
  // projectIcon.src = "newImage";
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
