let name = ["Rice", "Dal", "Salt"]
let quantity = [2, 3, 1]
let price = [60, 50, 20]
let list = []
for(let i=0; i<price.length; i++){
    storage(name[i], quantity[i], price[i])

}
function storage(name, quantity, price){
    let obj = {
        name : name, 
        quantity : quantity,
        price : price
    }
    list.push(obj)
}
console.log(list)
function total(){
    sum = 0
    for(let i = 0; i<list.length; i++){
        sum+=list[i].quantity*list[i].price
    }
    return sum
}


console.log(total())