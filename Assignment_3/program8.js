console.log(digitsum(456));

function digitsum(x){
    let sum = 0;
    while(x > 0){
        let rem = x%10;
        sum += rem;
        x = Math.floor(x/10);
    }

    if(sum > 9) return digitsum(sum);
    else return sum;
}