let canvas;
let myFont1;
let myFont2;
let imgArray = [];
let infoButtonUp;
let infoButtonDown;
let nextButtonUp;
let nextButtonDown;
let prevButtonUp;
let prevButtonDown;
let backgroundImage;
let programState = 'entry';
let dataButtonUp;
let dataButtonDown;
let enterButtonUp;
let enterButtonDown;
let homeButtonUp;
let homeButtonDown;
let subjectImage = [];
let scaryArray = [];
let flynnTechLogo;


var fontColor;
var backgroundColor;
var ranPosX;
var ranPosY;


//username and password
var inputun;
var inputPass;


//possible usernames and passwords
let usernameArray = ['SarahGRicci','WilliamODougherty','TheodoreMVallick','PrestonKLove','ZavierRWise','It'];
let passwordArray = ['flynnTechSystems','Aprilx94IC','Feeds'];


//creepy secret text
//secretText1Array = ['They could not quench its appetite.','they sacrificed the lot but','they could not provide enough bodies.'];
//secretText2Array = ['one cannot satiate that which is always hungry.','there is no end to the hunger beneath.','even the stars in the sky couldnt satisfy it desire'];


//load images
function preload() {
  myFont1 = loadFont('Trigram-vmLDM.ttf');
  myFont2 = loadFont('Tvcd-d92gK.ttf');
  infoButtonUp = loadImage('button_up.jpg');
  infoButtonDown = loadImage('button_down.jpg');
  dataButtonUp = loadImage('X_Up.jpg');
  dataButtonDown = loadImage('X_down.jpg');
  nextButtonUp = loadImage('Button_Next_Up.jpg');
  nextButtonDown = loadImage('Button_Next_Down.jpg');
  prevButtonUp = loadImage('Button_Prev_Up.jpg');
  prevButtonDown = loadImage('Button_Prev_Down.jpg');
  enterButtonUp = loadImage('enter_button_up.jpg');
  enterButtonDown = loadImage('enter_button_down.jpg');
  xButtonUp = loadImage('X_button_up_grey.jpg');
  xButtonDown = loadImage('X_button_Down_grey.jpg');
  homeButtonUp = loadImage('home_button_Up.jpg');
  homeButtonDown = loadImage('home_button_Down.jpg');
  imgArray[0] = loadImage('Giggles.jpg');
  imgArray[1] = loadImage('Mopey.jpg');
  imgArray[2] = loadImage('Mother.jpg');
  imgArray[3] = loadImage('The Watcher.jpg');
  imgArray[4] = loadImage('Happy.jpg');
  imgArray[5] = loadImage('bashful.jpg');
  imgArray[6] = loadImage('Doc.jpg');
  scaryArray[1] = loadImage('black_screen.jpg');
  scaryArray[2] = loadImage('8bit.jpg');
  scaryArray[3] = loadImage('grumpy.jpg');
  subjectImage[1] = loadImage('testing report 1 - subject 1.jpg');
  subjectImage[2] = loadImage('testing report 2 - subject 2.jpg');
  subjectImage[3] = loadImage('testing report 3 - subject 3.jpg');
  subjectImage[4] = loadImage('testing report 4 - subject 4.jpg');
  subjectImage[5] = loadImage('testing report 5 - subject 5.jpg');
  subjectImage[6] = loadImage('testing report 6 - subject 6.jpg');
  subjectImage[7] = loadImage('testing report 7 - subject 7.jpg');
  subjectImage[8] = loadImage('testing report 8 - subject 8.jpg');
  subjectImage[9] = loadImage('testing report 9 - subject 9.jpg');
  flynnTechLogo = loadImage('FlynnTech_logo.jpg');
}



//set up parameters and login bars
function setup() {
  canvas = createCanvas(600, 800);
  canvas.parent('sketch-holder');
  background(220);
  textAlign(CENTER);
  imageMode(CORNER)
 
  //creating the inputs
  inputun = createInput('Username');
  inputun.position(220,200);
  inputun.parent('sketch-holder');
  
  inputPass = createInput('Password');
  inputPass.position(220,250);
  inputPass.parent('sketch-holder');
  
}



