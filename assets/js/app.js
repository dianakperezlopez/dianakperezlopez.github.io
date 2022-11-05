$(document).ready(function(){
    $('.elemento').draggable();
 
    //Redimensionar
 
     $('.elemento').resizable();
 
     //Selector
 
     //$('.lista-selecionable').selectable();
 
     //sortable edita la lista en el orden que se quiera
 
     //Efectos
     $("#mostrar").css("display", 'none');
     $("#mostrar2").click(function(){
         $("#primero").toggle("blind", 2000);
         $("#mostrar2").css("display", 'none');
         $("#mostrar").css("display", 'block');
     });

    $("#mostrar").click(function(){
         $("#primero").toggle("blind", 2000);
         $("#mostrar").css("display", 'none');
         $("#mostrar2").css("display", 'block');
     });
   
     $("#texto1").click(function(){
        $("#lista1").toggle("blind", 2000);
        $("#texto1").css("display", 'none');
        $("#texto12").css("display", 'block');
    });
    $("#texto12").click(function(){
        $("#lista1").toggle("blind", 2000);
        $("#texto12").css("display", 'none');
        $("#texto1").css("display", 'block');
    });

    $("#texto2").click(function(){
        $("#lista2").toggle("blind", 2000);
        $("#texto2").css("display", 'none');
        $("#texto22").css("display", 'block');
    });
    $("#texto22").click(function(){
        $("#lista2").toggle("blind", 2000);
        $("#texto22").css("display", 'none');
        $("#texto2").css("display", 'block');
    });

    $("#texto3").click(function(){
        $("#lista3").toggle("blind", 2000);
        $("#texto3").css("display", 'none');
        $("#texto32").css("display", 'block');
    });
    $("#texto32").click(function(){
        $("#lista3").toggle("blind", 2000);
        $("#texto32").css("display", 'none');
        $("#texto3").css("display", 'block');
    });
 });