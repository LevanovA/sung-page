'use strict';

$(document).ready(function(){

    $('a').on('click', function(e){
        e.preventDefault();
    });

    $('.js-submenu').on('click', function(){
        $(this).toggleClass('active')
        $(this).find('.menu__sublist').slideToggle(400);
    });
});
