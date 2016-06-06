$(document).ready(function(){
  $('#submit').click(function(){
  $.post("send.php", $("#ContactForm").serialize(),  function(response) {
    $('#success').html(response);
  });
  return false;
  });
});
// Este código agrega la class active en el menu y se actualiza automáticamente con la url **FUCKING MAGIC***
$(function() {
	// Detecta el id nav
  var nav = document.getElementById("nav"),
  	// Detecta el link
    anchor = nav.getElementsByTagName("a"),
    // Detecta la URL
    current = window.location;
	// Compara que la url y el link sean iguales
  console.log("anchor = ",anchor,"current = ",current);

  for (var i = 0; i < anchor.length; i++) {
  if(anchor[i].href == current) {
      anchor[i].className = "active";
  }
}
});