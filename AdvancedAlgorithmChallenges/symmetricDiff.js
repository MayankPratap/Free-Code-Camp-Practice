//noprotect
function comp(a,b){
  
   return a>b;
  
}
function symDiff(arr1,arr2){
  
   var res=[],flag,i,j,visited=[];
   for(i=0;i<100005;++i)
       visited[i]=false;
  
   for(i=0;i<arr1.length;++i){
     
       flag=false;
     
       for(j=0;j<arr2.length;++j){
         
          if(arr2[j]==arr1[i])
             flag=true;
         
       }
     
       if(flag===false && visited[arr1[i]]===false){
          visited[arr1[i]]=true; 
          res.push(arr1[i]);
       }   
     
   }
  
  
   for(i=0;i<arr2.length;++i){
  
      flag=false;
     
      for(j=0;j<arr1.length;++j){
        
          if(arr1[j]==arr2[i])
             flag=true;
        
      }
     
      if(flag===false && visited[arr2[i]]===false){
       
         visited[arr2[i]]=true;
         res.push(arr2[i]);
        
      }  
    
   }
  
   return res;
  
}
function sym(args) {
  
   var arr = Array.prototype.slice.call(arguments);
   var res=[];
  
   res=arr[0];
  
   for(var i=1;i<arr.length;++i){
      
      res=symDiff(res,arr[i]);
     
   }
  
   
  
   return res.sort(comp);
  
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
