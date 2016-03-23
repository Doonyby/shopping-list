$(document).ready(function () {
    $('.btn').click(function (){
    	$( ".produce-list" ).append("<li>produce</li>");

    	//console.log("button has been hit!");
    });

    
    







    $('.remove').click(function () {
    	$('li').fadeOut(1000);
    })
});