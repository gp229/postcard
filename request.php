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
	// Define some variables
	$to = $_POST['receiverEmail'];
	$subject = 'Test email';
	// Create a boundary string. It must be unique so we use the MD5 algorithm to generate a random hash
	$random_hash = md5(date('r', time()));
	// Define the headers
	$headers = "From: ".$_POST['senderEmail']."\r\n";
	// Add boundary string and mime type specification
	$headers .= "Content-Type: multipart/mixed; boundary=\"PHP-mixed-".$random_hash."\"";


	$imageType = explode(',', $_POST['image'],2);
	$_POST['image'] = $imageType[1];

	// Read the attachment file contents into a string, encode it with MIME base64, and split it into smaller chunks
	$attachment = chunk_split($_POST['image']);


	// Define the body of the message
$message = "
--PHP-mixed-$random_hash
Content-Type: text/plain; charset='iso-8859-1'

This is a test email message sent with PHP.

--PHP-mixed-$random_hash
Content-Type: application/octet-stream; name=postcard.png
Content-Transfer-Encoding: base64
Content-Disposition: attachment

$attachment
--PHP-mixed-$random_hash--";
	
	if(@mail($to, $subject, $message, $headers))
	{
	  $response = "Email was sent successfully";
	}else{
	  $response = "Failed to send email";
	}
}
catch(Error $e)
{
	$response = "Sorry, something went wrong.";
}



echo json_encode($response);
exit(0);
?>
