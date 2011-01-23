// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var Snorbyorg = {
	
	page_scroll: function(){
		
		$('div.top').live('click', function(e) {
			e.preventDefault();
			$.scrollTo('#menu', 500);
			return false;
		});
		
		$('#menu-inside ul li a.scroll').click(function(e) {
			e.preventDefault();
			$.scrollTo($(this).attr('href'), 500);
			return false;
		});
		
	}
	
}

$(document).ready(function() {
	
	Snorbyorg.page_scroll();
	
});
