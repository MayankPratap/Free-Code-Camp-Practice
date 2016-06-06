function fearNotLetter(str){
  
  for(var i=1;i<str.length;++i){
    
     if(str.charCodeAt(i)-str.charCodeAt(i-1)==1){
       
        console.log("Hello");
       
     }  
    
     else{
       
       break;
       
     }
    
    
  }
  
  if(i==str.length)
     return undefined;
  
  return String.fromCharCode(str.charCodeAt(i-1)+1);
}

fearNotLetter("abce");
