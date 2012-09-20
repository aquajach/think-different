// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
    $('#service_menu li').hoverIntent({
        over : function(){
            $(this).animate({
                'width' : '200px'
            }, 300);

//            $('a', this).animate({
//                'left' : '+=30px'
//            }, '500');

        },
        timeout :300,
        out : function(){
            $(this).animate({
                'width' : '150px'
            }, 300);

//            $('a', this).animate({
//                'left' : '+=30px'
//            }, '500');
        }
    })
})
