// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair='') {
    if (n === row) {
        return
    }
    
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if(stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps(n, row, stair)
}

module.exports = steps;


// --------- Solution 1 (iterative)
// from 0 to n (iterate through rows)
    // Create an empty string 'stair'
    // from 0 to n (iterate through columns)
        // If the current column is equal to or less than the current row
            // Add a '#' to 'stair'
        // Else 
            // Add a space to 'stair'
    // console log stair
    
    // function steps(n) {
    //     for (let row = 0; row < n; row ++) {
    //         let stair = ''
    
    //         for (let col = 0; col < n; col++) {
    //             if(col <= row) {
    //                 stair += '#'
    //             } else {
    //                 stair += ' '
    //             }
    //         }
    //         console.log(stair)
    //     }
    // }

    // --------- Solution 2 (recursion)
    // if (row === n) then we have hit the end of our problem
    // if stair string has a lnegth === n then are at the end of a row
    // If the length of the stair string is less than or equal to the row number we're working on, we add a #, otherwise add a space

    // function steps(n, row=0, stair='') {
    //     if (n === row) {
    //         return
    //     }
        
    //     if (n === stair.length) {
    //         console.log(stair)
    //         return steps(n, row + 1)
    //     }
    
    //     if(stair.length <= row) {
    //         stair += '#'
    //     } else {
    //         stair += ' '
    //     }
    //     steps(n, row, stair)
    // }


    // ----------- Recursion Tips
        // Firgure out the bare minimum pieces of information to represent your problem
        // Give reasonable defaults to the bare minimum pieces of info
        // Check the base case, Is there any work left to do? If not, return
        // Do some work, Call your function again, make sure the arguments have changed in some fashion