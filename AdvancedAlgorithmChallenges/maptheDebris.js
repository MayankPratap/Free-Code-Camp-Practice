
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var res=[];
  
  for(var i=0;i<arr.length;++i){
    
     var name=arr[i].name;
     var avgAlt=arr[i].avgAlt;
    
     var a=earthRadius+avgAlt;
     
     var PI=3.14159265359;
    
     var temp=Math.pow(a,3)/GM;
    
     var t=2*PI*Math.pow(temp,0.5);
    
     var obj={};
    
     obj.name=name;
     obj.orbitalPeriod=Math.round(t);
    
     res.push(obj);
  }
  return res;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