//switchstate for reports and info and secrets
function draw() {
  switch (programState) {
    case 'entry':
      entryScreen();
      break;
    case 'data':
      dataScreen();
      break;
    case 'second':
      secondScreen();
      break;
    case 'third':
      thirdScreen();
      break;
    case 'fourth':
      fourthScreen();
      break;
    case 'fifth':
      fifthScreen();
      break;
    case 'sixth':
      sixthScreen();
      break;
    case 'seventh':
      seventhScreen();
      break;
    case 'eighth':
      eighthScreen();
      break;
    case 'ninth':
      ninthScreen();
      break;
    case 'info':
      infoScreen();
      break;
    case 'info2':
      info2Screen();
      break;
    case 'info3':
      info3Screen();
      break;
    case 'info4':
     info3Screen();
      break;
    case 'info5':
      info5Screen();
      break;
    case 'info6':
      info6Screen();
      break;
    case 'info7':
      info7Screen();
      break;
    case 'info8':
      info8Screen();
      break;
    case 'info9':
      info9Screen();
      break;
    case 'info10':
      info10Screen();
      break;
    case 'secret':
      secretScreen();
      break;
    case 'incorrect':
      incorrectScreen();
      break;
    case 'secret2':
      secret2Screen();
      break;
    case 'secret3':
      secret3Screen();
      break;
    case 'option':
      optionScreen();
      break;
    case 'offline':
      offlineScreen();
      break;
    case 'random':
      randomScreen();
      break;
    case '8bit':
      bitScreen();
      break;
    case 'clockIn':
      clockInScreen();
      break;
    case 'clockOut':
      clockOutScreen();
      break;
    case 'error':
      errorScreen();
      break;
  }
}



//8bit scare
function bitScreen() {
//setup
  let fontColor = int(random(int(255)));
  
  background(0);
  
//scaryyyyy
  image(scaryArray[2],180,10,600,600);
  
//text blink
  fill(fontColor,0,0);
  textSize(20);
  textFont(myFont2);
  text('there is no exit.',260,400);
  
}



//clock in
function clockInScreen() {
//set up
  background(66,66,66);
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
//clock in function
  textFont(myFont2);
  textSize(20);
  fill(255);
  text('clocked in.',300,400)
  
}



//clock out
function clockOutScreen() {
//set up
  background(66,66,66);
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
//clock out function
  textFont(myFont2);
  textSize(20);
  fill(255);
  text('clocked out.',300,400)
  
}



//error
function errorScreen() {
//set up
  background(66,66,66);
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
//error function
  let fontColor = int(random(int(255)));
  
  textFont(myFont2);
  textSize(20);
  fill(fontColor,0,0);
  text('error 1598D_0$46 x',300,400)
  
}



//random reboot screen
function randomScreen() {
//blinking text set up
  fontColor = int(random(int(255)));
  
//set up
  background(66,66,66);
  fill(fontColor);
  textSize(20);
  textFont(myFont2);
  text('reboot systems error_',300,200);
  text('please exit.',300,400);
  
//spooky exit
  if ((mouseX > width*0.53) && (mouseX < width*0.65) && (mouseY > height*0.482) && (mouseY < height*0.505)) {
    fill(fontColor,0,0);
    text('exit.',354.5,400);
  } else {
    fill(fontColor);
    text('exit.',354.5,400);
  }
  
}



//login screen
function entryScreen() {
//setup
  background(66,66,66);
  fill(255,0,0);
  textSize(30);
  textFont(myFont1);
  text('Database login',300,170);
  
  image(flynnTechLogo,10,5,300,100)

//enter button animation
    if ((mouseX > width*0.46) && (mouseX < width*0.54) && (mouseY > height*0.375) && (mouseY < height*0.405)) {
    image(enterButtonDown,275,300,50,25);
  } else {
    image(enterButtonUp,275,300,50,25);
  }
  
}



//incorrect username or password
function incorrectScreen() {
  background(66,66,66);
  fill(255,0,0);
  textSize(20);
  textFont(myFont1);
  text('Incorrect Username or password',300,170);
  
  image(flynnTechLogo,10,5,300,100)
  
//X button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
}



