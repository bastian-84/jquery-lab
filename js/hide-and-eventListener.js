$(document).ready(function () {
    // jQuery methods go here...

    // ~~~~~~~~~ EventListener click ~~~~~~~~~ //
/* 
    $("button").click(function(){
        $('p').hide();
    })
 */
   // ~~~~~~ EventListener double click ~~~~~ //
/* 
    $("p").dblclick(function(){
        $(this).hide();
    })
     */
   // ~~~~~~ EventListener mouse enter ~~~~~ //
/* 
    $("#p1").mouseenter(function(){
        alert('mouseenter event triggered')
    })
 */
    
   // ~~~~~~ EventListener mouseleave ~~~~~ //
/* 
    $("#p1").mouseleave(function(){
        alert('mouseleave event triggered')
    })
  */
    
   // ~~~~~~ EventListener mousedown ~~~~~ //
 /* 
    $("#p1").mousedown(function(){
        alert('mousedown event triggered')
    })
   */
    
   // ~~~~~~ EventListener mouseup ~~~~~ //
 /* 
    $("#p1").mouseup(function(){
        alert('mousedown event triggered')
    })
   */
    
   // ~~~~~~ EventListener hover ~~~~~ //
 /* 
    $("#p1").hover(function(){
        alert('hover event triggered')
    })
   */
    
   // ~~~~~~ EventListener focus, blur ~~~~~ //
 /* 
    jQuery('input').focus(function(){
        $(this).css('background-color', 'yellow');
    });
   
    jQuery('input').blur(function(){
        $(this).css('background-color', 'green');
    });
 */
    // ~~~~~~~~~~~~~~~~~~ on event handler ~~~~~~~~~~~~~~~~~ //
    
    $('#p1').on('click', function(){
        $(this).hide();
    })
    
    
    // ~~~~~~~~~~~~~~~~~~ on, multipe event handler ~~~~~~~~~~~~~~~~~ //
    
    $('p').on({
        mouseenter: function(){
            //$(this).css('background-color', 'lightgray');
            $(this).attr('style', 'background-color: lightgray !important; ');
        },
        mouseleave: function(){
            $(this).css('background-color', 'lightblue');
        },
        click: function(){
            $(this).css('background-color', 'yellow');
        }
    })
    
});