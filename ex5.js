function getMiddle(input_text) {
    var result;
    var position;
    var length;

    if (input_text.length % 2 == 1) {
        position = input_text.length / 2;
        length = 1;
    } else {
        position = input_text.length / 2 - 1;
        length = 2;
    }
    result = input_text.substring(position, position + length)
    return (result);
}
console.log(getMiddle("samir"));