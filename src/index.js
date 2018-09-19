module.exports = function getZerosCount(number) {
  let zeroCnt = 0;

  let numberFloor = Math.floor(number / 5);

  while (numberFloor !== 0) {
    zeroCnt += numberFloor;
    numberFloor = Math.floor(numberFloor / 5);
  }

  return zeroCnt;

}
