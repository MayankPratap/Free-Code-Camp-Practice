
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var res=[];
  
    var obj={};
    
    arr1.forEach(function(item,idx,array){
      
        item.reverse();
      
       
      
        obj[item[0]]=item[1];
      
      
    });
  
    arr2.forEach(function(item,idx,array){
    
       item.reverse();
       if(obj[item[0]]===undefined)
           obj[item[0]]=item[1];
      
       else
           obj[item[0]]+=item[1];
        
    
    });
  
   var keys=[];
                 
  for(var key in obj){
     
     if(obj.hasOwnProperty(key))
        keys.push(key);
    
   
  }
  
  keys.sort();
  
  keys.forEach(function(item,idx,array){
    
     console.log(item);
     var temp=[];
     temp.push(obj[item]);
     temp.push(item);
    
     res.push(temp);
     
    
  });
  
  return res;
    
}

// Example inventory lists
var curInv=[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv =[[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);
