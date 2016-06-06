
function pairElement(str) {
  
  var arr=[];
  
  for(var i=0;i<str.length;++i){
    
     var brr=[];
    
     if(str[i]=='A'){
       
        brr.push('A');
        brr.push('T');
       
     }
    
     else if(str[i]=='T'){
       
        brr.push('T');
        brr.push('A');
       
       
     }
    
     else if(str[i]=='G'){
       
       brr.push('G');
       brr.push('C');
       
       
     }
    
     else if(str[i]=='C'){
       
        brr.push('C');
        brr.push('G');
       
     }
    
     arr.push(brr);
    
    
  }
 
  return arr;
}

pairElement("GCG");
