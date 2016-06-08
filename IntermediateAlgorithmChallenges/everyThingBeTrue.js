
function truthCheck(collection, pre) {
  
  var tag=0,noSuch=0;
 
  // Collection is an array of Objects  
  for(var i=0;i<collection.length;++i){
    
      //console.log(collection[i]);
     // console.log(pre);
    
     
      var flag=0;
    
      for(var key in collection[i]){
      
         //console.log(key);
         //console.log(collection[i][key]);
        
         if(key==pre){
             flag=1;
             if(collection[i][key]===0 || collection[i][key]===null || collection[i][key]==="" || collection[i][key]===undefined || (typeof(collection[i][key])!="string" && isNaN(collection[i][key])) ){
                tag=1;
                //console.log(i);
                //console.log(key);
                //console.log(collection[i][key]);
             }  
             
         } 
        
      }
    
     // console.log(flag);
    
      if(flag===0)
         noSuch=1;
    
     
  }
  
 // console.log(noSuch);
  //console.log(tag);
  
  if(noSuch===1 || tag===1)
     return false;
  
  else
     return true;
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
