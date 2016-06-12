
function pairwise(arr, arg) {
   
   var sum=0;
  
   var visited=[];
  
   for(var i=0;i<1000;++i)
      visited[i]=false;
  
   for(i=0;i<arr.length;++i){
       if(visited[i]===false){
         
         
         for(j=i+1;j<arr.length;++j){
         
            if(visited[j]===false){    
             
            
               if(arr[i]+arr[j]==arg){
             
                 visited[i]=true;
                 visited[j]=true;
              
                 sum+=i+j;
                   
                 break;
             
               }
             
            }   
     
         }
         
       }   
    
   }
  
   return sum;
  
}

pairwise([1, 1, 1], 2);
