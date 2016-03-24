$(document).ready(function() {
    $('#enterItem').click(function(){   	
      var item = $('#item').val();
      var entry = '<li><span>' + item + '</span>' + 
                  '<button type="button" class="btn btn-danger btn-xs remove">X</button></li>';
      $( ".produce-list" ).prepend(entry);
      $('#item').val('');
    	//console.log("button has been hit!");
    });

    
    


});    

$(document).on('click', '.remove', function() {
   $(this).parent().remove();
});

$(document).on('click', '.done', function() {
    $(this).next().addClass('strike');
});