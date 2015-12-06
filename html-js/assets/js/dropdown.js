// Al dar click al div mostrar div oculto y cambiar el texto
$( "#moar" ).click(function() {
    $( "#moi" ).slideToggle();
    ($("#moar").text() === "Ver más") ? $("#moar").text("Ver menos") : $("#moar").text("Ver más");
});