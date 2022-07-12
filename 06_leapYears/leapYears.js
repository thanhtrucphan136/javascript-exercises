const leapYears = function(year) {
    result = true;
    if (year % 4 === 0){
        if (year % 100 === 0){
            result = false;
            if (year % 400 === 0){
                result = true;
            }
        }
    }else{
        result = false;
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