//the picker area with the random stuff
function optionScreen() {
//setup
  background(66,66,66);
  
//options
  textFont(myFont1);
  textSize(20);
  
//user manuals
   if ((mouseX > width*0.08) && (mouseX < width*0.445) && (mouseY > height*0.23) && (mouseY < height*0.252)) {
     fill(255);
     text('_User manuals',158,200);
   } else {
     fill(255,0,0);
     text('_User manuals',158,200);
   }
  
//medical systems
   if ((mouseX > width*0.08) && (mouseX < width*0.525) && (mouseY > height*0.295) && (mouseY < height*0.315)) {
     fill(255);
     text('_medical systems',182,250);
   } else {
     fill(255,0,0);
     text('_medical systems',182,250);
   }
  
//clock in
   if ((mouseX > width*0.08) && (mouseX < width*0.305) && (mouseY > height*0.355) && (mouseY < height*0.38)) {
     fill(255);
     text('_Clock In',116,300);
   } else {
     fill(255,0,0);
     text('_Clock In',116,300);
   }
  
//clock out
   if ((mouseX > width*0.08) && (mouseX < width*0.35) && (mouseY > height*0.42) && (mouseY < height*0.44)) {
     fill(255);
     text('_clock out',130,350);
   } else {
     fill(255,0,0);
     text('_clock out',130,350);
   }
  
//invita callim reports button  
   if ((mouseX > width*0.08) && (mouseX < width*0.52) && (mouseY > height*0.48) && (mouseY < height*0.505)) {
     fill(255);
     text('_Medical Reports',180,400);
   } else {
     fill(255,0,0);
     text('_Medical Reports',180,400);
   }

//info button
   if ((mouseX > width*0.08) && (mouseX < width*0.205) && (mouseY > height*0.54) && (mouseY < height*0.57)) {
     fill(255);
     text('_Info',85,450);
   } else {
     fill(255,0,0);
     text('_info',85,450);
   }
  
  image(flynnTechLogo,10,5,300,100)
}



//offline screen
function offlineScreen() {
  background(66,66,66);
  fill(255,0,0);
  textSize(20);
  textFont(myFont1);
  text('Systems Offline_',300,300);
  text('reboot required_',300,400);
  
//reboot animation
  textFont(myFont2);
  textSize(15);
      if ((mouseX > width*0.43) && (mouseX < width*0.565) && (mouseY > height*0.73) && (mouseY < height*0.755)) {
        fill(255);
        text('reboot.',300,600);
      } else {
        fill(255,0,0);
        text('reboot.',300,600);
      }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//first report
function dataScreen() {
//setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[1],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[1],81.5,246,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.56) && (mouseX < width*0.59) && (mouseY > height*0.856) && (mouseY < height*0.865)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('fear',346,691);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('fear',700,691);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.56) && (mouseX < width*0.59) && (mouseY > height*0.856) && (mouseY < height*0.865)) && (programState = 'data')) {
    image(imgArray[1],81.5,246,200*0.8,200*0.8)
  }
  
}



//second report
function secondScreen() {
//setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[2],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[0],81.5,247,200*0.8,200*0.8)
  }
  
//set up blinking text
  var fontColor = int(random(int(256)));
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.54) && (mouseX < width*0.61) && (mouseY > height*0.822) && (mouseY < height*0.83)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('giggling',345,663);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('giggling',700,663);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.54) && (mouseX < width*0.61) && (mouseY > height*0.822) && (mouseY < height*0.83)) && (programState = 'second')) {
    image(imgArray[0],81.5,247,200*0.8,200*0.8)
  }
}



//third report
function thirdScreen() {
//setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[3],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[2],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.29) && (mouseX < width*0.34) && (mouseY > height*0.831) && (mouseY < height*0.842)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('smile',190,672);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('smile',700,672);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.29) && (mouseX < width*0.34) && (mouseY > height*0.831) && (mouseY < height*0.842)) && (programState = 'third')) {
    image(imgArray[2],81.5,247,200*0.8,200*0.8)
  }
  
}



//fourth report
function fourthScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[4],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[3],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.463) && (mouseX < width*0.5) && (mouseY > height*0.831) && (mouseY < height*0.842)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('eyes',289,671);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('eyes',700,671);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.463) && (mouseX < width*0.5) && (mouseY > height*0.831) && (mouseY < height*0.842)) && (programState = 'fourth')) {
    image(imgArray[3],81.5,247,200*0.8,200*0.8)
  }
}



//fifth report
function fifthScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[5],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(scaryArray[3],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.458) && (mouseX < width*0.54) && (mouseY > height*0.831) && (mouseY < height*0.842)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('enveloped',300,671);
  } else {
  fill(255);
  textFont(myFont2);
  textSize(7);
  text('enveloped',700,671);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.458) && (mouseX < width*0.54) && (mouseY > height*0.831) && (mouseY < height*0.842)) && (programState = 'fifth')) {
    image(scaryArray[3],81.5,247,200*0.8,200*0.8)
  }
}



//sixth report
function sixthScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[6],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(scaryArray[2],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.15) && (mouseX < width*0.215) && (mouseY > height*0.831) && (mouseY < height*0.842)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('removed',110,671);
  } else {
  fill(255);
  textFont(myFont2);
  textSize(7);
  text('removed',700,671);
  }
  
