const NumOfPeople = [[1,3], [3,2], [5,2]];
const  BusStation = (list) =>{

    let people = 0 ;
    let people2=0;
    for(let Station of list){
        for(let element =0 ; element<Station.length-1;element++){ 
            people += Station[element];
            people2 += Station[element + 1] ;
        }
    }
       let count = people-people2;

    if(count>0){
        return 'The numbers of people sleep in the bus is '+ (count);
    }
    count = 0;
   return count;
};
console.log(BusStation(NumOfPeople));
