
function sumAll(arr) {
   
   var max=Math.max.apply(null,arr);
   var min=Math.min.apply(null,arr);
    
   var brr=[];
  
   for(var i=min;i<=max;++i){
     
      brr.push(i);
      
   }
  
   var total=brr.reduce(function(a,b){
     
       return a+b;
     
   });
  
   return total;
  
}

sumAll([1, 4]);

