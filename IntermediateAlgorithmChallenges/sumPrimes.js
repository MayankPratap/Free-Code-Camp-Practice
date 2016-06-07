var isPrime=[];

function sieve(){
  
   var n=100005;
   
   for(var i=1;i<=n;++i)  
      isPrime[i]=true;     
   
  
   isPrime[1]=false;
  
   for(i=2;i*i<=n;++i){
     
      if(isPrime[i]===true){
        
          for(var j=i*2;j<=n;j+=i){
            
             isPrime[j]=false;
              
          }
        
      }
   }
  
 
   
  
}

function sumPrimes(num){
 
  sieve();
  
  var sum=0;
  
  for(var i=1;i<=num;++i){
    
    if(isPrime[i]===true){
        sum+=i;
       // console.log(i); 
    }  
    
  } 
  
  return sum;
}

sumPrimes(10);
