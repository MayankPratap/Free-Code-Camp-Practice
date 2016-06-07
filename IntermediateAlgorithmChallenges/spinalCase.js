
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  function hyphenBwLetters(match,p1,p2){
    
    // console.log(match);
     
     return match[0]+"-"+match[1].toLowerCase();
     
    
  }
  function replaceByHyphen(match){
    
     return "-";
    
  }
  function toLowerCase(match){
     
     return match.toLowerCase();
    
  }
  
 
  str=str.replace(/[a-z][A-Z]/g,hyphenBwLetters);
  str=str.replace(/\s|_/g,replaceByHyphen);
  str=str.replace(/[A-Z]/g,toLowerCase);
               
  return str;
 
 
}

spinalCase('AllThe-small Things');
