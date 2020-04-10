// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null 
    }


    insert(data) {
        if(data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data) {
            this.left = new Node(data)
        }

        if(data > this.data && this.right) {
            this.right.insert(data)
        } else if ( data > this.data) {
            this.right = new Node(data)
        }
    }


    contains(data) {

        // if the starting node is equal to the given data -- return it
        if( this.data === data) {
            return this
        }

        // if the node we're looking at is less than the data given && verify there is a node to the right -- go right
        if(this.data < data && this.right) {
            // keep going right
            return this.right.contains(data)
        } else if (this.data > data && this.left) {
            return this.left.contains(data)
        }

        return null
    }
}

module.exports = Node;
