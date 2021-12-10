// movie obj that takes title, director, genre, release year, rating
//function get overview, which logs:  "Movie", a "genre" film directed by "director" was released in "release year". It received a rating of "rating".

function movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

movie.prototype.overview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
}