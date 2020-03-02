// SINGLY LINKED LIST

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let first = new Node(value);
        if(this.head === null){
            this.head = first;
            this.tail = first;
        } else {
            this.tail.next = first;
            this.tail = first;
        }
        this.length++;
        return this;
    }
    traverse(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    pop(){
        if(!this.head){
            return undefined;
        } else {
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            newTail.next = null; //this.tail.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current.val;
        }
    }
    shift(){
        if(!this.head){
            return undefined;
        } else {
            let shiftValue = this.head;
            this.head = this.head.next;
            shiftValue.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return shiftValue;
        }
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        } else {
            let current = this.head;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            return current;
        }
    }
    set(value, index){
        let setNode = this.get(index);
        if(!setNode){
            return false;
        } else {
            setNode.val = value;
            return true;
        }
    }
    insert(value, index){
        if(index < 0 || index > this.length){
            return false;
        } else if(index === this.length){
            this.push(value);
            return true;
        } else if(index === 0){
            this.unshift(value);
            return true;
        } else {
            let newNode = new Node(value);
            let prevNode = this.get(index - 1);
            let temp = prevNode.next;
            prevNode.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return false;
        } else if(index === 0){
            return !!this.shift();
        } else if(index === this.length - 1){
            this.pop();
            return true;
        } else {
            let prevNode = this.get(index - 1);
            let temp = prevNode.next;
            prevNode.next = temp.next;
            temp.next = null;
            this.length--;
            return true;
        }
    }
    reverse(){
        if(this.length <= 1){
            return this;
        } else {
            let prevNode = this.head;
            let current = prevNode.next;
            let nextNode = current.next;
            prevNode.next = null;
            while(current !== null){
                current.next = prevNode;
                prevNode = current;
                current = nextNode;
                if(nextNode !== null){
                    nextNode = nextNode.next;
                } else {
                    nextNode = null;
                }
            }
            this.tail = this.head;
            this.head = prevNode;
            return this.traverse();
        }
    }
}
// let list = new SinglyLinkedList();
// list.push(3);
// list.traverse();





// DOUBLY LINKED LIST

class Node {
    constructor(val){
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        let popedElement = this.tail;
        if(!this.tail){
            return false;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedElement.prev;
            popedElement.prev.next = null;
            popedElement.prev = null;
        }
        this.length--;
        return popedElement;
    }
    shift(){
        let shiftElement = this.head;
        if(!this.head){
            return undefined;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftElement.next;
            shiftElement.next.prev = null;
            shiftElement.next = null;
        }
        this.length--;
        return shiftElement;
    }
    unshift(value){
        let unshiftElement = new Node(value);
        if(!this.head){
            this.head = unshiftElement;
            this.tail = unshiftElement;
        } else {
            this.head.prev = unshiftElement;
            unshiftElement.next = this.head;
            this.head = unshiftElement;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        } else if(index < Math.floor(this.length / 2)){
            let current = this.head;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            return current;
        } else {
            let current = this.tail;
            for(let i = this.length - 1; i > index; i--){
                current = current.prev;
            }
            return current;
        }
    }
    set(value, index){
        if(index < 0 || index >= this.length){
            return false;
        } else {
            let setNode = this.get(index);
            setNode.val = value;
            return true;
        }
    }
    insert(value, index){
        let newNode = new Node(value);
        if(index < 0 || index > this.length){
            return false;
        } else if(index === 0){
            this.unshift(value);
            return true;
        } else if(index === this.length){
            this.push(value);
            return true;
        } else {
            let prevNode = this.get(index - 1);
            if(!prevNode.next){ 
            newNode.next = prevNode.next;
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            this.length++;
            return true;
            }
        }
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        } else if(index === 0){
            return this.shift();
        } else if(index === this.length - 1){
            return this.pop();
        } else {
            let removeNode = this.get(index);
            removeNode.next.prev = removeNode.prev;
            removeNode.prev.next = removeNode.next;
            removeNode.next = null;
            removeNode.prev = null;
            this.length--;
            return removeNode;
        }
    }
    traverse(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
// let doubly = new DoublyLinkedList();
// doubly.push(44);
// doubly.traverse();





// STACK IMPLEMENTATION (this can be implemented in different ways)
// using array but shift and unshift method are inefficient as this inserts and removes from first so we need to readjust the other elements
// using singly or doubly linked list
// in doubly shift unshift push pop all are possible unlike singly where only shift and unshift is possible

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.length;
    }
    pop(){
        if(!this.head){
            return null;
        } else {
            let shiftValue = this.head;
            this.head = this.head.next;
            shiftValue.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return shiftValue;
        }
    }
}





