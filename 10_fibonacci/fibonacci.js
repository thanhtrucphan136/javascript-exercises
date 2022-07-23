const fibonacci = function(target) {
    if (typeof(target) != 'number'){
        Number(target);
        
    }
    if (target < 0){
        return 'OOPS';
    }
    if (target === 1 || target === 2){
        return 1;
    }
    
    const nums = [1,1];
    let first = 0;
    let second = 1;
    let sum  = 0;
    while (nums.length != target){
        sum = nums[first] + nums[second];
        first +=1;
        second +=1;
        nums.push(sum);
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
