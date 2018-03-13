$(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        var color1 = $ ('.color1').val();
        var color2 = $ ('.color2').val();
        var color3 = $ ('.color3').val();
        
        $('.box1').css('background-color', color1);
        $('.box2').css('background-color', color2);
        $('.box3').css('background-color', color3);
    });
});