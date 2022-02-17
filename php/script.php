<?php
  

  $name = $_POST['Nom'];
  $adresseMail = $_POST['Mail'];
  $message = $_POST['Message'];
  $to = 'n.rebours@codeur.online';


  
  // if (isset($adresseMail) && $adresseMail != "" && isset($name) && $name != "" && isset($prenom) && $prenom != "" && isset($message) && $message != "") {

  //   mail($to, 'un client vous a envoyé un retour dans la page contact', $nom, $prenom, $adresseMail, $message);
  //   echo json_encode('Votre message est envoyer');
    
  // }
  
  $cleanname = false;
  $cleanemail = false;
  $cleanmessage = false;
  $number = "";
  $aaa = false;

  if (isset($adresseMail) && $adresseMail != "" && isset($name) && $name != "" && isset($message) && $message != "") {


    $pattern = "/^[a-zA-ZÀ-ÿ0-9-']+$/";
    $pattern2 = "/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/";


    if (!preg_match($pattern, $name, $prenom)) {
      echo json_encode("Wrong name");
    }
    elseif (!filter_var($adresseMail,FILTER_VALIDATE_EMAIL)) {
      echo json_encode("Wrong E-mail");
    }
    else {
      htmlentities($name);
      $cleanname = true;


      htmlentities($adresseMail);
      $cleanemail = true;

      htmlentities($message);
      $cleanmessage = true;

            
      mail($to, 'un client vous a envoyé un retour dans la page contact', $name . $message, $adresseMail);
      echo json_encode('Votre message a bien été envoyé');
    }
  }
  


 
?>