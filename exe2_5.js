const summition = (num) =>
{
    if(num< 0){
        return -1;

    }

    let sum =0;
    for(let i=0; i<= num; i++){
       sum += i;
    }
    return sum;
};
console.log(summition(8))