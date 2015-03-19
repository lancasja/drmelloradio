(function() {

	/*
		Freewall
		http://vnjs.net/www/project/freewall
	*/
	var wall = new freewall("#grid");
	wall.fitWidth();
	wall.reset({
		selector: '.grid-item',
		animate: true,
		cellW: 300,
		cellH: 'auto',
		onResize: function() {
			wall.fitWidth();
		}
	});

})();

(function() {
	var modal = $('#info_overlay');
	var close = $('#info_overlay .close');

	function closeModal() {
		modal.animate({
			top: '-110%',
			opacity: 0
		}, 600, function() {
			console.log('Closed!');
		});
	}

	function openModal() {
		modal.animate({
			top: '0',
			opacity: 1
		}, 600, function() {
			console.log('Opened!');
		});
	}

	close.click(function() {
		closeModal();
	});

	$('.grid-item').each(function(index) {
		$(this).click(function() {
			openModal();
		});
	});


})();