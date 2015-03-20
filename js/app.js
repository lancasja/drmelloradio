(function() {

	var $gridItem = $('.grid-item');

	function removeTop() {
		$gridItem.each(function(index) {
			var $this = $(this);

			if ($this.hasClass('on-top')) {
				$this.removeClass('on-top');
			}
		});
	}

	$gridItem.mouseover(function() {
		removeTop();
		$(this).toggleClass('on-top');
	});


	var $detailButton = $('.grid-item .more-info');
	var $detailPane = $('#sc01-detail');
	
	$detailButton.mouseover(function() {
		$detailPane.css('display', 'block');

		$detailPane.animate({
			opacity: 1
		}, 500, function() {
			console.log('Details shown.');
		});
	});

	$detailButton.mouseleave(function() {
		$detailPane.animate({
			opacity: 0
		}, 500, function() {
			$detailPane.css('display', 'none');
			console.log('Details hidden.');
		});
	});
})();