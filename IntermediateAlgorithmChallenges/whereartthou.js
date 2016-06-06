function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  for(var idx in collection){
    
      var obj=collection[idx];
     
    
      // console.log(key+" "+obj[key]);    
         
      var flag=1;
      for(var name in source){
          
          if(obj.hasOwnProperty(name) && obj[name]==source[name]){
             
             console.log(obj[name]);   
          }
        
          else{
          
           flag=0;
          }
          
               
       }
    
       if(flag==1){
      
      // console.log("Yes");
         arr.push(obj);
       
       
       } 
       
    
   
    
   }
  
  
  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
