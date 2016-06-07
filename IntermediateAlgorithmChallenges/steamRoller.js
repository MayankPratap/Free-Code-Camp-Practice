function steamrollArray(arr) {
 // I'm a steamroller,baby
 
 var brr=[];
  
 return solve(arr); 
  
  
 function solve(arr){ 
  
   for(var i=0;i<arr.length;++i){
    
     if(Array.isArray(arr[i])===true){
        
        brr=solve(arr[i]);         
             
     }
   
     else{
      
       brr.push(arr[i]);   
     }
 
   }
   
   return brr;
   
 } 
  
}

steamrollArray([1, {}, [3, [[4]]]]);
