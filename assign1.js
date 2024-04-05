

function identifyPrime(num) {
    
    let count=0
    
    if(num<=3 && num!=1 && num>0){
        console.log("Yes")
    }
    else{
        count = 0;
        for(let i=2; i<num; i++){
            if(num%i==0){
                count++
            }
        }
        if (count==0){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}

identifyPrime(6)