$(document).ready(function($){

    var crotation;
    var rotateto = 0;
    var halfrotation = 180;
    
    function tcRotate(deg){  
        $('#container').css({
            'transform'         : 'rotateY('+ deg +'deg)',
            '-webkit-transform' : 'rotateY('+ deg +'deg)'
        });
    }
    
    $('item').on('click', function(e){
        e.preventDefault();
        
        crotation = $('#container').attr('tcc-rotation');
        rotation = $(this).attr('tc-rotation');       
        rotateto = crotation - rotation;
        tcRotate(rotateto);
        crotation = rotateto;
        
    });
    
    $('.tc-next').on('click', function(e){
        e.preventDefault();
        rotateto -= 60;
        tcRotate(rotateto);
    });
    $('.tc-prev').on('click', function(e){
        e.preventDefault();
        rotateto += 60;
        tcRotate(rotateto);
    });

});
