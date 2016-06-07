
function dropElements(arr, func) {
  // Drop them elements.
  
  for(var i=0;i<arr.length;){
    
     if(func(arr[i])===true){
       
        break;
       
     }   
     else{
       
        arr.shift();   
     }
  }
  
  return arr;
  
  
}

dropElements([1, 2, 3,4], function(n) {return n>=3; });
