//FUNCIONALIDADE MENU
$(document).ready(function(){
    
    $('.tog').click(function(){
        var altura = $('.list-mobile').height();
        if(altura > 0){
            $('.list-mobile').removeClass('active');
            $('.list-mobile').toggleClass('disable');
        }else if(altura == 0){
            $('.list-mobile').removeClass('disable');
            $('.list-mobile').toggleClass('active');
        }        
    });
});