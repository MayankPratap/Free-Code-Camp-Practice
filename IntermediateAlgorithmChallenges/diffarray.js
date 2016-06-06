
function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  // Same, same; but different.
  
  newArr1=arr1.filter(function isInArr2(val){
     
       if(arr2.indexOf(val)==-1)
          return true;
       else
          return false;
    
  });
  
  newArr2=arr2.filter(function isInArr1(val){
    
      if(arr1.indexOf(val)==-1)
         return true;
      else
         return false;
    
  });
   
  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

