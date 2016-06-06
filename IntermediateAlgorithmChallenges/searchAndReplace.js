
function myReplace(str, before, after) {
  
   if(before[0]==before[0].toLowerCase()){
    
     // console.log("Lower");
      //after[0]=after[0].toLowerCase(); 
      var temp=after.substring(1);
      after=after[0].toLowerCase()+temp;
    
   }
  
  else{
      //console.log("Upper");
     // console.log(before[0]);
      var temp=after.substring(1);
      after=after[0].toUpperCase()+temp;
    
  } 
  
  
   var newStr=str.replace(before,after);
    
   return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
