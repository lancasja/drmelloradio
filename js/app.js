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
})();