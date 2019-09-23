$( document ).ready(function() {
    
    $( '#mofos li' ).on( "mousemove", function( event ) {
  		//$( "#log" ).text( "left: " + event.pageX + ", top: " + event.pageY );
  		$("figure", this).css({"left": event.pageX, "top": event.pageY});
	});

})