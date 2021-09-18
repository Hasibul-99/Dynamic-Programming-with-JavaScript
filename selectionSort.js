const selectionSort = (array) => {

    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for(let j = i; j < array.length; j++ ) {
            if(array[j] < array[min]) {
                min = j;
            }
        };
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

console.log(selectionSort([1,8,6,95,0,1,56,955,2,852,951,1,2,3,4,6,9,8,7,5]));