//hidden cell number
  if ((mouseX > width*0.585) && (mouseX < width*0.65) && (mouseY > height*0.42) && (mouseY < height*0.44)) {
    fill(fontColor,0,0);
    textFont(myFont2);
    textSize(9.5);
    text('1598D',369.5,347);
  } else {
    fill(0);
    textFont(myFont2);
    textSize(9.5);
    text('1598D',369.5,347);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.15) && (mouseX < width*0.215) && (mouseY > height*0.831) && (mouseY < height*0.842)) && (programState = 'sixth')) {
    image(scaryArray[2],81.5,247,200*0.8,200*0.8)
  }
}



//seventh report
function seventhScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[7],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[4],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.535) && (mouseX < width*0.585) && (mouseY > height*0.841) && (mouseY < height*0.848)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('open',334,677);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('open',700,677);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.535) && (mouseX < width*0.585) && (mouseY > height*0.841) && (mouseY < height*0.848)) && (programState = 'seventh')) {
    image(imgArray[4],81.5,247,200*0.8,200*0.8)
  }
}




//eighth report
function eighthScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[8],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[5],81.5,247,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.63) && (mouseX < width*0.7) && (mouseY > height*0.82) && (mouseY < height*0.83)) {
  fill(255,0,0);
  textFont(myFont2);
  textSize(7);
  text('melting',399,661.5);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('melting',700,661.5);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.63) && (mouseX < width*0.7) && (mouseY > height*0.82) && (mouseY < height*0.83)) && (programState = 'eighth')) {
    image(imgArray[5],81.5,247,200*0.8,200*0.8)
  }
}



//ninth report
function ninthScreen() {
  //setup
  background(66, 66, 66);
  fill(255,0,0);
  textFont(myFont1);
  textSize(50);
  text('Reports',210,69);
  textSize(7);
  text('CONFIDENTIAL - Information disclosed in these files not for external distribution - for intended use only',135.5,771,330);
  
//report image
  image(subjectImage[9],60,100,600*0.8,800*0.8)

//info button animation
    if ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
    image(infoButtonDown,440,25,100,50);
  } else {
    image(infoButtonUp,440,25,100,50);
  }
  
//next button animation
    if ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(nextButtonDown,465,745,75,50);
    } else {
      image(nextButtonUp,465,745,75,50);
    }
  
//prev button animation
    if ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994)) {
      image(prevButtonDown,60,745,75,50);
    } else {
      image(prevButtonUp,60,745,75,50);
    }
  
//home button animation
    if ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09)) {
      image(homeButtonDown,381,27,46,46);
    } else {
      image(homeButtonUp,381,27,46,46);
    }
  
//variable for blinking image
  let ranPosX = int(random(int(600)));
  
//what happens if mouseX overlaps
  if (mouseX == (ranPosX)) {
    image(imgArray[6],81.5,246.5,200*0.8,200*0.8)
  }
 
//set up blinking text
  var fontColor = int(random(int(256)));  
  
//text animation for mouseIsPressed
  if ((mouseX > width*0.385) && (mouseX < width*0.61) && (mouseY > height*0.74) && (mouseY < height*0.755)) {
  fill(fontColor,0,0);
  textFont(myFont2);
  textSize(7);
  text('and then there were nine',300,600);
  } else {
  fill(0);
  textFont(myFont2);
  textSize(7);
  text('and then there were nine',300,600);
  }

//mouseIsPressed creepy image from text
  if ((mouseIsPressed === true) && ((mouseX > width*0.385) && (mouseX < width*0.61) && (mouseY > height*0.74) && (mouseY < height*0.755)) && (programState = 'ninth')) {
    image(imgArray[6],81.5,246.5,200*0.8,200*0.8)
  }
}



//description of project
function infoScreen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info2Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info3Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info4Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info5Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info6Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info7Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info8Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}




//description of project
function info9Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}



//description of project
function info10Screen() {
//setup
  background(66,66,66);
  fill(255);
  textFont(myFont1);
  textSize(20);
  text('This project is meant to be a representation of what a medical database in an analogue horror universe would look like. Analogue horror is an entirely unique creator driven form of art popularized by youtube series such as Gemini Home Entertainment and The Mandela Catalogue. It includes VHS style footage and the idea that you are watching an old tape "in universe". Many analogue horror worlds use nonlinear story telling and hidden clues in the videos to build the story and lore around the universe, eventually creating a fully fleshed out and terrifying world. This code here would be a part of my own analogue series. If there were a youtube series around it this would be another piece to the puzzle, leading the viewer to the final story. Yes this write up breaks immersion but just pretend its not here.',50,50,500);
 
//blinking Flesh
  var fontColor = int(random(int(256)));  
  
//secret text animation
      if ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66)) {
      fill(fontColor,0,0);
      text('fleshed',156,525);
    } else {
      fill(255);
      text('fleshed',156,525);
    }
  
