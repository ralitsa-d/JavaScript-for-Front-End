function ProductOfThreeNumbers(arr){
    let count = 0;
    for(number of arr)
    {
        if(number<0){
            count++;
        }
        if(number===0){
            return 'Positive';
        }
    }
    if(count%2===0){
        return 'Positive';
    }
    else{
        return 'Negative'
    }
}
console.log(ProductOfThreeNumbers([3,0,-1]))