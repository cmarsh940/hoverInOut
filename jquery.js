$(document).ready(function(){
	var swap = function () {
		var $this = $(this);
		var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

	$(function() {
	    $('img.xyz').hover(swap, swap); 
	});
});