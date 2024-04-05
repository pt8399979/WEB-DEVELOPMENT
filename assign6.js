function sumOfArrPrimes(A) {
    let list = []
    for(let i = 2; i<=A; i++){
        let count=0
        if(i<=3 && i!=1 && i>0){
           
            list.push(i)
        }
        else{
            count = 0;
            for(let j=2; j<i; j++){
                if(i%j==0){
                count++
                }
            }
            if (count==0&&(i>1)){
               
                list.push(i)
            }
        }
    }
    
   
   for(let i = 0; i<list.length; i++){
    console.log(list[i])
   }



}

sumOfArrPrimes(9)