
function makeFriendlyDates(arr){
  
  var monthNames=[];
  monthNames[1]="January";
  monthNames[2]="February";
  monthNames[3]="March";
  monthNames[4]="April";
  monthNames[5]="May";
  monthNames[6]="June";
  monthNames[7]="July";
  monthNames[8]="August";
  monthNames[9]="September";
  monthNames[10]="October";
  monthNames[11]="November";
  monthNames[12]="December";
  
  dayNames=[];
  
  dayNames[1]="1st";
  dayNames[2]="2nd";
  dayNames[3]="3rd";
  dayNames[4]="4th";
  dayNames[5]="5th";
  dayNames[6]="6th";
  dayNames[7]="7th";
  dayNames[8]="8th";
  dayNames[9]="9th";
  dayNames[10]="10th";
  dayNames[11]="11th";
  dayNames[12]="12th";
  dayNames[13]="13th";
  dayNames[14]="14th";
  dayNames[15]="15th";
  dayNames[16]="16th";
  dayNames[17]="17th";
  dayNames[18]="18th";
  dayNames[19]="19th";
  dayNames[20]="20th";
  dayNames[21]="21st";
  dayNames[22]="22nd";
  dayNames[23]="23rd";
  dayNames[24]="24th";
  dayNames[25]="25th";
  dayNames[26]="26th";
  dayNames[27]="27th";
  dayNames[28]="28th";
  dayNames[29]="29th";
  dayNames[30]="30th";
  dayNames[31]="31st";
  
  var str1=arr[0],str2=arr[1];
  
  //console.log(str1);
  //console.log(str2);
  
  var regex=/(\d{4})-(\d{2})-(\d{2})/;
  
  var results1=str1.match(regex);
  var year1=results1[1];
  var month1=results1[2];
  var day1=results1[3];  
  
  
  var results2=str2.match(regex);
  var year2=results2[1];
  var month2=results2[2];
  var day2=results2[3];
  
  var res=[];
  
  if(year1==year2){
    
    if(month1==month2){
      
       month1=parseInt(month1);
       month2=parseInt(month2);
      
       var month1Name=monthNames[month1];
       var month2Name=monthNames[month2];
      
       day1=parseInt(day1);
       day2=parseInt(day2);
      
       var day1Name=dayNames[day1];
       var day2Name=dayNames[day2];
      
       var res1=month1Name+" "+day1Name;
       var res2=day2Name;
         
      
       if(year1!="2016"){
         
         res1=res1+", "+year1;
       }
      
      
      
       if(day1==day2){
         
       
         console.log(res1);
         res.push(res1);
        
       } 
      
       else{
         
         console.log(res1);
         console.log(res2);
         res.push(res1);
         res.push(res2);
      
       } 
      
    }
    
    else{
      
       month1=parseInt(month1);
       month2=parseInt(month2);
      
       var month1Name=monthNames[month1];
       var month2Name=monthNames[month2];
      
       day1=parseInt(day1);
       day2=parseInt(day2);
      
       var day1Name=dayNames[day1];
       var day2Name=dayNames[day2];
       
       var res1=month1Name+" "+day1Name+", "+year1;
       var res2=month2Name+" "+day2Name;
       
       console.log(res1);
       console.log(res2);
       res.push(res1);
       res.push(res2);
      
    }  
   
    
  } 
  
  else{
    
  
    
      month1=parseInt(month1);
      month2=parseInt(month2);
      
      var month1Name=monthNames[month1];
      var month2Name=monthNames[month2];
      
      day1=parseInt(day1);
      day2=parseInt(day2);
      
      var day1Name=dayNames[day1];
      var day2Name=dayNames[day2];
       
      var res1=month1Name+" "+day1Name;
      var res2=month2Name+" "+day2Name;
    
      if(year2-year1==1){
          
      
        if(month2<month1){
        
            if(year1!="2016")
              res1=res1+", "+year1;
           
          
        }  
        
        else if(month2==month1)
          
           if(day2<day1){
              if(year1!="2016")
               res1=res1+", "+year1;
              
            
           } 
        
           else{
          
              res1=res1+", "+year1;
              res2=res2+", "+year2;
          
           }
        } 
    
        else{
       
            res1=res1+", "+year1;
            res2=res2+", "+year2;
  
        }
       console.log(res1);
       console.log(res2);
       res.push(res1);
       res.push(res2);
      
      
      }
       
    
       
      return res;
 
   
 
}

makeFriendlyDates(["2022-09-05", "2023-09-05"])
