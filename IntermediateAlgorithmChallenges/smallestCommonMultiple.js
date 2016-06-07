// noprotect
function smallestCommons(arr) {
    
   var start=arr[0],end=arr[1];
  
   if(arr[0]<=arr[1]){
     
       start=arr[0];
       end=arr[1];
     
   }
  
   else{
     
       end=arr[0];
       start=arr[1];
     
   }
      
   
   var lcm,prod=1;
  
   for(var i=start;i<=end;++i){
     
      prod*=i;
     
   }
  
  console.log(prod);
  
   for(i=end;i<=1000000;++i){
     
      var flag=0;
     
      for(var j=start;j<=end;++j){
        
          if(i%j!==0)
             flag=1;
            
      }
     
      if(flag===0){
        
         
          break;
        
      }
     
     
   } 
  
   console.log(i);
   return i;
   //console.log("Hello");
 
}

smallestCommons([1,13]);
