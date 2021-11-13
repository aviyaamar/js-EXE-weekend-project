const twoWords = (str) =>{

    str = str.split(' ')

    str =  str.map(index =>{
      return  index[0].replace(index[0],index[0].toUpperCase())
       
    })
    str =  str.join('.')
    return str
}

console.log(twoWords('sam harris'));