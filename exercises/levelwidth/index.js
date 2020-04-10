// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0]
    const arr = [root, 'stopper']

    // as long as there is more than one item in here keep looping
    while(arr.length > 1) {
        // pull out first element
        const node = arr.shift()

        // if we hit the stopper
        if(node === 'stopper') {
            // push another counter element onto counters array
            counters.push(0)
            arr.push('stopper')
        } else {
            // else if we are at a node, then push all it's children to the array holder
            arr.push(...node.children)
            counters[counters.length - 1]++
        }
    }
    return counters

}

module.exports = levelWidth;
