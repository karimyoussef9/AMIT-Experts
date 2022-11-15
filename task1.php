<?php
$h_of_bulding = [25,23,20,34,34,34,34]; //  towersHeight 

// function to count the no of heighst towers
function Counth($h_of_bulding) {
    
$highest_tower = max($h_of_bulding); // To get the highest tower height

$vals = array_count_values($h_of_bulding); // to get the number of towers with the same height 

$cnt = $vals[$highest_tower]; // to get the number of towers with highest height
echo $cnt ;

  }
  
  Counth($h_of_bulding); // call the function 
 

?>