//x button animation
      if ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07)) {
    image(xButtonDown,540,10,50,50);
  } else {
    image(xButtonUp,540,10,50,50);
  }
  
}




//secret screen
function secretScreen() {
//set up for blinking effect
  var fontColor = int(random(int(256)));
  var backgroundColor = int(random(int(256)));
  
//blinking effect
  background(backgroundColor,0,0);
  fill(fontColor,0,0);
  textFont(myFont2);
  textSize(20);
  image(scaryArray[3],100,190,400,400)
  text('they could not quench its appetite.',300,400);
  text('One cannot satiate that which is always hungry',100,500,400);
}



//second secret screen
function secret2Screen() {
//blinking background
  var backgroundColor = int(random(int(256)));
  var fontColor = int(random(int(256)));
  
  background(backgroundColor,0,0)
  
  fill(fontColor,0,0);
  textSize(20);
  textFont(myFont2);
  text('12/13/2023',100,100)
}



//third secret screen
function secret3Screen() {
  var backgroundColor = int(random(int(256)));
  var fontColor = int(random(int(256)));
  
  background(backgroundColor);
  
  fill(fontColor,fontColor,fontColor);
  textSize(13);
  textFont(myFont2);
  text('01001000 01100101 00100000 01110100 01110010 01101001 01100101 01100100 00100000 01110100 01101111 00100000 01100110 01101001 01100111 01101000 01110100 00100000 01101001 01110100 00101110 00001010 00001010 01001001 00100000 01110100 01101111 01101111 01101011 00100000 01101000 01101001 01110011 00100000 01110011 01101011 01101001 01101110 00101110',350,100,50);
}



