// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    // insert a node at the head
    insertFirst(data) {
        const node = new Node(data, this.head)
        this.head = node
    }

    // return the size / length of the LL
    size() {
        let counter = 0
        let node = this.head

        // how to iterate through the linked list
        while(node) {
            counter++
            node = node.next
        }

        return counter
    }

    // get the head / first node
    getFirst() {
        // let node = this.head
        // return node

        return this.getAt(0)
    }

    // get the last node
    getLast() {
        if(!this.head) {
            return null
        }

        let node = this.head

        while(node) {
            if(!node.next) {
                return node
            }

            node = node.next
        }

        // return this.getAt(this.size - 1)
    }

    // empty out the LL of any nodes
    clear() {
        this.head = null
    }

    // removes the head of the LL
    removeFirst() {
        if(!this.head) {
            return
        }

        this.head = this.head.next


    }

    // removes the tail / last node of LL
    removeLast() {
        // check if empty
        if(!this.head) {
            return
        }
        // check if there is one node
        if(!this.head.next) {
            return this.head = null
        }

        let prev = this.head
        let node = this.head.next

        // While there is a next node
        while(node.next) {
            prev = node
            node = node.next
        }

        prev.next = null

    }

    // inserts a node at the end the of a LL
    insertLast(data) {
        const last = this.getLast()

        if(last) {
            // there are some existing nodes in our chain
            last.next = new Node(data)

        } else {
            // The chain is empty
            this.head = new Node(data)

        }
    }


    // Returns node at provided index
    getAt(index) {
        // this if statement is uneccessary because we are using the while loop on this.head, so if there isnt one it will not enter while loop and return null
        if (!this.head) {
            return null
        }

        let counter = 0
        let node = this.head 

        while(node) {
            if (counter === index) {
                return node
            }

            counter++
            node = node.next
        }
        // if you exit the while loop because you suprpassed the end without finding the given index
        return null
    }


    // Remove node at a given index (has many edge cases)
    removeAt(index) {
        if(!this.head) {
            return
        }

        if(index === 0) {
            // if you want to remove the head, just change the point to the head's next
            this.head = this.head.next
            return
        }

        //use getAt to find the previous so we can just move the pointer to the node after the given index because no pointer to a node 'remove' it from the list
        const prev = this.getAt(index - 1)

        // this handles if we are asked to retrieve an index out of bounds of our list
        if(!prev || !prev.next) {
            return 
        }

        prev.next = prev.next.next


    }


    // Insert a node at a provided index
    insertAt(data, index) {
        // inserting data and the first index
        if(!this.head) {
            return this.head = new Node(data)
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }
        
        // gives up the previous node || add an out of bounds node to end of list

        const prev = this.getAt(index - 1) || this.getLast()

        const node = new Node(data, prev.next)
        prev.next = node
    }


    forEach(fn) {
        let node = this.head
        let counter = 0

        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }
    // for for...of
    *[Symbol.iterator]() {
        let node = this.head

        while (node) {
            yield node
            node = node.next
        }
    }

}

module.exports = { Node, LinkedList };
