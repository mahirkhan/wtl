$(document).ready(function(){
    $('#one').on('click',function(){
        $(this).html("<b>you just click me</b>");
    });
                  
});

$(document).ready(function(){
    $('#two').on('click',function(){
        $('#four').slideToggle();
    });
        
    /*$('#three').on('click',function(){
        $(this).hide(600);
        $(this).show(600);

    });*/
    $('#three').on('click',function(){
        //$(this).fadeOut(500);
        //$(this).fadeIn(500);
        $(this).fadeTo(1000,0);
    });
    $('#f1').on('click',function(){
                $(this).fadeTo(1000,0);
                });
    
    
});
