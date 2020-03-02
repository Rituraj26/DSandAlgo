//SINGLY LINKED LIST

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null;      
//     }
// }
// class SinglyLinkedList{
    
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
    
//     push(value){
// 		let newNode = new Node(value);
// 		if(!this.head){
// 			this.head = newNode;
// 			this.tail = newNode;
// 		} else {
// 			this.tail.next = newNode;
// 			this.tail = newNode;
// 		}
// 		this.length++;
// 		return this;
// 	}
// 	pop(){
// 		if(!this.head){
// 			return undefined;
// 		} else if(this.head === this.tail){
// 			this.head = null;
// 			this.tail = null;
// 			this.length--;
// 		} else {
// 			let curr = this.head;
// 			let prev = null;
// 			while(curr.next){
// 				prev = curr;
// 				curr = curr.next;
// 			}
// 			prev.next = null;
// 			this.tail = prev;
// 			this.length--;
// 			return curr;
// 		}
// 	}
// 	get(index){
// 		if(index < 0 || index >= this.length){
// 			return null;
// 		}
// 		let curr = this.head;
// 		for(let i = 0; i < index; i++){
// 			curr = curr.next;
// 		}
// 		return curr;
// 	}
// 	insert(index, value){
// 		let newNode = new Node(value);
// 		if(index < 0 || index > this.length){
// 			return false;
// 		} else if(index === this.length){
// 			this.push(value);
// 			return true;
// 		}else if(index === 0){
// 			if(!this.head){
// 				this.head = newNode;
// 				this.tail = newNode;
// 			} else {
// 				newNode.next = this.head;
// 				this.head = newNode;
// 			}
// 		} else {
// 			let prev = this.get(index - 1);
// 			newNode.next = prev.next;
// 			prev.next = newNode;
// 		}
// 		this.length++;
// 		return true;
// 	}
// 	rotate(index){
// 		if(index < 1 || index > this.length){
// 			return false;
// 		} else {
// 			let prev = this.get(index - 1);
// 			let temp = this.head;
// 			this.head = prev.next;
// 			this.tail.next = temp;
// 			this.tail = prev;
// 			return true;
// 		}
// 	}
// 	set(index, value){
// 		if(index < 0 || index >= this.length){
// 			return false;
// 		} else {
// 			let curr = this.get(index);
// 			curr.val = value;
// 			return true;
// 		}
// 	}
// }
// let sll = new SinglyLinkedList();
// sll.push(33);
// sll.push(54);
// sll.push(12);
// sll.push(89);
// sll.push(27);
// sll.get(1);
// sll.insert(2, 100);	
// sll.rotate(3);	//33,54,100,12,89,27 -> 12,89,27,33,54,100
// sll.set(0, 11);





//DIVIDE AND CONQUER

//count no of zeroes

//first method

// const countZeroes = arr => {
// 	let count = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		if(!arr[i])
// 		{
// 			count++;
// 		}
// 	}
// 	return count;
// }

//using divide and conquer method

const countZeroes = arr => {
	let left = 0, right = arr.length - 1, mid, count;
	while(left < right){
		mid = Math.floor((left + right) / 2);
		if(arr[mid] === 1){
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	if(arr[left] === 1){
		count = arr.length - 1 - left;
	} else {
		count = arr.length - left;
	}
	return count;
}

console.log(countZeroes([0]));