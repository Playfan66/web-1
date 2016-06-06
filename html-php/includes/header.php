<!DOCTYPE html>
<html lang="es">
<head>
	<!-- Llenamos el title en cada página -->
	<title><?php echo $PageTitle; ?></title>

	<!-- Llenamos la descripción en cada página -->
	<meta http-equiv="description" content="<?php echo $PageDescription; ?>" />

	<!-- Este meta hace posible el responsive -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- EL link de tus estilos -->
	<link rel="stylesheet" href="assets/css/site.css" />

	<!-- EL link del icono que aparece en la pestaña del navegador -->
	<link rel="shortcut icon" href="assets/img/favicon.ico" />

	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
</head>

<body>
	
	<header class="l_header">
		<div class="container">
			<div class="row">
				<div class="col_2">
					<a href="index.php" class="header__logo">php</a>
				</div>
				<div class="col_10">
					<nav class="textRight header__menu" id="nav">
						<a href="index.php" class="">Inicio</a>
						<a href="about.php" class="">Acerca de mi</a>
						<a href="contact.php" class="">Contacto</a>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<div class="l_body">
		<div class="container">