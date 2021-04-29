function setValues(arr){
    let arrLength = Number(arr[0]);
    let array = new Array(arrLength).fill(0);
    for(let i=1; i<arr.length; i++){
        let tokens = arr[i].split(' ');
        let index = tokens[0];
        let value = tokens[2];
        array[index] = value;
    }
    for(number of array){
        console.log(number);
    }
}

setValues([3, "0 - 3", "1 - -1", "2 - 5"])