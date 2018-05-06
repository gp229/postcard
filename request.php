<?php

try{
	if(empty($_POST['senderEmail']) || empty($_POST['receiverEmail']) || empty($_POST['image'])) 	
	{
		$response = "Input values not set";
		echo json_encode($response);
		exit(0);
	}
	$response = "unsupported request type";
	$request = $_POST;
	$response = $_POST;
}
catch(Error $e)
{
	$response = "Sorry, something went wrong.";
}
mail ('gplewa@hotmail.com', 'Postfix Test', 'A test email') || print_r(error_get_last());
echo json_encode($response);
exit(0);
?>
