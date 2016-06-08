function power(base,expo){
 
   var ans=1;
   
   for(var i=1;i<=expo;++i){
    
     ans*=base; 
   }  
   
   return ans;
  
}  
function fromBinary(str){
  
   var sum=0,expo=0;
   //console.log(str);
  
   for(var i=str.length-1;i>=0;--i){
    
    // console.log(expo);
   //  console.log(power(2,expo));
     
     if(str[i]=="1"){
      
       
        sum+=power(2,expo)*1;
      
       
     }
     
     expo++;
    
   } 
  
   //console.log(sum);
   return sum;
  
}  
 
function binaryAgent(str) {
  var arr=str.split(" ");
  var res=[];
  for(var i=0;i<arr.length;++i){
    
     var val=fromBinary(arr[i]);
     console.log(val);
     res.push(String.fromCharCode(val));
    
  } 
  
  return res.join("");
   
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
