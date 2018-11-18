function maxEtMin(nbr) {
    nbr = nbr.split(" ");
    return Math.max.apply(null, nbr) + " " + Math.min.apply(null, nbr)
}

console.log(maxEtMin("10 6 66 3 1"));