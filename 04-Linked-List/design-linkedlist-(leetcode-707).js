// Creates a constructor function named Node. 
function Node(val) {
    this.val = val;      // data
    this.next = null;    // pointer to next node
}

// A constructor function for creating linked lists.
var MyLinkedList = function () {
    this.head = null;    // first node
    this.size = 0;       // number of nodes
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }
    return curr.val

};

/** 
 * @param {number} val
 * @return {void}
 * - Adding the new node at the beginning of the list and making it the new head.
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 * - Adding the new node at the end of the list.
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (this.head == null) {
        this.head = newNode
    } else {
        // Loop Until you reach the last node . If the List is not empty
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 * - Adding the new node at the specified index In the Linked List
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if(index < 0 || index > this.size) return;

    let newNode = new Node(val);

    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    else if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 * - Deleting the node at the specified index in the Linked List
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if(index < 0 || index >= this.size) return;

    if(index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for(let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */