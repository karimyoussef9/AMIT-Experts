<?php

	// Checking, if post value is
	// set by user or not
	if(isset($_POST['btnValue']))
	{
		// Getting the value of button
		// in $btnValue variable
		$btnValue = $_POST['btnValue'];
	
		// Sending Response
		
	}
    if ($btnValue  == 1){
        echo "success";
    }
    else {
        echo "unavalable";
    }
?>