// QUENE IMPLEMENTATION (this can be implemented in different ways)
// using array but push - shift and unshift - pop method are inefficient as this inserts at last and removes from first or vice versa so we need to readjust the other elements
// using singly or doubly linked list
// in doubly unshift - pop and push - shift both are efficient unlike singly where only shift - push is efficient

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Quene {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enquene(value){
        let first = new Node(value);
        if(this.head === null){
            this.head = first;
            this.tail = first;
        } else {
            this.tail.next = first;
            this.tail = first;
        }
        return ++this.length;
    }
    dequene(){
        if(!this.head){
            return null;
        } else {
            let shiftValue = this.head;
            this.head = this.head.next;
            shiftValue.next = null;
            this.length--;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return shiftValue;
        }
    }
}
// let qop = new Quene();





// BINARY SEARCH TREE (BST)

// using recursion

class Node {
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode =  new Node(value);
        function helperFunction(current){
            if(current.val > newNode.val){
                if(!current.left){
                    current.left = newNode;
                    return current.left;
                } else {
                    return helperFunction(current.left);
                }
                return current.left;
            } else if(current.val < newNode.val){
                if(!current.right){
                    current.right = newNode;
                    return current.right;
                } else {
                    return helperFunction(current.right);
                }
            } else {
                return null;
            }
        }
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            return helperFunction(current);
        }
    }
    find(searchedValue){
        if(!this.root){
            return false;
        } else {
            let current = this.root;
            return helperFunction(current);
        }
        function helperFunction(current){
            if(!current){
                return false;
            }
            if(current.val > searchedValue){
                current = current.left;
                return helperFunction(current);
            } else if(current.val < searchedValue){
                current = current.right;
                return helperFunction(current);
            } else {
                return true;
            }
        }
    }
	delete(removeValue){
		if(!this.root){
			return false;
		}
		let current = this.root;
		let prev = current;
		while(current){
			if(current.val > removeValue){
				prev = current;
				current = current.left;
			} else if(current.val < removeValue){
				prev = current;
				current = current.right;
			} else {
				if(prev.val > removeValue){
					prev.left = null;
				} else if(prev.val < removeValue){
					prev.right = null;
				} else {
					this.root.left = null;
					this.root.right = null;
					this.root = null;
				}
				return true;
			}
		}
		return false;
	}
}
// let bst = new BinarySearchTree();

// using iterative method

