const myNumbers = [19,5,42,2,77 ];

const sumTwoLowwestNum  = (arr) =>{
   arr= arr.sort((a,b) => {
        return a-b;
    });

        let sum = arr[0] + arr[1];
        return sum;

};
console.log(sumTwoLowwestNum(myNumbers));