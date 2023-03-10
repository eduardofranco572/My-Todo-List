$(".fechadolink").click(function() {
    if($(this).hasClass('fechadolink')){
        $(this).removeClass("fechadolink").addClass("abertolink");
        $("#linkfocado").css("display", "flex");
    }
    else{
        $(this).removeClass("abertolink").addClass("fechadolink");
        $("#linkfocado").css("display", "none");

    }
})

$("#enviarlink").click(function() {
    const link = $("#link").val();
    var imageUrl = `${link}`
    localStorage.setItem("background-image", imageUrl);
    $("body").css("background-image", "url(" + imageUrl + ")");
})

$(document).ready(function() {
    var imageUrl = localStorage.getItem("background-image");
    if (imageUrl) {
      $("body").css("background-image", "url(" + imageUrl + ")");
    }
});

$("#voltaback").click(function() {
    var imageUrl = "../img/fundo.jpg"
    localStorage.setItem("background-image", imageUrl);
    $("body").css("background-image", "url(" + imageUrl + ")");
})
