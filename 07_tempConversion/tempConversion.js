const ftoc = function(tempInF) {
  tempInC = ((tempInF - 32) / 1.8)
  if (tempInC != 0){
    tempInC = +tempInC.toFixed(1);
  }
  return tempInC;
};

const ctof = function(tempInC) {
  tempInF = +((tempInC*1.8)+32).toFixed(1);
  return tempInF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
