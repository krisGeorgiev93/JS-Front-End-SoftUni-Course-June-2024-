function rotation(input,n){
     // Create a copy of the input array to avoid modifying the original
     let arr = input.slice();

     // Perform the rotation n times
     for (let index = 0; index < n; index++) {
         // Remove the first element and push it to the end
         arr.push(arr.shift());
     }
 
     // Join the array into a string and print it
     console.log(arr.join(" "));
 }

rotation([2, 4, 15, 31], 5);

