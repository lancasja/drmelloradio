(function() {

	var $gridItem = $('.grid-item');

	// Remove the on-top class from all items in the grid
	function removeTop() {
		$gridItem.each(function(index) {
			var $this = $(this);

			if ($this.hasClass('on-top')) {
				$this.removeClass('on-top');
			}
		});
	}


	/*
		When mousing over a grid item, add the on-top class,
		giving it a high z-index and placing it on top of the other grid items
	*/
	$gridItem.mouseover(function() {
		removeTop();
		$(this).toggleClass('on-top');
	});


	var $detailButton = $('.grid-item .more-info');
	var $detailPane = $('#sc01-detail');
	

	// When mousing over the info button show the details pane
	$detailButton.mouseover(function() {
		$detailPane.css('display', 'block');

		$detailPane.animate({
			opacity: 1
		}, 500, function() {
			console.log('Details shown.');
		});
	});


	// When cursor leaves info button, hide detail pane
	$detailButton.mouseleave(function() {
		$detailPane.animate({
			opacity: 0
		}, 500, function() {
			$detailPane.css('display', 'none');
			console.log('Details hidden.');
		});
	});


	var $contactButton = $('#contact');
	var $contactForm = $('#contactForm');

	$contactButton.click(function() {
			
		if ($contactForm.css('display') === 'none') {
			
			$contactForm.css('display', 'block').animate({
					opacity: 1
				}, 500, function() {
					console.log('Contact form opened!');
			});
		} else {
			$contactForm.animate({
				opacity: 0
			}, 500, function() {
				$contactForm.css('display', 'none');
			});
		}
	});




})();