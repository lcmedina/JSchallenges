//  Suppose you're playing Scrabble with your best friend and you want to know how many possible combinations of letters you can make with the letters you have. Create a recursive function that takes in a string of letters and calculates the number of possible combinations you can play. Calculating the number of possible combinations of a set of values is known as a factorial. We achieve a factorial solution by starting with the total number of items in the set and multiplying it by each proceeding number of values until we reach one. 

function scrabble(str) {
    if(str.length === 1) {
        return 1;
    }
    return str.length * scrabble(str.slice(1))
}

console.log(scrabble("aeiou"));