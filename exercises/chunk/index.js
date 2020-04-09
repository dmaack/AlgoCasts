// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // -------- Solution 1
    // Create an empty array to holds chunks called 'chuncked'
    // const chunked = []
    // // For each element in the 'unchunked' array
    // for (let element of array) {
    //     // Retrieve the last element in 'chunked'
    //     const last = chunked[chunked.length - 1]
    //     // If the last element does not exist, or if its length is equal to chunck size
    //     if (!last || last.length === size) {
    //         // push a new chunk into 'chunked' with the current element
    //         chunked.push([element])
    //     } // Else add the current element into the chunk
    //     else {
    //         last.push(element)
    //     }    
        
    // }
    
    // return chunked


    // -------- Solution 2
    // Create an 'empty' chunked array
    const chunked = []
    // Create 'index' start at 0
    let index = 0
    // While 'index is less than array length 
    while (index < array.length) {
        // Push a slice of length 'size' from 'array'
        chunked.push(array.slice(index, index + size))
        // Add 'size' to 'index'
        index += size
    }
        
    return chunked


}

module.exports = chunk;
