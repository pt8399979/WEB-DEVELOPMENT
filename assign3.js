function string(str){
    let str1 = str
    let small_str = ['a','s','d', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'q','w','e','r','t','y','u','i','o','p']
    let count = 0
    for(let i = 0; i<str1.length; i++){
        if(small_str.includes(str1[i])){
            console.log("sbdbjs")
            count=1;
            break
        }
    }
    if(count==1){
        console.log("Yes small char is present")
    }
    else{
        console.log("No small char is present")
    }
}
string("QFBSJKFBFJS")
string("INDLSNFaJSSBKSDF")