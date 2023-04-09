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
      idRelatedFields: [
        "fashion_field",
        "electronics_field",
        "coding_field",
        "3Dmodeling_field",
        "3Dprinting_field",
      ],
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
      // idRelatedFields: [],
      // projects: {},
    },
    modeling: {
      icon: document.getElementById("3Dmodeling_icon"),
      // idRelatedFields: [],
      // projects: {},
    },
    animation: {
      icon: document.getElementById("animation_icon"),
      idRelatedFields: ["animation_field","digitalTexts_field","graphicDesign_field"],
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
      idRelatedFields: ["graphicDesign_field","digitalTexts_field"],
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
      // idRelatedFields: [],
      // projects: {},
    },
    vr: {
      icon: document.getElementById("VR_icon"),
      idRelatedFields: ["VR_field","coding_field", "animation_field", "3Dmodeling_field"],
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
      idRelatedFields: ["coding_field","digitalTexts_field"],
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
      idRelatedFields: ["electronics_field","coding_field", "3Dprinting_field", "3Dmodeling_field"],
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
        iconClicked(actualKey);
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

function iconClicked(clickedIcon) {
  // // Add a css class to animate the icon (goes to the left)
  // icons[clickedIcon].icon.classList.add("iconClicked");
  // document.getElementById("aura_bgIcon").classList.add("fadeIn");
  
  setTimeout(function(){
    fadeOut(icons[clickedIcon].icon);
  },800);
  

  // For each keys in the icon object...
  Object.keys(icons).forEach(function (iconKey) {
    // If it's not the clicked icon, make it fade out
    if (iconKey != clickedIcon) {
      fadeOut(icons[iconKey].icon);
    }
  });
  // Make all the lines fade out
  Object.keys(lines).forEach(function (lineKey) {
    fadeOut(lines[lineKey].line);
  });
  // Make the bg image fade out
  fadeOut(document.getElementById("iridescentCircle"));
}

function showRelatedFields(actualKey) {
  // Assign related fields IDs to a variable
  let relatedFieldsID = icons[actualKey].idRelatedFields;
  // For every related field...  add a css class to make it fade in and create a new line
  for (let i = 0; i < relatedFieldsID.length; i++) {
    // Create a new line
    // let line = createLine();
    // let mainIcon = icons[actualKey].icon;
    let relatedIcon = document.getElementById(relatedFieldsID[i]);

    // If we are at the first related field (which should be the main field)...
    if (i == 0) {
      let fieldsDiv = document.getElementById("otherFields");
      fieldsDiv.insertBefore(relatedIcon, fieldsDiv.firstChild);
      relatedIcon.classList.remove("fields");
      relatedIcon.classList.add("mainField");
      // relatedIcon.style.backgroundColor = "rgb(128, 128, 128)";
    }
    


    // line.setAttribute("opacity", "0");
    // Add a css class that makes the related field and the line fade in
    relatedIcon.classList.add("fadeIn");
    // line.classList.add("fadeIn");

    // ARCHIVES: TESTS FOR POSITIONING LINE
    // let $relatedIconPos = $(`#${relatedFieldsID[i]}`).position();
    // let $relatedIconPos = $(`#${relatedFieldsID[i]}`).position();
    // let pos = relatedIcon.getBoundingClientRect();
    // let relatedIconPos = offset(relatedIcon);
    // let relatedIconPosX = pos.left - iconsDivPos.left;
    // let relatedIconPosY = pos.top-iconsDivPos.top;
    // let iconsDivPos = document.getElementById("iconsDiv").getBoundingClientRect();
    // let iconsDiv = document.getElementById("iconsDiv");
    // let fieldsDiv = document.getElementById("otherFields");

    // let linesDivPos = document.getElementById("icon_lines").getBoundingClientRect();
    // let relatedIconPos = relatedIcon.getBoundingClientRect();
    // let xPos = relatedIconPos.width / 2 + relatedIconPos.x - linesDivPos.x;
    // let yPos = relatedIconPos.height / 2 + relatedIconPos.y - linesDivPos.y;

    // // Update the position of the lines according to the position of the related fields
    // setInterval(function () {
    //   line.setAttribute("x1", mainIcon.offsetLeft);
    //   line.setAttribute("y1", mainIcon.offsetTop);
    //   line.setAttribute("x2", xPos); // ISSUE!
    //   line.setAttribute("y2", yPos); // ISSUE!
    //   // line.setAttribute("x2", relatedIconPos.left);
    //   // line.setAttribute("y2", relatedIconPos.top);
    // }, 5);
  }
}

function displayPrjsIcons(actualKey) {
  let projectKeys = Object.keys(icons[actualKey].projects);
  // For each project...
  projectKeys.forEach(function (projectKey, index) {
    let projectIconSrc = icons[actualKey].projects[projectKey].iconImgSrc;
    // Create an image element
    let projectIcon = document.createElement("IMG");
    projectIcon.setAttribute("src", projectIconSrc);
    projectIcon.setAttribute("width", `${100 / projectKeys.length}%`);
    projectIcon.setAttribute("alt", "Project preview");
    projectIcon.classList.add("projectsIcon");
    document.getElementById("projIconsDiv").appendChild(projectIcon);
    // Delay the animation from one project to the other so we don't see the same colors at the same time
    projectIcon.style.animationDelay = ` ${3 * index}s, 1.5s`;
    projectIcon.onmouseover = function () {
      // Make related field icons turn pink
      let projectFields =
        icons[actualKey].projects[projectKey].projectRelatedFields;
      for (let i = 0; i < projectFields.length; i++) {
        document.getElementById(projectFields[i]).style.backgroundColor = "rgb(245, 165, 200)";
      }
    };
    projectIcon.onmouseout = function () {
      let fieldsIcons = document.getElementsByClassName("fields");
      for (let i = 0; i < fieldsIcons.length; i++) {
        fieldsIcons[i].style.backgroundColor = "rgb(128, 128, 128)";
      }
    };
    //
    projectIcon.onclick = function () {
      // scroll to the project location
    };
  });
}

// function to make fadingElement fade and then stop displaying it
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
  }, 10);
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
