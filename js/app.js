$(document).ready(function () {
    $('.btn').click(function (){
    	$( ".produce-list" ).prepend("<li>produce</li>");

    	//console.log("button has been hit!");
    });

    
    







    $('.remove').click(function () {
    	$(this).fadeOut(1000);
    })
});