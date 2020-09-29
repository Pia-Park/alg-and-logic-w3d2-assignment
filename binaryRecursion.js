

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24]


const binaryRecursion = function(arr, target) {

    let midIndex = Math.floor(arr.length / 2); //find a middle Index 

    if(target === arr[midIndex]){ 
        //if target is arr[midIndex], just return midIndex.
        return arr[midIndex];
    } else if(target < arr[midIndex]){ //if target is lowest than midIndex
        return binaryRecursion(arr.slice(0, midIndex), target); 
        // use a slice(make(? or define?) a new arr), blow out the highest part than midIndex, 
        // and turn the binarySearch again and again by leaving only the left part.  
    } else if(target > arr[midIndex]){
        return binaryRecursion(arr.slice(midIndex + 1), target);
        //blow out the lowest part than midIndex, and turn the binarySearch again and again by leaving only the right part.  
    }
    
};




// console.log(binaryRecursion(testArray, 19));
// console.log(binaryRecursion(testArray, 12));



// const binaryRecursion = function(arr, target) {

//     let midIndex = Math.floor(arr.length / 2); //find a middle Index 
//     // let midElement = arr[midIndex]; //difine the middle index element 

//     if(target < arr[midIndex] && arr.length > 1){
//         return binaryRecursion(arr.splice(0, arr[midIndex]), target);
//     } else if(target > arr[midIndex] && arr.length > 1){
//         return binaryRecursion(arr.splice(arr[midIndex], arr.length), target);
//     } else {
//         return false;
//     }
    
// };