//many many switch states
function mouseReleased() {
//username and password value set
  let username = inputun.value();
  let password = inputPass.value();
//secret username and password
  let secretUsername = inputun.value();
  let secretPassword = inputPass.value();
//first info button
  if ((programState == 'data') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) && (mouseY < height*0.09))) {
      programState = 'info';
    } else if ((programState == 'second') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info2';
    } else if ((programState == 'third') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info3';
    } else if ((programState == 'fourth') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info4';
    } else if ((programState == 'fifth') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info6';
    } else if ((programState == 'sixth') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info7';
    } else if ((programState == 'seventh') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info8';
    } else if ((programState == 'eighth') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info9';
    } else if ((programState == 'ninth') && ((mouseX > width*0.738) && (mouseX < width*0.899) && (mouseY > height*0.035) &&(mouseY < height*0.09))) {
      programState = 'info10';
//secret switch
    } else if ((programState == 'info') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
        programState = 'secret';
    } else if ((programState == 'info2') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
        programState = 'secret';
    } else if ((programState == 'info3') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
        programState = 'secret';
    } else if ((programState == 'info4') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
        programState = 'secret';
    } else if ((programState == 'info5') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
        programState = 'secret';
    } else if ((programState == 'info6') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
      programState = 'secret';
    } else if ((programState == 'info7') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
      programState = 'secret';
    } else if ((programState == 'info8') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
      programState = 'secret';
    } else if ((programState == 'info9') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
      programState = 'secret';
    } else if ((programState == 'info10') && ((mouseX > width*0.16) && (mouseX < width*0.36) && (mouseY > height*0.64) && (mouseY < height*0.66))) {
      programState = 'secret';
//return to data screens
    } else if ((programState == 'info') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
       programState = 'data';  
    } else if ((programState == 'info2') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
       programState = 'second';
    } else if ((programState == 'info3') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
       programState = 'third';
    } else if ((programState == 'info4') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
       programState = 'fourth';
    } else if ((programState == 'info5') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
       programState = 'option';
    } else if ((programState == 'info6') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'fifth';
    } else if ((programState == 'info7') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'sixth';
    } else if ((programState == 'info8') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'seventh';
    } else if ((programState == 'info9') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'eighth';
    } else if ((programState == 'info10') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'ninth';
//next button switch states
    } else if ((programState == 'data') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'second';
    } else if ((programState == 'second') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'third';
    } else if ((programState == 'third') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'fourth';
    } else if ((programState == 'fourth') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'fifth';
    } else if ((programState == 'fifth') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'sixth';
    } else if ((programState == 'sixth') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'seventh';
    } else if ((programState == 'seventh') &&((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'eighth';
    } else if ((programState == 'eighth') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'ninth';
    } else if ((programState == 'ninth') && ((mouseX > width*0.77) && (mouseX < width*0.898) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'data';
//prev button switch states
    } else if ((programState == 'data') && ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'ninth';
    } else if ((programState == 'ninth') && ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'eighth';
    } else if ((programState == 'eighth') &&((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'seventh';
    } else if ((programState == 'seventh') &&((mouseX > width*0.102) && (mouseX < width*0.23) &&(mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'sixth';
    } else if ((programState == 'sixth') && ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'fifth';
    } else if ((programState == 'fifth') && ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'fourth';
    } else if ((programState == 'fourth') &&((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'third';
    } else if ((programState == 'third') && ((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'second';
    } else if ((programState == 'second') &&((mouseX > width*0.102) && (mouseX < width*0.23) && (mouseY > height*0.935) && (mouseY < height*0.994))) {
      programState = 'data';
//login function
    } else if ((programState == 'entry') && ((mouseX > width*0.46) && (mouseX < width*0.54) && (mouseY > height*0.375) && (mouseY < height*0.405)) && (usernameArray.includes(username) == true) && (passwordArray.includes(password) == true)) {
      programState = 'option';
      removeElements();
//wrong
    } else if ((programState == 'entry') && ((mouseX > width*0.46) && (mouseX < width*0.54) && (mouseY > height*0.375) && (mouseY < height*0.405)) && (usernameArray.includes(username) == false) && (passwordArray.includes(password) == false)) {
      programState = 'incorrect';
//back to login
    } else if ((programState == 'incorrect') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'entry';
//secret login
    } else if ((programState == 'entry') && ((mouseX > width*0.06) && (mouseX < width*0.11) && (mouseY > height*0.045) && (mouseY < height*0.08)) && (usernameArray.includes(username) == true) && (passwordArray.includes(password) == true)) {
      programState = 'secret2';
      removeElements();
//another info screen
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.205) && (mouseY > height*0.54) && (mouseY < height*0.57))) {
      programState = 'info5';
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.52) && (mouseY > height*0.48) && (mouseY < height*0.505))) {
      programState = 'data';
    } else if (((programState == 'data') || (programState == 'second') || (programState == 'third') || (programState == 'fourth') || (programState == 'fifth') || (programState == 'sixth') || (programState == 'seventh') || (programState == 'eighth') || (programState == 'ninth')) && ((mouseX > width*0.632) && (mouseX < width*0.712) && (mouseY > height*0.035) && (mouseY < height*0.09))) {
      programState = 'option';
//offline systems
    } else if ((programState == 'offline') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'option';
//mechanical systems
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.525) && (mouseY > height*0.295) && (mouseY < height*0.315))) {
      programState = 'offline';
//clock in
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.305) && (mouseY > height*0.355) && (mouseY < height*0.38))) {
      programState = 'clockIn';
//clock out
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.35) && (mouseY > height*0.42) && (mouseY < height*0.44))) {
      programState = 'clockOut';
//manuals
    } else if ((programState == 'option') && ((mouseX > width*0.08) && (mouseX < width*0.445) && (mouseY > height*0.23) && (mouseY < height*0.252))) {
      programState = 'error';
//manuals exit
    } else if ((programState == 'error') & ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'option';
    } else if ((programState == 'offline') && ((mouseX > width*0.43) && (mouseX < width*0.565) && (mouseY > height*0.73) && (mouseY < height*0.755))) {
      programState = 'random';
    } else if ((programState == 'random') && ((mouseX > width*0.53) && (mouseX < width*0.65) && (mouseY > height*0.482) && (mouseY < height*0.505))) {
      programState = '8bit';
    } else if ((programState == 'clockIn') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'option';
    } else if ((programState == 'clockOut') && ((mouseX > width*0.91) && (mouseX < width*0.97) && (mouseY > height*0.02) && (mouseY < height*0.07))) {
      programState = 'option'
    } else if ((programState == 'sixth') && ((mouseX > width*0.585) && (mouseX < width*0.65) && (mouseY > height*0.42) && (mouseY < height*0.44))) {
      programState = 'secret3';
    }

}
