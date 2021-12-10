// movie obj that takes title, director, genre, release year, rating
//function get overview, which logs:  "Movie", a "genre" film directed by "director" was released in "release year". It received a rating of "rating".

//We capitalize the first letter to indicate this function must be called using the "new" keyword
function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.overview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
}

let eternals = new Movie("Eternals", "Chloe Zhao", "Superhero", 2021, 5);
console.log(eternals.overview());
let homeAlone = new Movie("Home Alone", "Chris Columbus", "Comedy", 1990, 4);
console.log(homeAlone.overview());