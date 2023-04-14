
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.extra = null;
    }
  }
  
  function insertNode(root, value) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
  
    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else if (value >= root.value) {
      root.right = insertNode(root.right, value);
    }
    return root;
  }
  
  function inorderTraversal(root, arr) {
    if (root == null) {
      return;
    }
  
    // inorderTraversal(root.extra, arr);
    

        inorderTraversal(root.left, arr);
        
  

    arr.push(root.value);
    inorderTraversal(root.right, arr);
  }
  function trav(root,earr){
    if(root ==null){
        return;
    }

    inorderTraversal(root.extra,earr)
  }
  function binaryTreeSort(arr) {
    let root = null;
    for (let i = 0; i < arr.length; i++) {
      root = insertNode(root, arr[i]);
    }
  
    let sortedArr = [];
    inorderTraversal(root, sortedArr);
  
    for (let i = 0; i < sortedArr.length; i++) {
      arr[i] = sortedArr[i];
    }
  return arr;

    
  }
  
//   const sortedStr = str.split('').map(char=>charMap[char]).sort()
//   let arr = ["n","i","r","a","j","a","n"];

//   binaryTreeSort(arr);

//   console.log(arr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    
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

          return { kad:key,vad:value };
          
      }
      
  }
});
  return arr;
}
// let all = sortedStr();
let str = 'nirajan';
const res= sortedStr(str);
const vadarray = res.map(res=>res.vad);
console.log(vadarray);
const kadarray = res.map(res=>res.kad)
console.log("keys",kadarray);
// const binres = binaryTreeSort(res.value);
// console.log(binres);
// let stringvalue = str.map()

//   const value2 = sortedStr.split(''); 
