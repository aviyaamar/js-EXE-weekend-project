
const Mumbling = (str) =>{
    str =  str.split('');
     str = str.map((n, index)=>{
        let letter = n.toUpperCase();
        for(let i = 0; i< index; i++){
            letter +=n.toLowerCase();
        }

      return letter;
    });
  str = str.join('-');
  console.log(str);
};

Mumbling('aviya');