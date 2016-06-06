<?php
// Los datos que recibirán por email, estos datos son enviados por javascript
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
 
$to = 'nombre@gmail.com'; // Sustituye por el email donde quieras recibir los mensajes de este formulario
$subject = 'Mensaje desde sitio web'; // Subject del email
$message = 'Nombre: '.$name."\r\n".'Dirección de email: '.$email."\r\n".'Mensaje: '.$message;
$headers = 'From: '.$name. "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // Validador de emails
mail($to, $subject, $message, $headers); // Enviador de correo
echo "<div class='alert'><h1>Mensaje enviado</h1><p>Gracias por ponerte contacto</p></div>";
}else{
echo "<div class='alert'><p>Email inválido, por favor proporciona uno correcto.</p></div>";
}
?>