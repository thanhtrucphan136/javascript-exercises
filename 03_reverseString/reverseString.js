const reverseString = function(str) {
    let reverseStr = "";
    let length = str.length;
    for (let i = length - 1; i > -1; i--){
        reverseStr += str[i];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
