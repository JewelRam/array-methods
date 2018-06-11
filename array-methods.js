const Planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const cookIt = function (planet) {
    const planetEl = document.getElementById("planets");
    const para = document.createElement("p"); 
    para.textContent= `${planet}`
    planetEl.appendChild(para);
}

// Execute the cookIt function for each item in the array
Planets.forEach(cookIt)

//Use the map method to create a new array where the
// first letter of each planet is capitalized. Use the
//`toUpperCase()` method on strings.
const stuff = Planets.map(function (planet) {
    switch (planet) {
        case "mercury":
            return "Mercury"
            break
        case "venus":
            return "Venus"
            break
        case "earth":
            return "Earth"
            break
        case "mars":
            return "Mars"
            break
        case "jupiter":
            return "Jupiter"
            break
        case "saturn":
            return "Saturn"
            break
        case "uranus":
            return "Uranus"
            break
        case "pluto":
            return "Pluto"
            break
    }
})
// Use the filter method to create a new array that
//  contains planets with the letter 'e'. Use the `includes()`
//  method on strings.

const planetsWithE = Planets.filter(planet => {
    const hasE = planet.includes("e");
    return hasE
})

console.log(planetsWithE)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const allWords = words.reduce(
    (currentTotal, next) => currentTotal + " " + next
)
console.log(allWords);