class Node {
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
        this.length = 0;
    }
    insert(value){
        let newNode =  new Node(value);
        if(this.root === null){
            this.root = newNode;
            this.length++;
            return true;
        } else {
            let current = this.root;
            while(true){
                if(current.val > newNode.val){
                    if(!current.left){
                        current.left = newNode;
                        this.length++;
                        return true;
                    } else {
                        current = current.left;
                    }
                } else if(current.val < newNode.val){
                    if(!current.right){
                        current.right = newNode;
                        this.length++;
                        return true;
                    } else {
                        current = current.right;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    find(searchedValue){
        if(!this.root){
            return false;
        }
        let current = this.root;
        while(current){
            if(current.val > searchedValue){
                current = current.left;
            } else if(current.val < searchedValue){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    delete(removeValue){
        if(!this.root){
            return false;
        }
        let current = this.root;
        let prev = current;
        while(current){
            if(current.val > removeValue){
                prev = current;
                current = current.left;
            } else if(current.val < removeValue){
                prev = current;
                current = current.right;
            } else {
                if(prev.val > removeValue){
                    prev.left = null;
                } else if(prev.val < removeValue){
                    prev.right = null;
                } else {
                    this.root.left = null;
                    this.root.right = null;
                    this.root = null;
                }
                return true;
            }
        }
        return false;
    }
}
// let bst = new BinarySearchTree();





// TREE TRAVERSAL METHOD

class Node {
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
class Quene {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enquene(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.right = newNode;
            newNode.left = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    dequene(){
        let shiftElement = this.head;
        if(!this.head){
            return undefined;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftElement.right;
            shiftElement.right.left = null;
            shiftElement.right = null;
        }
        this.length--;
        return shiftElement.val;
    }
}
class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.right = newNode;
            newNode.left = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        let popedElement = this.tail;
        if(!this.tail){
            return false;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedElement.left;
            popedElement.left.right = null;
            popedElement.left = null;
        }
        this.length--;
        return popedElement.val;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
        this.length = 0;
    }
    insert(value){
        let newNode =  new Node(value);
        if(this.root === null){
            this.root = newNode;
            this.length++;
            return true;
        } else {
            let current = this.root;
            while(true){
                if(current.val > newNode.val){
                    if(!current.left){
                        current.left = newNode;
                        this.length++;
                        return true;
                    } else {
                        current = current.left;
                    }
                } else if(current.val < newNode.val){
                    if(!current.right){
                        current.right = newNode;
                        this.length++;
                        return true;
                    } else {
                        current = current.right;
                    }
                } else {
                    return false;
                }
            }
        }
    }
    find(searchedValue){
        if(!this.root){
            return false;
        }
        let current = this.root;
        while(current){
            if(current.val > searchedValue){
                current = current.left;
            } else if(current.val < searchedValue){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    delete(removeValue){
        if(!this.root){
            return false;
        }
        let current = this.root;
        let prev = current;
        while(current){
            if(current.val > removeValue){
                prev = current;
                current = current.left;
            } else if(current.val < removeValue){
                prev = current;
                current = current.right;
            } else {
                if(prev.val > removeValue){
                    prev.left = null;
                } else if(prev.val < removeValue){
                    prev.right = null;
                } else {
                    this.root.left = null;
                    this.root.right = null;
                    this.root = null;
                }
                return true;
            }
        }
        return false;
    }

    // RECURSIVE SOLUTIONS

    // BFS(){
    //     let quene = new Quene();
    //     let visited = [];
    //     if(!this.root){
    //         return visited;
    //     }
    //     let currentNode = this.root;
    //     quene.enquene(currentNode);
    //     return helperFunction();
    //     function helperFunction(){
    //         if(quene.length === 0){
    //             return visited;
    //         }
    //         currentNode = quene.dequene();
    //         visited.push(currentNode.val);
    //         if(currentNode.left){
    //             quene.enquene(currentNode.left);
    //         }
    //         if(currentNode.right){
    //             quene.enquene(currentNode.right);
    //         }
    //         return helperFunction();
    //     }
    // }

    // DFSPreorder(){
    //     let visited = [];
    //     let current = this.root;
    //     helperFunction(current);
    //     return visited;
    //     function helperFunction(node){
    //         visited.push(node.val);
    //         if(node.left){
    //             helperFunction(node.left);
    //         }
    //         if(node.right){
    //             helperFunction(node.right);
    //         }
    //     }
    // }

    // DFSPostorder(){
    //     let visited = [];
    //     let current = this.root;
    //     helperFunction(current);
    //     return visited;
    //     function helperFunction(node){
    //         if(node.left){
    //             helperFunction(node.left);
    //         }
    //         if(node.right){
    //             helperFunction(node.right);
    //         }
    //         visited.push(node.val);
    //     }
    // }

    // DFSInorder(){
    //     let visited = [];
    //     let current = this.root;
    //     helperFunction(current);
    //     return visited;
    //     function helperFunction(node){
    //         if(node.left){
    //             helperFunction(node.left);
    //         }
    //         visited.push(node.val);
    //         if(node.right){
    //             helperFunction(node.right);
    //         }
    //     }
    // }

    // ITERATIVE SOLUTIONS

    BFS(){
        let quene = new Quene();
        let visited = [];
        if(!this.root){
            return visited;
        }
        let currentNode = this.root;
        quene.enquene(currentNode);
        while(quene.length){
            currentNode = quene.dequene();
            visited.push(currentNode.val);
            if(currentNode.left){
                quene.enquene(currentNode.left);
            }
            if(currentNode.right){
                quene.enquene(currentNode.right);
            }
        }
        return visited;
    }

    DFSPreorder(){
        let visited = [];
        let stack = new Stack();
        if(!this.root){
            return visited;
        }
        let currentNode = this.root;
        stack.push(currentNode);
        while(stack.length){
            currentNode = stack.pop();
            visited.push(currentNode.val);
            if(currentNode.right){
                stack.push(currentNode.right);
            }
            if(currentNode.left){
                stack.push(currentNode.left);
            }
        }
        return visited;
    }

    DFSPostorder(){
        let stk1 = new Stack();
        let stk2 = new Stack();
        let arr = [];
        let current = this.root;
        if(!current){
            return arr;
        }
        stk1.push(current);
        while(stk1.length){
            current = stk1.pop();
            stk2.push(current);
            if(current.left){
                stk1.push(current.left);
            }
            if(current.right){
                stk1.push(current.right);
            }
        }
        while(stk2.length){
            arr.push(stk2.pop().val);
        }
        return arr;
    }

    DFSInorder(){
        let stk = new Stack();
        let arr = [];
        let current = this.root;
        if(!current){
            return arr;
        }
        while(current){
            stk.push(current);
            current = current.left;
        }
        let root;
        while(stk.length){
            root = stk.pop();
            arr.push(root.val);
            if(root.right){
                stk.push(root.right);
            }
        }
        return arr;
    }

}
// let bst = new BinarySearchTree();




// BINARY HEAP 

// MAX HEAP

class Heap {
	constructor(){
		this.values = [];
	}
	insert(value){
		this.values.push(value);
		this.bubbleUp();
		return this.values;
	}
	bubbleUp(){
		let index = this.values.length - 1;
		while(true){
			let parentNode = Math.floor((index - 1) / 2);
			if(this.values[index] > this.values[parentNode]){
				let temp = this.values[index];
				this.values[index] = this.values[parentNode];
				this.values[parentNode] = temp;
				index = parentNode;
				if(index === 0){
					break;
				}
			} else {
				break;
			}
		}
	}
	remove(){
		this.swapParent(0, this.values.length - 1);
		this.values.pop();
		let index = 0;
		while(true){
			let left = (index * 2) + 1;
			let right = (index * 2) + 2;
			if(left >= this.values.length){
				break;
			}
			if(right >= this.values.length && this.values[index] < this.values[left]){
				this.swapParent(index, left);
			}
			if(this.values[left] > this.values[right] && this.values[index] < this.values[left]){
				index = this.swapParent(index, left);
			} else if(this.values[left] < this.values[right] && this.values[index] < this.values[right]){
				index = this.swapParent(index, right);
			} else {
				break;
			}
		}
		return this.values;
	}
	swapParent(parent, child){
			let temp = this.values[parent];
			this.values[parent] = this.values[child];
			this.values[child] = temp;
			return child;
	}
}
// let maxHeap = new Heap();





// PRIORITY QUENE

class Node {
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}
class PriorityQuene {
	constructor(){
		this.values = [];
	}
	enquene(value, pr){
		let newNode = new Node(value, pr);
		this.values.push(newNode);
		if(this.values.length > 1){
			this.bubbleUp();
		}
		return this.values;
	}
	bubbleUp(){
		let index = this.values.length - 1;
		let current = this.values[index];
		while(true){
			let parentNode = Math.floor((index - 1) / 2);
			let parent = this.values[parentNode];
			if(current.priority < parent.priority){
				let temp = this.values[index];
				this.values[index] = this.values[parentNode];
				this.values[parentNode] = temp;
				index = parentNode;
				if(index === 0){
					break;
				}
			} else {
				break;
			}
		}
	}
	dequene(){	//it contains many if statements to reduce it shift the calc left and right to before the end of while loop
		this.swapParent(0, this.values.length - 1);
		this.values.pop();
		let index = 0;
		let currentNode = this.values[index];
		while(true){
			let left = (index * 2) + 1;
			let right = (index * 2) + 2;
			let leftNode = this.values[left];
			let rightNode = this.values[right];
			if(left >= this.values.length){
				break;
			}
			if(right >= this.values.length && currentNode.priority > leftNode.priority){
				this.swapParent(index, left);
			}
			if(right >= this.values.length){
				break;
			}
			if(leftNode.priority < rightNode.priority && currentNode.priority > leftNode.priority){
				index = this.swapParent(index, left);
			} else if(leftNode.priority > rightNode.priority && currentNode.priority > rightNode.priority){
				index = this.swapParent(index, right);
			} else {
				break;
			}
		}
		return this.values;
	}
	swapParent(parent, child){
			let temp = this.values[parent];
			this.values[parent] = this.values[child];
			this.values[child] = temp;
			return child;
	}
}
// let priorityObj = new PriorityQuene();
// priorityObj.enquene("common cold", 5);
// priorityObj.enquene("gunshot wound", 1);
// priorityObj.enquene("high fever", 4);
// priorityObj.enquene("broken arm", 2);
// priorityObj.enquene("glass in foot", 3);





// HASH TABLE

// first hash function

function hash(key, arrlen){
	let total = 0;
	for(let char of key){
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrlen;
	}
	return total;
}
console.log(hash('pink', 10));

// Improving our hash function

function hash(key, arrlen){
	let total = 0;
	let WEIRD_PRIME = 31;
	for(let i = 0; i < Math.min(key.length, 100); i++){
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrlen;
	}
	return total;
}

// Creating hash table class

class HashTable {
	constructor(size = 53){
		this.keyMap = new Array(size);
	}
	hash(key){
		let total = 0;
		let WEIRD_PRIME = 31;
		for(let i = 0; i < Math.min(key.length, 100); i++){
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value){
		let index = this.hash(key);
		if(!this.keyMap[index]){
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return this.keyMap;
	}
	get(key){
		let index = this.hash(key);
		if(!this.keyMap[index]){
			return undefined;
		} else {
			for(let keyVal of this.keyMap[index]){
				if(keyVal[0] === key){
					return keyVal[1];
				}
			}
		}
	}
	keys(){
		let keysArr = [];
		for(let i = 0; i < this.keyMap.length; i++){
			if(this.keyMap[i] !== undefined){
				for(let j = 0; j < this.keyMap[i].length; j++){
					keysArr.push(this.keyMap[i][j][0]);
				}
			}
		}
		return keysArr;
	}
	values(){
		let valuesArr = [];
		for(let i = 0; i < this.keyMap.length; i++){
			if(this.keyMap[i] !== undefined){
				for(let j = 0; j < this.keyMap[i].length; j++){
					if(!valuesArr.includes(this.keyMap[i][j][1])){
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}
// let ht = new HashTable(17);
// ht.set("maroon", "#800000");
// ht.set("yellow", "#FFFF00");
// ht.set("olive", "#808000");
// ht.set("salmon", "#FA8072");
// ht.set("lightcoral", "#F08080");
// ht.set("mediumvioletred", "#C71585");
// ht.set("plum", "#DDA0DD");





// GRAPH 

class Graph {
	constructor(){
		this.adjacencyList = {};
	}
	addVertex(name){
		if(!this.adjacencyList[name]){
			this.adjacencyList[name] = [];
		}
	}
	addEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			if(this.adjacencyList[vertex1].length === 0){
				this.adjacencyList[vertex1].push(vertex2);
				this.adjacencyList[vertex2].push(vertex1);
			} else {
				let i;
				for(i = 0; i < this.adjacencyList[vertex1].length; i++){
					console.log(this.adjacencyList[vertex1][i])
					if(this.adjacencyList[vertex1][i] === vertex2){
						break;
					}
				}
				if(i === this.adjacencyList[vertex1].length){
					this.adjacencyList[vertex1].push(vertex2);
					this.adjacencyList[vertex2].push(vertex1);
				}
			}
		}
		return this.adjacencyList;
	}
	removeEdge(vertex1, vertex2){
		if(!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])){
			return false;
		}
		if(this.adjacencyList[vertex1].length === 0 || this.adjacencyList[vertex2].length === 0){
			return false;
		}
		this.removeVertexFromArr(vertex1, vertex2);
		this.removeVertexFromArr(vertex2, vertex1);
		return true;
	}
	removeVertexFromArr(curVertex, otherVertex){
		let i;
		for(i = 0; i < this.adjacencyList[curVertex].length; i++){
			if(otherVertex === this.adjacencyList[curVertex][i]){
				break;
			}
		}
		if(i !== this.adjacencyList[curVertex].length){
			this.adjacencyList[curVertex].splice(i, 1);
		}
	}
	removeVertex(vertex){
		if(!this.adjacencyList[vertex]){
			return false;
		}
		while(this.adjacencyList[vertex].length){
			let popedElement = this.adjacencyList[vertex].pop();
			let index = this.adjacencyList[popedElement].indexOf(vertex);
			this.adjacencyList[popedElement].splice(index, 1);
		}
		if(!this.adjacencyList[vertex].length){
			delete this.adjacencyList[vertex];
		}
		return this.adjacencyList;
	}
}
// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");





// GRAPH TRAVERSAL

class Node {
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.right = newNode;
            newNode.left = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        let popedElement = this.tail;
        if(!this.tail){
            return false;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedElement.left;
            popedElement.left.right = null;
            popedElement.left = null;
        }
        this.length--;
        return popedElement.val;
    }
}
class Quene {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enquene(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.right = newNode;
            newNode.left = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    dequene(){
        let shiftElement = this.head;
        if(!this.head){
            return undefined;
        } else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftElement.right;
            shiftElement.right.left = null;
            shiftElement.right = null;
        }
        this.length--;
        return shiftElement.val;
    }
}
class Graph {
	constructor(){
		this.adjacencyList = {};
		this.visitedObj = {};
		this.arr = [];
	}
	addVertex(name){
		if(!this.adjacencyList[name]){
			this.adjacencyList[name] = [];
		}
	}
	addEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			if(this.adjacencyList[vertex1].length === 0){
				this.adjacencyList[vertex1].push(vertex2);
				this.adjacencyList[vertex2].push(vertex1);
			} else {
				let i;
				for(i = 0; i < this.adjacencyList[vertex1].length; i++){
					if(this.adjacencyList[vertex1][i] === vertex2){
						break;
					}
				}
				if(i === this.adjacencyList[vertex1].length){
					this.adjacencyList[vertex1].push(vertex2);
					this.adjacencyList[vertex2].push(vertex1);
				}
			}
		}
		return this.adjacencyList;
	}
	removeEdge(vertex1, vertex2){
		if(!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])){
			return false;
		}
		if(this.adjacencyList[vertex1].length === 0 || this.adjacencyList[vertex2].length === 0){
			return false;
		}
		this.removeVertexFromArr(vertex1, vertex2);
		this.removeVertexFromArr(vertex2, vertex1);
		return true;
	}
	removeVertexFromArr(curVertex, otherVertex){
		let i;
		for(i = 0; i < this.adjacencyList[curVertex].length; i++){
			if(otherVertex === this.adjacencyList[curVertex][i]){
				break;
			}
		}
		if(i !== this.adjacencyList[curVertex].length){
			this.adjacencyList[curVertex].splice(i, 1);
		}
	}
	removeVertex(vertex){
		if(!this.adjacencyList[vertex]){
			return false;
		}
		while(this.adjacencyList[vertex].length){
			let popedElement = this.adjacencyList[vertex].pop();
			let index = this.adjacencyList[popedElement].indexOf(vertex);
			this.adjacencyList[popedElement].splice(index, 1);
		}
		if(!this.adjacencyList[vertex].length){
			delete this.adjacencyList[vertex];
		}
		return this.adjacencyList;
	}

	//DFS using recursion

	// DFSRecursion(startNode){
	// 	this.DFSHelperFunction(startNode);
	// 	return this.arr;
	// }
	// DFSHelperFunction(node){
	// 	if(!node){
	// 		return null;
	// 	}
	// 	this.visitedObj[node] = true;
	// 	this.arr.push(node);
	// 	this.adjacencyList[node].forEach(neighbour => {
	// 		if(!this.visitedObj[neighbour]){
	// 			return this.DFSHelperFunction(neighbour);
	// 		}
	// 	})
	// }

	//DFS iterative solution

	DFSIterative(start){
		let stack = new Stack();
		stack.push(start);
		this.visitedObj[start] = true;
		while(stack.length){
			let curVertex = stack.pop();
			this.arr.push(curVertex);
			for(let i = 0; i < this.adjacencyList[curVertex].length; i++){
				if(!this.visitedObj[this.adjacencyList[curVertex][i]]){
					this.visitedObj[this.adjacencyList[curVertex][i]] = true;
					stack.push(this.adjacencyList[curVertex][i]);
				}
			}
		}
		return this.arr;
	}
	BFSIterative(start){
		let quene = new Quene();
		quene.enquene(start);
		this.visitedObj[start] = true;
		while(quene.length){
			let curVertex = quene.dequene();
			this.arr.push(curVertex);
			this.adjacencyList[curVertex].forEach(neighbour => {
				if(!this.visitedObj[neighbour]){
					this.visitedObj[neighbour] = true;
					quene.enquene(neighbour);
				}
			});
		}
		return this.arr;
	}
}
// let g = new Graph();
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")


// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")





// DJIKSTRA'S ALGORITHM

class PriorityQuene {
	constructor(){
		this.values = [];
	}
	enquene(value, priority){
		this.values.push({value, priority});
		this.sort();
	}
	dequene(){
		return this.values.shift();
	}
	sort(){
		this.values.sort((a, b) => a.priority - b.priority);
	}
}
class WeightedGraph {
	constructor(){
		this.adjacencyList = {};
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = [];
		}
	}
	addEdge(vertex1, vertex2, weight){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			if(this.adjacencyList[vertex1].length === 0){
				this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
				this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
			} else {
				let i;
				for(i = 0; i < this.adjacencyList[vertex1].length; i++){
					if(this.adjacencyList[vertex1][i] === vertex2){
						break;
					}
				}
				if(i === this.adjacencyList[vertex1].length){
					this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
					this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
				}
			}
		}
		return this.adjacencyList;
	}
	Dijkstra(start, end){
		const nodes = new PriorityQuene();
		const distances = {}
		const previous = {};
		for(let vertex in this.adjacencyList){
			if(vertex === start){
				distances[vertex] = 0;
				nodes.enquene(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enquene(vertex, Infinity);
			}
			previous[vertex] = null;
		}
	}
}
// var graph = new WeightedGraph()
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A","B", 4);
// graph.addEdge("A","C", 2);
// graph.addEdge("B","E", 3);
// graph.addEdge("C","D", 2);
// graph.addEdge("C","F", 4);
// graph.addEdge("D","E", 3);
// graph.addEdge("D","F", 1);
// graph.addEdge("E","F", 1);


// graph.Dijkstra("A", "E");





// DYNAMIC PROGRAMMING

// Memoization

const fib = (n, memo = []) => {
	if(memo[n] !== undefined){
		return memo[n];
	}
	if(n === 1 || n === 2){
		return 1;
	} else {
		memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
		return memo[n];
	}
}

// Bottom up

const fib = n => {
	if(n === 1 || n === 2){
		return 1;
	} else {
		let arr = [];
		arr[1] = 1;
		arr[2] = 1;
		for(let i = 3; i <= n; i++){
			arr[i] = arr[i - 1] + arr[i - 2];
		}
		return arr[n];
	}
}
// console.log(fib(100));
