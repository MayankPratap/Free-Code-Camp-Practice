
function addTogether() {
   //Converting arguments array to real array
   var args=Array.prototype.slice.call(arguments);
   console.log(args.length);
  
   if(args.length==2){
     
      if(isNaN(args[0]) || isNaN(args[1]))  
           return undefined;
        
      else{
        
           if(typeof(args[0])=="number" && typeof(args[1])=="number")
           return args[0]+args[1];
           else
              return undefined;
        
      }
     
     
   }
  
   else{
     
      if(isNaN(args[0]))
         return undefined;
      else{
        
          if(typeof(args[0])=="number"){
            
             return function(y){
               
                 if(isNaN(y) || typeof(y)!="number")
                    return undefined;
                 
                 return args[0]+y;
             };
          }
        
          else{
            
             return undefined;
          }
        
      }
     
   }
}

addTogether(2,"3");
