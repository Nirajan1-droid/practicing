class Node{
    constructor(value){
        this.value = value;
        this.left= null;
        this.right  = null;
       
    }
}

function insertNode(root,value){
    if(root==null){
        root = new Node(value);
        return root;
    }
    if(root.value>value){
        root.left = insertNode(root.left,value);

    }
    else if(root.value<value){
        root.right = insertNode(root.right,value);
    }

    return root;

}

function inorderTraversal(root,arr){
    if(root == null){
        return ;
    }

    inorderTraversal(root.left,arr);
    arr.push(root.value);
    inorderTraversal(root.right,arr);

}

function binaryTree(arr){
    let root ; 
    for(let i=0;i<arr.length;i++){
        root = insertNode(root,arr[i]);
    }

    let sort = [];
    inorderTraversal(root,sort);

    for(let i=0;i<sort.length;i++){
        arr[i]= sort[i];
    }
    return arr;
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
binaryTree(arr);
console.log(arr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
