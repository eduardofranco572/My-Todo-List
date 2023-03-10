var data = new Date()
var hora = data.getHours()

if (hora >= 0 && hora < 12) {
    $("#text").html("Bom dia")
  
}else if (hora >= 12 && hora <= 18){
    $("#text").html("Boa Tarde")

}else{
    $("#text").html("Boa Noite")
}

// abrir formulario

$("#criar").click(function() {
   $("#post").css("display", "block");
});

