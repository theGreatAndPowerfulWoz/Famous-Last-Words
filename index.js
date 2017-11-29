$(document).ready(function() {
	$('.playerTxt1').fadeTo(3000, 1, function() {
    	$('.cont').fadeTo(4000, 1)
    });

    $('.cont').click(function(){
        $('.one').fadeOut(1500, function(){
            $('.playerTxt2').fadeTo(3000, 1, function(){
                $('.cont2').fadeTo(2000, 1)
            });
        });        
    });

    $('.cont2').click(function(){
        $('.two').fadeOut(1500, function(){
            $('.playerTxt3').fadeTo(3000, 1, function(){
                $('.cont3').fadeTo(2000, 1)
            });
        });        
    });
    $('.cont3').click(function(){
        $('three').fadeOut(1500, window.location.href = 'story2.html');
    });

});
    
       