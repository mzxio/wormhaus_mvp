// globals 

let session = null;
let gameworld = newgame();

// listeners

document.getElementById("clicker").addEventListener("click", clicker);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("save").addEventListener("click", save);
document.getElementById("load").addEventListener("click", load);
document.getElementById("start").addEventListener("click", start);

// functions

function start() {
  if (!session) {
    // update ui
    document.getElementById("playarea").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("load").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("stop").style.display = "block";
    document.getElementById("save").style.display = "block";
    // start session
	  session = setInterval(update, 1000);
  }
}

function stop() {
  // update ui
  document.getElementById("playarea").style.display = "none";
  document.getElementById("stop").style.display = "none";
  document.getElementById("load").style.display = "block";
  document.getElementById("start").style.display = "block";
  document.getElementById("output").style.display = "block";
  // stop session
  clearInterval(session);
  session = null;
}

function load() {
  // for now blindly accepts game data
  // need to do some checks on what's in the text box first
  gameworld = JSON.parse(document.getElementById("output").value);
  start();
}

function save() {
  stop();
  const output = document.getElementById("output");
  output.focus();
  output.select();
}

function update() {
	gameworld.time = increment(gameworld.time,1);
	draw();
}

function draw() {
	document.getElementById("timer").innerHTML = gameworld.time;
  document.getElementById("counter").innerHTML = gameworld.counter;
  document.getElementById("output").value = JSON.stringify(gameworld);
}

function newgame() {
	let world = {}
	world.time = 0;
	world.counter = 0;
	//world.loot = {};
	return world;
}

function increment(counter,count) {
  counter += count || 0;
  return counter;
}

function clicker() {
  gameworld.counter = increment(gameworld.counter,1)
}


// start

//start();




