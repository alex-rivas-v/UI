"use strict";

const passwordInput = document.querySelector( "#password" );
const togglePasswordButton = document.querySelector( "#togglePassword" );

togglePasswordButton.addEventListener( "click", function ( e ) {
    e.preventDefault();
    
    if ( passwordInput.type === "password" ) {
        
        passwordInput.type = "text";
        togglePasswordButton.classList.remove( "fa-eye" );
        togglePasswordButton.classList.add( "fa-eye-slash" );

    } else {
        
        passwordInput.type = "password";
        togglePasswordButton.classList.remove( "fa-eye-slash" );
        togglePasswordButton.classList.add( "fa-eye" );

    }
});