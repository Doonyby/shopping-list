$(document).ready(function() {
    $('#enterItem').click(function(){       
      var item = $('#item').val();
      var category = "." + $('#category').val() + "-list";

      var entry = '<li><input class="done" type="checkbox"><span>' + item + '</span>' + 
                  '<button type="button" class="btn btn-danger btn-xs remove">X</button></li>';
      
      $(category).prepend(entry);
      $('#item').val('');
      $('#category').val('select');
          
    }); 
    

});    

$(document).on('click', '.remove', function() {
   $(this).parent().remove();
});

$(document).on('click', '.done', function() {
    $(this).next().toggleClass('strike');
});

