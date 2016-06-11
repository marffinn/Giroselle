$(document).ready(function($){

    var crotation;
    var rotateto = 0;
    var itemCount = $('item').length;
    var tcItemInitialRotation = 360/itemCount;
    var tcZDistance = 200;
    $('item').each( function(index) {
                   
        $(this).css({
            'transform' : 'rotateY('+( tcItemInitialRotation * index )+'deg) translateZ('+tcZDistance+'px)'
        }).attr('tc-rotation', ( tcItemInitialRotation * index ) );

    });
    
    function tcinitiate(){
        $('item').each( function(index) {
            $(this).css({
                'transform' : 'rotateY('+( tcItemInitialRotation * index )+'deg) translateZ('+tcZDistance+'px)'
            }).attr('tc-rotation', ( tcItemInitialRotation * index ) );
        });
    }
    
    function tcParalell(){
        var parallel = 'translate3d(-200px, 0px, -455px) rotateX(0deg) rotateY(120deg) rotateZ(0deg) scale3d(1, 1, 1)';
        // --------------------------- X --- Y---- Z ------------------------------------------------------------------
    }
    
    function tcRotate(tcdeg){
        
        $('#container').css({
            'transform'         : 'rotateY('+ tcdeg +'deg)',
            '-ms-transform'     : 'rotateY('+ tcdeg +'deg)',
            '-moz-transform'    : 'rotateY('+ tcdeg +'deg)',
            '-o-transform'      : 'rotateY('+ tcdeg +'deg)',
            '-webkit-transform' : 'rotateY('+ tcdeg +'deg)'
        });
    }
    
    $('item').on('click', function(){
        crotation = $('#container').attr('tcc-rotation');
        var rotation = $(this).attr('tc-rotation');       
        rotateto = crotation - rotation;
        tcRotate(rotateto);
        crotation = rotateto;
    });
    
    $('.tc-next').on('click', function(){
        rotateto -= tcItemInitialRotation;
        
        tcRotate(rotateto);
    });
    $('.tc-prev').on('click', function(){
        rotateto += tcItemInitialRotation;
        
        tcRotate(rotateto);
    });
    
    tcinitiate();
});
