
function roll7() {
	return 1+Math.round(Math.random()*6);
}

function makeworm() {
	let worm = {};
	worm.a = roll7();
	worm.b = roll7();
	worm.c = roll7();
	//worm.d = roll7();
	return worm;
}

function wormjar() {
	let lib = {};
	lib.id = 0;
	lib.jar = {}
	return lib;
}

function addworm(lib) {
	lib.id += 1;
	lib.jar[lib.id] = makeworm();
	return lib;
}


let worms = wormjar();

//addworm(worms);

for (let step = 0; step < 8; step++) {
  addworm(worms);
}


function matchworms(lib,worm1,worm2) {
  // compare two worms, whoever has highest first stat wins
  let result = "nothing";
  let one = lib.jar[worm1].a;
  let two = lib.jar[worm2].a;

  if (one > two) {
    result = worm1 + " has more";
  } else if (one === two) {
    result = "draw";
  } else if (two > one) {
    result = worm2 + " has more";
  }

  return result;//{one,two}
}

//matchworms(worms,1,2)


function compareworms(lib,worm1,worm2) {
  let result = "nothing";
  // compare two combined traits of the other over one of the self
  // other stat a + other stat b / self stat c
  let one = Math.round((lib.jar[worm2].a + lib.jar[worm2].b) / lib.jar[worm1].c);
  let two = Math.round((lib.jar[worm1].a + lib.jar[worm1].b) / lib.jar[worm2].c);
  let avg = (one+two)/2;

  result = "not feelin it";//+worm1+" says "+one+", and "+worm2+" says "+two;

  if (avg === 2) {
    result = "it true love";
  } else if (avg < 3 && avg > 1) {
    result = "sparks flyin";//+avg;
  }

  return result;
}

//compareworms(worms,1,2)
