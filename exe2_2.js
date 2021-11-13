const arr = [1, 0, 1, 1];
const binaryArr = (arr) => {
   return arr.reduce((acc, val) => {
      return (acc << 1) | val;
   });
};
console.log(binaryArr(arr));

const BinaryArray =(arr) =>
{
    arr= arr.reverse();
    let count=0;
    for(let i=0; i< arr.length; i++){
        count += arr[i] * Math.pow(2, i);
    }
    return count;
}
console.log(BinaryArray(arr));