const removeFromArray = function(arr, num) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
