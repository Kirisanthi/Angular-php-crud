<?php
  $token = null;
  $headers = apache_request_headers();

 $postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

   $username = $request->username;
   $password = $request->password;
  
  if($username=='Kiru' && $password=='12345'){

   echo json_encode(
            array(
                "message" => "Successful login.",
                "token" => 'Bearer-jsdfnkj223',
                "email" => $username
            ));
         http_response_code(200);
    }
    else{
        echo json_encode(array("message" => "Login failed."));
    }
  

}