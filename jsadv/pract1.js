const charMap = {
    n:8,
    c:2,
    t:3

  };
  const str = 'tcn';
//defining the string
  const sortedStr = 
//   (str) 
//   {
//     const charMap = {
//         n:8,
//         c:2,
//         t:3
    
//       };

//       let arr=[];
    str.split("").//then splitting
  map(char=>charMap[char])//map method to map each character to its coressponding value in charMap object 
  .sort((a,b)=>b-a)//then it sort the array of values in ascending order
  .map(val=>{//mapping each value back to its corresponding character
    for (const [key,value] of Object.entries(charMap)) {
        //iterating using for of loop and return key which is str itself
        
        if(value === val){
            return value;
            
        }
        
    }
});
console.log(sortedStr);

// }

// const str = 'tcn';

 

//   const value2 = sortedStr.split(''); 
