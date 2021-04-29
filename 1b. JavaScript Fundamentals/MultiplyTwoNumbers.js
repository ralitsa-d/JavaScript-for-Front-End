function multiplyTwoNumbers(input){
    let NumberN = Number(input[0]);
    let NumberX = Number(input[1]);
    if(NumberX>=NumberN){
        return NumberN*NumberX;
    }
    if(NumberN>NumberX){
        return NumberN/NumberX;
    }
}
console.log(multiplyTwoNumbers(["13", "10"]));