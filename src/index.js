module.exports = function getZerosCount(number) {
  var zeroCnt = 0;

  var numberFloor = Math.floor(number/5);  
  
	while (numberFloor !== 0) {
		zeroCnt += numberFloor;
		numberFloor = Math.floor(numberFloor/5);
  }
  
  return zeroCnt;
}
