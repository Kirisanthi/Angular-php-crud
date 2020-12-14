<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);

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

  $sql = "INSERT INTO candidate(fName,lName,age,phone,qualification,position,email,status,date,time) 
  VALUES ('{$fName}','{$lName}','{$age}','{$phone}','{$qualification}','{$position}','{$email}','{$status}','{$date}','{$time}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $candidate = [
      'fName' => $fName,
      'lName' => $lName,
      'age' => $age,
      'phone' => $phone,
      'qualification' => $qualification,
      'position' => $position,
      'email' => $email,
      'status' => $status,
      'date' => $date,
      'time' => $time,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($candidate);
  }
  else
  {
    http_response_code(422);
  }
}
?>