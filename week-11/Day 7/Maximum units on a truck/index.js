var maximumUnits = function(boxTypes, truckSize) {
    var units = 0
    boxTypes.sort((a,b)=>b[1]-a[1])
    //console.log(boxTypes)
    for(var i=0; i<boxTypes.length; i++){
        if(boxTypes[i][0] <= truckSize){
            units += (boxTypes[i][1] * boxTypes[i][0])
            truckSize = truckSize - boxTypes[i][0]
        }
        
        else if(boxTypes[i][0] > truckSize  && truckSize !== 0){
               units += (truckSize * boxTypes[i][1])
                break
            }
     }
      return units
};