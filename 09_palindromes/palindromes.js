const palindromes = function (str) {
let newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
let l = 0;
let r = newStr.length-1;
while (l < r){
    if (newStr.charAt(l) != newStr.charAt(r)){
        return false;
    }else{
        l += 1;
        r -=1;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
