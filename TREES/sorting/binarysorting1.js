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
    } else if (value > root.value) {
      root.right = insertNode(root.right, value);
    }
    // else if(root.left == root.right || root.right == root.left){
    //     root.extra = insertNode(root.extra,value);
    // }
    else{
        root.extra = insertNode(root.right,value);
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
  