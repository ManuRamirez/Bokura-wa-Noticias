$(document).ready(function(){
    $(".btn-info").click(function(){
      alert("Este boton te llevara a la noticia cuando este implementado");
    });
    $(".iconito").click(function(){
        $(".iconito").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });
      $("#reparto").click(function(){
        $("#reparto").hide();
        $(".a").hide();
      });




  });




 

  
