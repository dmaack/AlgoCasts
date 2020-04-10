// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow = list.getFirst()
    let fast = list.getFirst()

    while (fast.next && fast.next.next) {
        slow = slow.next // jump by 1
        fast = fast.next.next // jump by 2
    }

    return slow // will be at the midpoint
}

module.exports = midpoint;

// NOTES

// Linked List strategy:
    // set up two pointers, slow and fast
    // for every step of iteration, we are going to advance the slow pointer by 1 element and advance the fast by 2 elements
        // once fast is at the end, slow will be at the midpoint
