var mySong, amplitude, play;

function preload(){
     mySong = loadSound('assets/massiveAttackAngel.mp3');
}


function setup() {
 
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    rectMode(CENTER);

    amplitude = new p5.Amplitude();
    background(0);
    play = false;
    button = createButton("Play");
    button.addClass('btn');
    button.center();
    
    button.mousePressed(()=>{
        play = true;
        mySong.play();
        button.hide();
    });
}

function draw() {
    console.log(play);
    if(play == true){
            //console.log(amplitude.getLevel());
    var level = amplitude.getLevel();
    var vol = map(level, 0, 1, 0, 1000);
    var col = map(level, 0, 1, 0, 255);

    background(col);

    //console.log(vol);

    noStroke(0);

    if(vol>200){

        fill(col);
        ellipse(width/2, height/2, vol + 100);
    }

    fill(col, 100, 100);
    ellipse(width/2, height/2, vol);

    fill(100, col, 100);
    ellipse(width/2, height/2, vol/2);

    }



}