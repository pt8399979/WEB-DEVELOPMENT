function rectangle(length, width, find){
    let obj = {
        length : length,
        width : width,
        operator : find(length, width)

        }
        return obj.operator
    }
    function area(num1, num2){
        return num1*num2
    }
    function parameter(num1, num2){
        return 2*(num1+num2)
    }
console.log(rectangle(3, 4, parameter))
