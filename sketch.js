let f1, f2, f3, f4, f5, f6, f7, f8, f9;
let fb, fh; // bruges til feltidentifikation
let kryds;
let gameOver;
let vinder;

function setup() {
  createCanvas(400, 400);
  fb = width / 3;
  fh = height / 3;
  f1 = 0;
  f2 = 0;
  f3 = 0;
  f4 = 0;
  f5 = 0;
  f6 = 0;
  f7 = 0;
  f8 = 0;
  f9 = 0;
  kryds = true;
  gameOver = false;
  vinder = "ingen"
}

function draw() {
  if (!gameOver) {
    background(220);
    print("f1 = " + f1 + " f2= " + f2 + " f3 = " + f3);
    print("f4 = " + f4 + " f5= " + f5 + " f6 = " + f6);
    print("f7 = " + f7 + " f8= " + f8 + " f9 = " + f9);

    // tegner brættet
    stroke(0);
    strokeWeight(4);
    for (let i = 1; i < 4; i++) {
      line(i * fb, 0, i * fb, height);
      line(0, fh * i, width, fh * i);
    }
textAlign(CENTER,CENTER);
textSize(16);
    fill(0,0,255);
    text("Ejnar",width/2,10);
    // Detect collision med felter
    noStroke();
    fill(255, 0, 0);
    //første linje
    if (mouseY < fh) {
      if (mouseX < fb) {
        rect(4, 4, fb - 10, fh - 10);
      } else
      if (mouseX < 2 * fb) {
        rect(fb + 6, 4, fb - 12, fh - 10);
      } else
      if (mouseX < 3 * fb) {
        rect(2 * fb + 6, 4, fb - 12, fh - 10);
      }
    }
    // anden linje
    else if (mouseY < 2 * fh) {
      if (mouseX < fb) {
        rect(4, 6 + fh, fb - 10, fh - 12);
      } else
      if (mouseX < 2 * fb) {
        rect(fb + 6, 6 + fh, fb - 12, fh - 12);
      } else
      if (mouseX < 3 * fb) {
        rect(2 * fb + 6, 6 + fh, fb - 12, fh - 12);
      }
    }

    // tredje linje
    else if (mouseY < 3 * fh) {
      if (mouseX < 3 * fb && mouseX > 2 * fb) {
        rect(2 * fb + 6, 6 + 2 * fh, fb - 12, fh - 12);
      } else
      if (mouseX < 2 * fb && mouseX > fb) {
        rect(fb + 6, 6 + 2 * fh, fb - 12, fh - 12);
      } else
      if (mouseX < fb) {
        rect(4, 6 + 2 * fh, fb - 10, fh - 12);
      }
    }

    //Tegn kryds eller bolle
    stroke(0, 0, 255);
    if (kryds) {
      line(mouseX - 1 / 4 * fb, mouseY - 1 / 4 * fh, mouseX + 1 / 4 * fb, mouseY + 1 / 4 * fh);
      line(mouseX - 1 / 4 * fb, mouseY + 1 / 4 * fh, mouseX + 1 / 4 * fb, mouseY - 1 / 4 * fh);
    } else {
      ellipse(mouseX, mouseY, 1 / 2 * fb, 1 / 2 * fh);
    }
    tegn();
    vundet();
  } else {
    background(255, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(30);
    strokeWeight(2);
    stroke(0);
    text("Vinder er " + vinder, width / 2, height / 2);
  }
}

// når der trykkes med musen
function mousePressed() {
  //første linje
  if (mouseY < fh) {
    if (mouseX < fb && f1 === 0) {
      if (kryds) {
        f1 = 3;
      } else {
        f1 = 5;
      }
    } else
    if (mouseX < 2 * fb && mouseX > fb && f2 === 0) {
      if (kryds) {
        f2 = 3;
      } else {
        f2 = 5;
      }
    } else
    if (mouseX < 3 * fb && mouseX > 2 * fb && f3 === 0) {
      if (kryds) {
        f3 = 3;
      } else {
        f3 = 5;
      }
    }
  }
  // anden linje
  else if (mouseY < 2 * fh) {
    if (mouseX < fb && f4 === 0) {
      if (kryds) {
        f4 = 3;
      } else {
        f4 = 5;
      }
    } else
    if (mouseX < 2 * fb && mouseX > fb && f5 === 0) {
      print(kryds);
      if (kryds) {
        f5 = 3;
      } else {
        f5 = 5;
      }
    } else
    if (mouseX < 3 * fb && mouseX > 2 * fb && f6 === 0) {
      if (kryds) {
        f6 = 3;
      } else {
        f6 = 5;
      }
    }
  }

  // tredje linje
  else if (mouseY < 3 * fh) {
    if (mouseX < fb && f7 === 0) {
      if (kryds) {
        f7 = 3;
      } else {
        f7 = 5;
      }
    } else
    if (mouseX < 2 * fb && mouseX > fb && f8 === 0) {
      if (kryds) {
        f8 = 3;
      } else {
        f8 = 5;
      }
    } else
    if (mouseX < 3 * fb && mouseX > 2 * fb && f9 === 0) {
      if (kryds) {
        f9 = 3;
      } else {
        f9 = 5;
      }
    }
  }
  kryds = !kryds;
}

function tegn() {
  noFill();
  stroke(255, 0, 255);
  strokeWeight(5);
  if (f1 === 3) {
    line(10, 10, fb - 10, fh - 10);
    line(10, fh - 10, fb - 10, 10);
  }
  if (f1 === 5) {
    ellipse(fb / 2, fh / 2, fb - 20, fh - 20);
  }
  if (f2 === 3) {
    line(10 + fb, 10, 2 * fb - 10, fh - 10);
    line(10 + fb, fh - 10, 2 * fb - 10, 10);
  }
  if (f2 === 5) {
    ellipse(fb / 2 + fb, fh / 2, fb - 20, fh - 20);
  }
  if (f3 === 3) {
    line(10 + 2 * fb, 10, 3 * fb - 10, fh - 10);
    line(10 + 2 * fb, fh - 10, 3 * fb - 10, 10);
  }
  if (f3 === 5) {
    ellipse(fb / 2 + 2 * fb, fh / 2, fb - 20, fh - 20);
  }
  if (f4 === 3) {
    line(10, 10 + fh, fb - 10, 2 * fh - 10);
    line(10, 2 * fh - 10, fb - 10, fh + 10);
  }
  if (f4 === 5) {
    ellipse(fb / 2, fh * 1.5, fb - 20, fh - 20);
  }
  if (f5 === 3) {
    line(10 + fb, 10 + fh, 2 * fb - 10, 2 * fh - 10);
    line(10 + fb, 2 * fh - 10, 2 * fb - 10, fh + 10);
  }
  if (f5 === 5) {
    ellipse(fb / 2 + fb, fh * 1.5, fb - 20, fh - 20);
  }
  if (f6 === 3) {
    line(10 + 2 * fb, 10 + fh, 3 * fb - 10, 2 * fh - 10);
    line(10 + 2 * fb, 2 * fh - 10, 3 * fb - 10, fh + 10);
  }
  if (f6 === 5) {
    ellipse(fb * 2.5, fh * 1.5, fb - 20, fh - 20);
  }
  if (f7 === 3) {
    line(10, 10 + 2 * fh, fb - 10, 3 * fh - 10);
    line(10, 3 * fh - 10, fb - 10, 2 * fh + 10);
  }
  if (f7 === 5) {
  ellipse(fb / 2, fh * 2.5, fb - 20, fh - 20);
}
if (f8 === 3) {
  line(10 + fb, 10 + 2 * fh, 2 * fb - 10, 3 * fh - 10);
  line(10 + fb, 3 * fh - 10, 2 * fb - 10, 2 * fh + 10);
}
if (f8 === 5) {
  ellipse(fb / 2 + fb, fh * 2.5, fb - 20, fh - 20);
}
if (f9 === 3) {
  line(10 + 2 * fb, 10 + 2 * fh, 3 * fb - 10, 3 * fh - 10);
  line(10 + 2 * fb, 3 * fh - 10, 3 * fb - 10, 2 * fh + 10);
}
if (f9 === 5) {
  ellipse(fb * 2.5, fh * 2.5, fb - 20, fh - 20);
}
}

function vundet() {
// undersøg om x har vundet
if (f1 + f2 + f3 === 9 || f4 + f5 + f6 === 9 || f7 + f8 + f9 === 9) {
  gameOver = true;
  vinder = "kryds";
}
else if (f1 + f4 + f7 === 9 || f2 + f5 + f8 === 9 || f3 + f6 + f9 === 9) {
gameOver = true;
vinder = "kryds";
}
else if (f1 + f5 + f9 === 9 || f7 + f5 + f3 === 9) {
gameOver = true;
vinder = "kryds";
}
// undersøg om O har vundet
else if (f1 + f2 + f3 === 15 || f4 + f5 + f6 === 15 || f7 + f8 + f9 === 15) {
gameOver = true;
vinder = "bolle";
}
else if (f1 + f4 + f7 === 15 || f2 + f5 + f8 === 15 || f3 + f6 + f9 === 15) {
gameOver = true;
vinder = "bolle";
}
else if (f1 + f5 + f9 === 15 || f7 + f5 + f3 === 15) {
  gameOver = true;
  vinder = "bolle";
} else if (f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 > 32) {
  vinder = "Ejnar";
  gameOver = true;
}
}
