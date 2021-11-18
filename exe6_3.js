
const sortStr = (s1, s2) =>{
//    const  str1 = s1.split('').sort((a,b)=> a.localeCompare(b));
//    const str2 =s2.split('').sort(a,b)
 //   return str1;
     let merge = s1 + s2;
     let sort = merge.split('').sort().reduce((acc, curr)=>{
         if(acc.includes(curr)){
             return acc
         }
         else{
             return acc+ curr;
         }
     });
     
     return sort;
}

console.log(sortStr('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

//const descendingToUpperCase = foodsWithUpperCase.slice().sort((a,b)=> b.localeCompare(a));

