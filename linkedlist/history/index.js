class LinkedList {

    //this sets the initail state of the linked list
    //it initializes the head and tail pointers to null indicating an empty list and sets the length of the list to 0
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value){
        //this method add adds a new node to the end of the linked list
        //it takes a value as  input, creates a new node object with the given valye and a null
        //"next" pointer and assigns 
        const node = {value,next:null};
        if(!this.head){//if the node doesnot have the header pointer
//this code block check wheater the list is empty by checking if the head pointer is null
            this.head = node;
            this.tail = node;

        }
        
        else {//if the node has the header pointer then the node is added to the next to the tail of the existed head and that added node tail is the new tail of the list

            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        //incrementing the length of the list by 1 to reflect the addition of the new node
    }

    remove(){
        //it removes the first node in the linked list and return its value
        //it checks if the list is empty by checking if the head pointer is null
        //if it is, the method returns null to indicate that there are no nodes to remove 
        //this return null
        if(!this.head){
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
        //if the list is not empty , the first node in the list is removed 
        //but before that the head of that first node is now updated to the head of the second node
        //then,also the value of the length is decremented
        
    }
}

//creating an instance of the linkedlist class to store the history of the visited pages

const history = new LinkedList();

//add a new page to the history whenever a new page is visited
history.add(2);
history.remove(1);
history.add(28);
history.add(26);
history.add(27);
history.remove(28)
history.add(29);
history.add(22);



let node = history.head;
while(node){
    console.log(node.value);
    node = node.next;

}