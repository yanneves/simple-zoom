(function( $ ){
	$.fn.simpleZoom = function( options ) {
		
		var settings = {
			'big_image' : {
				'width'		: 500,
				'height'	: 500
			}
		};
		
		return this.each(function() {
			
			if ( options ) { 
				$.extend( settings, options );
			}
			
			var $element = $(this);
			
			var wrap = '<div style="position:relative;overflow:hidden;width:' + settings['big_image']['width'] + 'px;height:' + settings['big_image']['height'] + 'px;" />';
			
			$element.height(settings['big_image']['height']).wrap(wrap);
			
			var $small_image_selector = $(this).attr("rel");
			
			$($small_image_selector).mousemove(function(e){
				var x = Math.round(100/$(this).width() * Math.round(e.pageX - $(this).offset().left));
				var y = Math.round(100/$(this).height() * Math.round(e.pageY - $(this).offset().top));
				
				$element.height(800).css({
					'position'	: 'absolute'
				});
				
				if(x > 50 && y <= 50){
					// 1
					x = 0;
					y = 0;
					$element.css({
						'top'	: x + 'px',
						'right'	: y + 'px',
						'bottom': '',
						'left'	: ''
					})
				}else if(x <= 50 && y <= 50) {
					// 2
					x = 0;
					y = 0;
					$element.css({
						'top'	: x + 'px',
						'left'	: y + 'px',
						'bottom': '',
						'right'	: ''
					})
				}else if(x <= 50 && y > 50){
					// 3
					x = 0;
					y = 0;
					$element.css({
						'bottom': x + 'px',
						'left'	: y + 'px',
						'top'	: '',
						'right' : ''
					})
				}else if(x > 50 && y > 50){
					// 4
					x = 0;
					y = 0;
					$element.css({
						'bottom': x + 'px',
						'right'	: y + 'px',
						'top'	: '',
						'left'	: ''
					})
				}
				
			}).mouseleave(function(){
				
				$element.height(305);
				
				$element.css({
					'position': 'static'
				})
			});
		});
	};
})( jQuery );