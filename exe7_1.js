const arrFilter =[1,23,45,44,67,68,69,100, 103, 17,2,4,5,6,10];
const filter = (arr) =>{
    let filerArr =[];
    for(let i = 0; i< arr.length; i++ ){
    if(arr[i]%2 ===1 ){
        filerArr.push(arr[i]);
    }
}
    return filerArr;
};

console.log(filter(arrFilter));

const mapFunc = (arr) =>{
    let mapArr = []
    for(let i = 0 ; i< arr.length; i++){
        mapArr.push(arr[i]*4);
    }
    return mapArr;
}
console.log(mapFunc(arrFilter));

const forEachFun = (arr) =>{
    let forEachArr = []
    for(let i = 0 ; i< arr.length; i++){
        forEachArr.push(i*i)
    }
    return forEachArr;
} 
console.log(forEachFun(arrFilter));