$(document).ready(function(){

    $(document).keydown(function(e) {
       //alert(e.keyCode);
    
       if(e.keyCode==37)
       {
        //alphabet arrowleft 
              $("#botao-esquerda").css("background","#fffb14");
       }
  
        if(e.keyCode==38)
        {
         //alphabet arrowup
               $("#botao-cima",).css("background","#ff1427");
        }
  
        if(e.keyCode==39)
        {
         //alphabet arrowright
               $("#botao-direita").css("background","#27ff14");
        }
  
        if(e.keyCode==40)
        {
         //alphabet arrowdown 
               $("#botao-baixo").css("background","#1814ff");
        }
  
        if(e.keyCode==32)
        {
         //alphabet space 
               $("#botao-espaco").css("background","#8d14ff");
        }
    
    });
    
    
    })
  
    $(document).ready(function(){
  
      $(document).keyup(function(e) {
         //alert(e.keyCode);
      
         if(e.keyCode==37)
       {
        //alphabet arrowleft 
              $("#botao-esquerda").css("background","black");
       }
  
        if(e.keyCode==38)
        {
         //alphabet arrowup
               $("#botao-cima",).css("background","black");
        }
  
        if(e.keyCode==39)
        {
         //alphabet arrowright
               $("#botao-direita").css("background","black");
        }
  
        if(e.keyCode==40)
        {
         //alphabet arrowdown 
               $("#botao-baixo").css("background","black");
        }
  
        if(e.keyCode==32)
        {
         //alphabet Space 
               $("#botao-espaco").css("background","black");
        }
      
      });
      
      
      })

window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
             e.preventDefault();
      }
 }, false);
  