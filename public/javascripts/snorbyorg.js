// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var Snorbyorg = {
	
	tooltips: function(){
		$('.info-box').each(function () {
		    var distance = 10;
		    var time = 250;
		    var hideDelay = 500;
		    var hideDelayTimer = null;
		    var beingShown = false;
		    var shown = false;
		    var trigger = $('.trigger', this);
		    var popup = $('.popup', this).css('opacity', 0);

		    $([trigger.get(0), popup.get(0)]).mouseover(function () {
		      if (hideDelayTimer) clearTimeout(hideDelayTimer);
		
		      if (beingShown || shown) {
		        return;
		      } else {
		        beingShown = true;
		
		        popup.css({
		          top: -100,
		          left: 30,
		          display: 'block'
		        }).animate({
		          top: '-=' + distance + 'px',
		          opacity: 1
		        }, time, 'swing', function() {
		          beingShown = false;
		          shown = true;
		        });
		      }
		    }).mouseout(function () {
		      if (hideDelayTimer) clearTimeout(hideDelayTimer);
		      hideDelayTimer = setTimeout(function () {
		        hideDelayTimer = null;
		        popup.animate({
		          top: '-=' + distance + 'px',
		          opacity: 0
		        }, time, 'swing', function () {
		          shown = false;
		          popup.css('display', 'none');
		        });
		      }, hideDelay);
		    });
		  });
	},
	
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
	Snorbyorg.tooltips();
	
});
