// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(arr , stringName){

  return arr.filter( function(name){
        
        if(stringName.toLowerCase() === name.toLowerCase())
          
          return name;
    
     })
   
                      
   
 }
 
 
 findMatching(drivers , "Bobby");

 findMatching(drivers , "Susan");




 function fuzzyMatch(arr, stringName){

    return arr.filter( function (name){


        if(stringName[0 , 1] === name[0 , 1]){
          return name;
        }

    } )



 }



fuzzyMatch(drivers , "y")





function matchName( arrObj , stringName){
  
    return arrObj.filter( function(obj){
      
          if(obj.name === stringName){
          return obj
        }
      
    })
    
    
  }
  
  
  matchName(drivers , "Bobby")
  