<?php
  /* extrapolo.com | BEIRA | Agosto 2014 */

  require_once "Mail.php";

  function send_mail($subject, $to, $body){
    $from = "BEIRA <ola@beira.com.br>";
    $username = "ola@beira.com.br";
    $pwd = "livianha";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers = array ('From' => $from, 'To' => $to, 'Subject' => $subject, 'Content-Type' => 'text/html', 'MIME-Version' => '1.0');
    $smtp = Mail::factory('smtp', array ('host' => "ssl://smtp.gmail.com", 'port' => "465", 'auth' => true, 'username' => $username, 'password' => $pwd));

    $mail = $smtp->send($to, $headers, $body);
    if (PEAR::isError($mail)) {
       echo("Opz, algo deu errado.");
    } else {
      return true;
    }
  }

  function send_validation($mail){
    $subject = "[BEIRA] Confirmar Newsletter";
    $link = validation_link($mail);
    if (send_mail($subject, $mail, "Confirme inscrição em Newsletter\n $link")){
      echo("Ok. Confirme o link enviado para seu email para concluir o cadastro, obrigado.");
    }
  }

  function send_add_newsletter($mail){
    $subject = "[BEIRA] Inscrição em Newsletter";
    send_mail($subject, "BEIRA <ola@beira.com.br>", $mail);
  }

  function validation_link($mail){
    $encoded = encode(mail);
    return "<a href='http://beira.com.br/newsletter.php?mail=$mail&validation=$encoded'>aqui</a>";
  }

  function encode($mail){
    return sha1(strrev(md5($email)));
  }

  function validate_encode($mail, $encoded_mail){
    return (encode($mail) == $encoded_mail);
  }

  $mail = $_GET['mail'];
  if ((!$mail) || ($mail=="")){
    return false; // missing mail argument?
  }

  $validation = $_GET['validation'];
  if ($validation){
    // validar
    if (validate_encode($mail, $validation)){
      send_add_newsletter($mail);
      echo "Email validado para inscrição em Newsletter, obrigado.";
    } else {
      echo "Opz. Validação incorreta.";
    }
  } else {
    // confirmar
    $link = validation_link($mail);
    send_validation($mail);
  }

?>
