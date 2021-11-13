const findNextSquare = (num) => {
Number.isInteger(Math.sqrt(num)) ? Math.pow(Math.sqrt(num)+1,2):-1};
console.log(findNextSquare(144));