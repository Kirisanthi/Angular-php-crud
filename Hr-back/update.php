<?php
require 'connect.php';

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request= json_decode($postdata);

	//sanitize
	$id = mysqli_real_escape_string($con, (int)$_GET['id']);
	// $id = mysqli_real_escape_string($con, trim($request->id));
	$fName = mysqli_real_escape_string($con, trim($request->fName));
	$lName = mysqli_real_escape_string($con, trim($request->lName));
	$age = mysqli_real_escape_string($con, $request->age);
	$phone = mysqli_real_escape_string($con, $request->phone);
	$qualification = mysqli_real_escape_string($con, $request->qualification);
	$position = mysqli_real_escape_string($con, $request->position);
	$email = mysqli_real_escape_string($con, $request->email);
	$status = mysqli_real_escape_string($con, $request->status);
	$date = mysqli_real_escape_string($con, $request->date);
	$time = mysqli_real_escape_string($con, $request->time);



	//update
	$sql = "UPDATE candidate SET fName ='$fName' , lName ='$lName', age ='$age', phone ='$phone',
	 qualification ='$qualification', position = '$position', email = '$email', status = '$status',date = '$date',time ='$time'
	WHERE cId = '{$id}' LIMIT 1";

	if(mysqli_query($con,$sql)){
		http_response_code(204);
	}
else{
	return http_response_code(422);
}
}

?>