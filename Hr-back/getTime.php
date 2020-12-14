
<?php

 require 'connect.php';
 
 $date = ''; 
 $time = [];
if( isset( $_GET['date'])) {
    $date = $_GET['date']; 
} 
 
  $sql = "SELECT time FROM candidate WHERE date = {$date}";


  if($result = mysqli_query($con,$sql))
  {
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
     $time[$cr]  = (int)$row['time'];
      $cr++;
    }
  
    echo json_encode($time);
  }
  else
  {
    http_response_code(404);
  }
   ?>