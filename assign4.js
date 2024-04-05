function sumOfArrPrimes(A) {
    let sum = 0;
    for(let i = 2; i<=A; i++){
        let count=0
        if(i<=3 && i!=1 && i>0){
           
            sum+=i
        }
        else{
            count = 0;
            for(let j=2; j<i; j++){
                if(i%j==0){
                count++
                }
            }
            if (count==0&&(i>1)){
               
                sum+=i
            }
        }
    }
    console.log(sum)
}

sumOfArrPrimes(9)