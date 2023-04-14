class Node {
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail=null;
        this.length =0;
    }

    add(value){
        const node= new Node(value);
        if(!this.head){
            this.head = node;
            this.tail= node;

        }
        else {
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
    }
    remove(value){
        let previous = null;
        let current = this.head;
        while(current){
            if(current.value==value){
                if(previous){
                    previous.next= current.next;
                    if(current===this.tail){
                        this.tail = previous;
                    }
                }
            }
        }
    }
}