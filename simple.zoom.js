(function( $ ){
	$.fn.simpleZoom = function( options ) {
		
		var settings = {
			'big_image' : {
				'width'		: 350,
				'height'	: 350
			}
		};
		
		return this.each(function() {
			
			if ( options ) { 
				$.extend( settings, options );
			}
			
			var $element = $(this);
			
			var wrap = '<div style="position:relative;margin-left:auto;margin-right:auto;overflow:hidden;width:' + settings['big_image']['width'] + 'px;height:' + settings['big_image']['height'] + 'px;" />';
			
			$element.height(settings['big_image']['height']).wrap(wrap);
			
			var $small_image_selector = $(this).attr("rel");
			
			$($small_image_selector).mousemove(function(e){
				var x = Math.round(100/$(this).width() * Math.round(e.pageX - $(this).offset().left));
				var y = Math.round(100/$(this).height() * Math.round(e.pageY - $(this).offset().top));
				
				var x1 = ( ($element.width() - 350) / 100 ) * x;
				var y1 = ( ($element.height() - 350) / 100 ) * y;
				
				console.log(x1 + ' ' + y1)
				
				$element.height(800).css({
					'marginLeft': '-' + x1 + 'px',
					'marginTop' : '-' + y1 + 'px'
				});
			}).mouseleave(function(){
				
				$element.height(350);
				
				$element.css({
					'marginLeft': '0',
					'marginTop' : '0'
				})
			});
		});
	};
})( jQuery );