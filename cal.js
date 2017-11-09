'use strict';

function calculateModule(containerElement) {
    let num1;
    let num2;
    let mathematics;
    
    function getNumberValue(){
        num1= document.getElementById("num1").value;
        num2= document.getElementById("num2").value; 
        mathematics= document.querySelector("input[name='mathSign']:checked");
        //console.log(changeStrToNum(num1)+changeStrToNum(num2)+mathematics);
    }
        
    function changeStrToNum(num){
        return Number.parseInt(num);
    }
    
   function calculate()  
    { 
      
        if (mathematics.value == "multiple"){
           return num1*num2;
        }
        
         else if(mathematics.value == "division"){
           return num1/num2;  
         }
        
         else if(mathematics.value == "addition"){
           return num1+num2;  
         }
        
         else {
           return num1-num2;  
         }
        
    }
    function appendToHtml(){
       
    }

   return {
       getNumberValue:getNumberValue,
       calculate:calculate
   }
}
  
 const btn=  document.getElementById("resultBtn");
        btn.addEventListener("click", function(){
        var c = calculateModule(); 
        console.log(c.getNumberValue());
        console.log(c.calculate());
    });
 
  
    