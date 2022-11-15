//car1 

document.getElementById("btn").addEventListener("click",myFunction1)
function myFunction1(){
  
  
  var y = localStorage.getItem("rent1");
  
  
  
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
        
            localStorage.setItem("rent1", 0);

        
      });
};
//car2

document.getElementById("btn2").addEventListener("click",myFunction2)
function myFunction2(){
  
  
  var y = localStorage.getItem("rent2");
  
  
  
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
        
            localStorage.setItem("rent2", 0);

        
      });
};
//car3

document.getElementById("btn3").addEventListener("click",myFunction3)
function myFunction3(){
  
  
  var y = localStorage.getItem("rent3");
  
  
  
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
        
            localStorage.setItem("rent3", 0);

        
      });
};
//car4

document.getElementById("btn4").addEventListener("click",myFunction4)
function myFunction4(){
  
  
  var y = localStorage.getItem("rent4");
  
  
  
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
        
            localStorage.setItem("rent4", 0);

        
      });
};