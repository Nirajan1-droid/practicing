
  
//defining the string
  function sortedStr(str) 
  {
    const charMap = {
        a:1,
        i:9,
        j:10,
        n:14,
        r:18

    
      };
   const arr =  str.split("").//then splitting
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
    return arr;
}

let str = 'nirajan';
const res= sortedStr(str);
console.log(res);

 

//   const value2 = sortedStr.split(''); 
