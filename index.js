$(document).ready(function() {
	$('.playerTxt1').fadeTo(3000, 1, function() {
    	$('.cont').fadeTo(4000, 1)
    });

    $('.cont').click(function(){
        $('.one').slideUp(1500);
    });


});
    
       