let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase;

let numCatLives: number = 9;
numCatLives++;
// numCatLives = "zero"

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// Type Inference
let tvShow = "Olive";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "lsd";

// the any type
// let thing: any = "Hello";
// thing = 1;
// thing = false;
// thing()
// thing.toUpperCase()

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

foundMovie();
foundMovie = 1;
