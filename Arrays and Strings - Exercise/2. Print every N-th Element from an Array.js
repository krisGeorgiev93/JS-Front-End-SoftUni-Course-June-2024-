function solve(input,n){
    let arr = input.slice();
    let newArr = [];

    for (let i = 0; i < arr.length; i+=n) {
       newArr.push(arr[i]);
    }

   return newArr;
}

solve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2);