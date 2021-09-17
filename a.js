// const calcAvgHeight = (data) => {
//     if (!data) return null;
//     if (!Object.keys(data).length) return null

//     let totalHight = 0;

//     for (var key in data) {
//         if (data.hasOwnProperty(key)) {
//             if (data[key].height) totalHight = totalHight + ( data[key]?.height || 0 );
//         }
//     }

//     return totalHight / Object.keys(data).length;
// }

// var avgHeight = calcAvgHeight({
//     Matt: { height: 174, weight: 69 },
//     Jason: { height: 190, weight: 103 }
// });
// console.log(avgHeight);

function validate(username) {

    console.log(username[0]);
    // Write the code that goes here
    if (!(username.length >= 4)) return false;
    else if (!(username[0].match(/[a-z]/i) && username[username.length] != '_')) return false;
    else if (!(username.indexOf("_"))) return false;
    
    else return true;
}

console.log(validate('Mike_Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username
