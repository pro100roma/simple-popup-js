window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    
    //Modal
    let more = document.querySelector('.more'), //Popup initialize button
        overlay = document.querySelector('.overlay'), //Popup overlay
        close = document.querySelector('.popup-close'); //Popup close button
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';            //Show popup when click on "more" button
        document.body.style.overflow = 'hidden';    //Prevent scrolling page when modal is open
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';             //Hide popup when click on "close"
        document.body.style.overflow = 'visible';   //Allow scrolling page when modal is open
    });
    

});