// const sumAll = (arr) => {
//     let total = 0;
//     arr.forEach(value => {
//         for(let i = 1; i <= value; i++ ) {
//             total += i;
//         }
//     })

//     return total;
// }

// console.log(sumAll([1, 4]));

const sumAll = (arr) => {
    let a = arr[0],
        b = arr[1],
        max = 1,
        min = 1;

    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    };

    // console.log("max", max);
    // console.log("min", min);
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }

    return total;
};

console.log("sumAll([1, 4]) ==>", sumAll([1, 4]));
console.log("sumAll([4, 1]) ==>", sumAll([4, 1]));
console.log("sumAll([5, 10]) ==>", sumAll([5, 10]));
console.log("sumAll([10, 4]) ==>", sumAll([10, 5]));