const sumAll = function(firstNum, lastNum){
    let sum = 0;
    if (firstNum < 0 || lastNum < 0){
        return "ERROR";
    }
    if ((typeof firstNum != "number") || (typeof lastNum != "number")){
        return "ERROR";
    }
    if (firstNum < lastNum){
        for(let i = firstNum; i <= lastNum; i++){
            sum += i;
        }
    }else{
        for(let i = lastNum; i <= firstNum; i++){
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
