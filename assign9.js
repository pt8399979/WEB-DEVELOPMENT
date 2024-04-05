numbersArray = [2,3,7,8,10,13,15,18,34,25]


let arrdouble = numbersArray.map(function(ele){
    ele = ele*2
    return ele
})
console.log(arrdouble)


let evenarray = numbersArray.filter(function(ele){
    return ele%2===0
})
console.log(evenarray)



let sum = numbersArray.reduce(function(a , b){
    return a+b
})   
console.log(sum)