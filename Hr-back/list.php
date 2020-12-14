<?php
/**
 * Returns the list of Students.
 */
require 'connect.php';

$candidate = [];
// $sql = "SELECT * FROM candidate";
$sql ="SELECT * FROM candidate ORDER BY date,time";
if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $candidate[$cr]['cId']   = $row['cId'];
    $candidate[$cr]['fName'] = $row['fName'];
    $candidate[$cr]['lName'] = $row['lName'];
    $candidate[$cr]['age'] = $row['age'];
    $candidate[$cr]['phone'] = $row['phone'];
    $candidate[$cr]['qualification'] = $row['qualification'];
    $candidate[$cr]['position'] = $row['position'];
    $candidate[$cr]['email'] = $row['email'];
    $candidate[$cr]['status'] = $row['status'];
    $candidate[$cr]['date'] = $row['date'];
    $candidate[$cr]['time'] = $row['time'];

    $cr++;
  }

  echo json_encode($candidate);
}
else
{
  http_response_code(404);
}