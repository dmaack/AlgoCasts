// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
   constructor(data) {
       this.data = data
       this.children = []
   } 

   // Give some data, create a new node and add it to the current node's 'children' array
   add(data) {
       const node = new Node(data)
       this.children.push(node)
   }

   // Give some data, look at each child of the current node and remove any node with data === data
   remove(data) {
       this.children = this.children.filter(node => {
           return node.data !== data
       })

   }
}

class Tree {
    constructor() {
        this.root = null
    }


    traverseBF(fn) {
        const arr = [this.root]

        // while there are still node to iterate through
        while(arr.length) {
            // takes out the first element of the array
            const node = arr.shift()

            // take every element of the array here and push them into the children array. Making sure to just push the elements and not a new array 
            arr.push(...node.children)
            // this is same as about
            // for (let child of node.children) {
            //     arr.push(child)
            // }

            fn(node)
        }

    }


    traverseDF(fn) {
        const arr = [this.root]

        while(arr.length) {
            const node = arr.shift()
            // unshift takes an element and adds it to the front of array
            arr.unshift(...node.children)
            fn(node)
        }
    }

}

module.exports = { Tree, Node };
