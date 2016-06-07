function findElement(arr, func) {
  
   var brr=arr.filter(func);
   return brr[0];
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
