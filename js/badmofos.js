$( document ).ready(function() {
  	var xOffset = $("figure", this).width() / 2;
  	var yOffset = $("figure", this).height() / 2;
    
    $( '#mofos li' ).on( "mousemove", function( event ) {
  		$("figure", this).css({"left": event.pageX - xOffset, "top": event.pageY - yOffset});
	});

})