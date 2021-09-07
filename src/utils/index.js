const goodOrBad = (likeVar, movie) => {
    if (likeVar === "good") {
        console.log(`I think ${movie} is great!`);
    } else if (likeVar === "bad") {
        console.log(`I think ${movie} is bad`);
    } else {
        console.log("Incorrect Input");
    }
};

module.exports = goodOrBad