
// set local storage rent1 with value 0 , rent2 with value 0 , rent3 with value 0 rent4 with value 0
// car 1 
document.getElementById("btn").addEventListener("click",myFunction1)
function myFunction1(){
  
    document.getElementById("btn");
    let btnValue = btn.value;
   
  var x =localStorage.getItem("rent1");
  
  
    localStorage.setItem("rent1", parseInt(x)+ 1);
  var y = localStorage.getItem("rent1");
  
  
  console.log(parseInt(y));
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
          document.getElementById("res").innerHTML= response ;
          console.log(response);
      });
};
// car2 
document.getElementById("btn2").addEventListener("click",myFunction2)
function myFunction2(){
  
    document.getElementById("btn");
    let btnValue = btn.value;
   
  var x =localStorage.getItem("rent2");
  
  
    localStorage.setItem("rent2", parseInt(x)+ 1);
  var y = localStorage.getItem("rent2");
  
  
  console.log(parseInt(y));
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
          document.getElementById("res").innerHTML= response ;
          console.log(response);
      });
};



// car 3
document.getElementById("btn3").addEventListener("click",myFunction3)
function myFunction3(){
  
    document.getElementById("btn");
    let btnValue = btn.value;
   
  var x =localStorage.getItem("rent3");
  
  
    localStorage.setItem("rent3", parseInt(x)+ 1);
  var y = localStorage.getItem("rent3");
  
  
  console.log(parseInt(y));
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
          document.getElementById("res").innerHTML= response ;
          console.log(response);
      });
};

// car 4
document.getElementById("btn4").addEventListener("click",myFunction4)
function myFunction4(){
  
    document.getElementById("btn");
    let btnValue = btn.value;
   
  var x =localStorage.getItem("rent4");
  
  
    localStorage.setItem("rent4", parseInt(x)+ 1);
  var y = localStorage.getItem("rent4");
  
  
  console.log(parseInt(y));
  
  
      // jQuery Ajax Post Request
      $.post('task2.php', {
          btnValue: y
      }, (response) => {
          // response from PHP back-end
          document.getElementById("res").innerHTML= response ;
          console.log(response);
      });
};
