
function convertHTML(str) {
  // &colon;&rpar;
 function HTMLEntities(propertyName){
   
   function convert(match){
     
      if(match=="&")
         return "&amp;";
      else if(match=="<")
         return "&lt;";
      else if(match==">")
         return "&gt;";
      else if(match=='"')
         return "&quot;";
      else if(match=="'")
         return "&apos;";
     
   }
   
   return propertyName.replace(/[&|<|>|"|']/g,convert);
 }
  
  
  return HTMLEntities(str); 
}

convertHTML("Dolce & Gabbana");
