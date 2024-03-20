// This class describes each node of the linked list
class ListNode{
    constructor(value){
        this.value = value; 
        this.nextNode = undefined; 
    }
}

// This is the linked list class which helps us to traverse through the nodes
class LinkedList{
    constructor(){
        this.firstNode = undefined;
        this.size = 0; 
    }

    // This method enables us to get a node by its index
    get(index){
        if(index < this.size){
            let currentIndex = 0;
            let currentNode = this.firstNode;
            while(currentIndex < index){
                currentNode = currentNode.nextNode; 
                currentIndex++;
            }
            return currentNode;
        }

        // We throw an error if the index is not found in the list
        throw new Error("Index not found");
        
    }

    // This method enables us to search for the index of a value in the linked list
    search(value){
        let currentIndex = 0; 
        let currentNode = this.firstNode; 
        while(currentNode){
            if(currentNode.value == value){
                return currentIndex; 
            }
            currentNode = currentNode.nextNode;
            currentIndex++; 
        }
        return -1; 
    }

    // This method enables us to delete a node by it's index
    delete(index){
        if(index == 0){
            this.firstNode = this.firstNode.nextNode; 
            this.size--;
        }else if(index < this.size){
            let currentIndex = 0;
            let currentNode = this.firstNode;
            while(currentIndex < index - 1){
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            currentNode.nextNode = currentNode.nextNode.nextNode;
            this.size--;
        }else{
            throw new Error("Index not found");
        }
    }

    // This method enables us to insert a value into the linked list
    insert(value, index){
           if(index == this.size){
                this.push(value);
           }
           else if(index == 0){
            const newNode = new ListNode(value);
            newNode.nextNode = this.firstNode; 
            this.firstNode = newNode; 
            this.size++;
            }
             else if(index < this.size){
                let currentIndex = 0;
                let currentNode = this.firstNode; 
                while(currentIndex < index - 1){
                    currentNode = currentNode.nextNode; 
                    currentIndex++;
                }
                const newNode = new ListNode(value);
                newNode.nextNode = currentNode.nextNode;
                currentNode.nextNode = newNode;
                this.size++;
             }
           else{
               throw new Error("Index not found");
           }
    }
    
    // This method enables us to add a new value to the end of the linked list
    push(value){
        if(this.firstNode){
            let currentNode = this.firstNode; 
            let previousNode;
            while(currentNode){
                previousNode = currentNode; 
                currentNode = currentNode.nextNode;
            }
            previousNode.nextNode = new ListNode(value);
        }
        else{
            this.firstNode = new ListNode(value);
        }

        this.size++;
         
    }

    // prints the list
    display(){
        let stringRep = '[';
        let currentNode = this.firstNode;
        while(currentNode){
            stringRep += currentNode.value + ', ';
            currentNode = currentNode.nextNode; 
        }
        console.log(stringRep.slice(0, stringRep.length - 2) + ']');   
      }

      // This method applies a function to each node of the linked list
      forEach(func){
        // If the input function has one parameter then the nodes will be ... 
        // ... passed to that parameter during traversal
        // If the input function has two parameters then the nodes will be passed ...
        // ... to the first parameter and their corresponsing index will be passed to the second parameter

        let currentNode = this.firstNode; 
        let currentIndex = 0;
        while(currentNode){
            if(func.length > 1){
                func(currentNode, currentIndex);
            }else{
                func(currentNode); 
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
      }

    // This methods enables us to know if the linked list is empty or not
    isEmpty(){
        return this.size == 0;
    }
}


const list = new LinkedList(); 

