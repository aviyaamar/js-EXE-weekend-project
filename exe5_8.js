const word = 'hi,my name is aviya';
const shortestWords = (str) =>{

    str = str.split(' ');

  return  str.reduce((a,word) =>{
       return  a < word.length ? word.length: a;
    },str[0].length);

};

console.log(shortestWords(word));