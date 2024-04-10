


var sales = [
    {item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];

  
let obj  = []



function calculateSalesTotals(){
    
    
    sales.forEach(function(ele){
        let small_OBJ = {}

        if(ele.discount){
            small_OBJ['discount'] = ele.discount
        }



    small_OBJ['item'] = ele.item
    small_OBJ['original'] = ele.original

   
          
        if(ele.discount){
            small_OBJ['sale'] = ele.original-(ele.original*(small_OBJ.discount/100))
        }
        else{
            small_OBJ['sale']  = ele.original
        }
    
    small_OBJ['stock'] = ele.stock
    small_OBJ['Total'] = ele.stock*(small_OBJ.sale)
        
    obj.push(small_OBJ)

    })
    console.log(obj)
    }


calculateSalesTotals()