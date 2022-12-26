$( "#avatarModal .btn" ).click(
    function() {
        $( "#avatar-choice, #my-avatar" ).attr(
            "src",
            $('input:checked').css( "background-image" ).slice( 5, -2 )
        );
    }
);
