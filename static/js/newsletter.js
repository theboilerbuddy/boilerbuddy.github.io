$( document ).ready(
  function() {
    $('input[type=email]').focus(function(){
      $('#captchacontrols').show();
    })

    $('#signup-bell').hover(
      function () {
        $(this).attr('src', '/static/images/doorbell-hover.png');
      },
      function () {
        $(this).attr('src', '/static/images/doorbell.png');
      }
    );

    $( "#newsletter-form" ).submit(
      function(e) {
    	e.preventDefault()
    	$.ajax({
    	  data: $( this ).serialize(), // get the form data
    	  type: $( this ).attr( "method" ),
    	  url: $( this ).attr( "action" ),
    	  success: function( response ) {
        	if ( response.status == 1) {
        	  $( "#signup-status-message" ).show()
              window.location.replace('/thank-you');
        	} else if ( response.status == 2 ) {
              $( "#wrong-captcha-message" ).show()
              return 0;
            } else if ( response.status == 3 ) {
              $( "#error-message" ).show()
            }
    		$( "#newsletter-form" ).hide()
    	  }
    	});
    	return false;
      }
    );
  }
);
