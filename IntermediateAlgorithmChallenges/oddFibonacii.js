
function sumFibs(num){
   
   var a=1,b=1,c;
  
   var fib=[];
  
   fib.push(a);
   fib.push(b);
  
   for(var i=3;i<=50;++i){
     
       c=a+b;
     
       fib.push(c);
        
       a=b;
       b=c;
     
      
   }
  
   var sum=0;
  
   for(i=0;i<fib.length;++i){
     
       if(fib[i]<=num && fib[i]%2===1){
         
           sum+=fib[i];
         
       }
     
   }
  
   return sum;
  
}

sumFibs(4);
