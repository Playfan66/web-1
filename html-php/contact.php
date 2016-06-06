<?php
$PageTitle = "Contacto";
$PageDescription = "Hola, soy el contacto";
?>

<?php include("includes/header.php");?>

<h1>Contacto</h1>
<div class="row">
	<form action="" method="post" id="ContactForm">	
		<div class="col_8 col--break">			
			<input type="text" name="name" id="name" placeholder="Nombre" /><br />
			<input type="text" name="email" id="email" placeholder="E-mail" /><br />
			<textarea name="message" id="message" placeholder="Mensaje" cols="30" rows="10"></textarea><br />
			<input type="button" class="bttn bttn--success" value="Enviar" id="submit" />
		</div>
		<div class="col_4 col--break">
			<div id="success"></div>
		</div>
	</form>
</div>

<?php include("includes/footer.php");?>
