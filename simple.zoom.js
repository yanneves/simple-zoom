(function( $ ){
	$.fn.simpleZoom = function( options ) {
		
		/*
		 * TODO add every setting that is needed
		 */
		var settings = {
			'big_image' : {
				'width'		: 350,
				'height'	: 350
			}
		};
		
		return this.each(function() {
			
			/*
			 * TODO check why settings are not working when you specify only one option
			 */
			if ( options ) { 
				$.extend( settings, options );
			}
			
			// cache current element
			var $element = $(this);
			
			/*
			 * TODO move inline styling to external css file
			 */
			var wrap = '<div style="position:relative;margin-left:auto;margin-right:auto;overflow:hidden;width:' + settings['big_image']['width'] + 'px;height:' + settings['big_image']['height'] + 'px;" />';
			
			/*
			 * TODO fix this part so it is little bit smarter, ie it should apply width
			 * only if you pass width as parameter, same with height... or something
			 */
			$element.height(settings['big_image']['height']).wrap(wrap);
			
			// cache thumbnail image based on rel attribute of big image
			var $small_image_selector = $(this).attr("rel");
			
			/*
			 * TODO move some stuff out to hover function... check this code to see is
			 * all this shit really necessary and like optimize it a bit or what eva \/
			 */
			$($small_image_selector).mousemove(function(e){
				var x = Math.round(100/$(this).width() * Math.round(e.pageX - $(this).offset().left));
				var y = Math.round(100/$(this).height() * Math.round(e.pageY - $(this).offset().top));
				
				var x_offset = ( ($element.width() - 350) / 100 ) * x;
				var y_offset = ( ($element.height() - 350) / 100 ) * y;
				
				$element.height(800).css({
					'marginLeft': '-' + x_offset + 'px',
					'marginTop' : '-' + y_offset + 'px'
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