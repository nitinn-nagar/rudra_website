<?php 
$name = $_Post['name'];
$visitor_email=$_Post['email'];
$phone=$_Post['phone'];
$message=$_Post['message'];

$email_from ='nnagar141@gmail.com';
$email_subject = "Query from Website";

$email_body="Name $name.\n".
				"Email: $visitor_email.\n". 
					"Phone: $phone.\n". 
						"Message: $message.\n";

$to ="srmmarsroverteam@gmail.com";
$headers ="From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: contact.html");