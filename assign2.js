function string(int1){
    let int2 = int1
    let str = ""
    for(let i = 0; i<int2.length; i++ ){
        if(int1[i]!=" "){
            str+=int2[i]
        }
        else{
            str+="-"
        }
    }
    return str
}

console.log(string("The quick brown fox jumps over the lazy dog"))