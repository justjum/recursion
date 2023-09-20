

const array1 = [7,3,0,99,2,5,1,-4,8];
console.log(`input = ${array1}`);
let array2 = mergeSort(array1);
console.log(`output = ${array2}`);

function merge(temp1, temp2) {
    let sorted = [];
    console.log(`temp1 ${temp1}, temp 2 ${temp2}`)

        while (temp1.length > 0 && temp2.length > 0) {
            if (temp1[0] > temp2[0]) {
                sorted.push(temp2.shift());
            }
            else {
                sorted.push(temp1.shift());
            }
            
        }


    return sorted.concat(temp1).concat(temp2);
}

function mergeSort(array) {
    if (array.length < 2) {
        console.log(array);
        return array;
    }
    else {
        let temp1 = array.splice(array.length/2);
        let temp2 = array;
        return merge(mergeSort(temp1), mergeSort(temp2));
    }
    
}

