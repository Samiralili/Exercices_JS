function findUniqNumber(A) {
    return A.filter(function(value) {
        return A.indexOf(value) === A.lastIndexOf(value);
    })[0] || -1;
}

var A = [30, 12, 1, 1, 6, 12, 10, 10, 1, 16, 30, 12, 6, 1];
console.log(findUniqNumber(A));