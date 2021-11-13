const arr =  [0,0, 0,0,4,0,0];
const uniqueNum = (arr) =>{

    arr = arr.sort((a,b)=>{
        return a-b;

    });
    if(arr[0]===arr[1]){
        return arr[arr.length-1]
    }
    else{
        return arr[0];
    }
}

console.log(uniqueNum(arr));