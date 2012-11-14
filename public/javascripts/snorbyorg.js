// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var $style = $("<style/>").appendTo("head");

var browserCSSPrefix = "",
    animationEndEvent = "animationend";

function openModal()
{
    transtitionSupport();
    if( browserCSSPrefix == "" )
    {

        $('#top_bar').animate(
        {
            'margin-top': '0'
        }, 400, function()
        {
        // Animation complete.
        });
    }

    else
    {

        var animName = "openModal";

        insertCSSAnimation(animName, {
        0 : prefix({
        "margin-top" : "-27px",
        }),
        50 : prefix({
        "margin-top" : "0px",
        "padding-top" : "25px",
        }),
        100 : prefix({
        "margin-top" : "0px",
        "padding-top" : "8px",
        })
        });

        $('#top-bar').css(prefix({
        "animation":animName + " 1s cubic-bezier(.2,.6,.3,1)"
        }))
        .bind(animationEndEvent, function(e){
        if(e.originalEvent.animationName == animName)
        {
            $('#top-bar').css({ "margin-top" : "0" });
        }
        });
    }

}

function closeModal() {
    transtitionSupport();
    if( browserCSSPrefix == "" ) {
        $('#top-bar').animate(
        {
            'margin-top':'-27px'
        }, 400, function()
        {
            showFanion();
        });
    } else {

        var animName = "closeModal";

        insertCSSAnimation(animName, {
        0 : prefix({
        "margin-top" : "0px",
        "padding-top" : "8px",
        }),
        50 : prefix({
        "margin-top" : "0px",
        "padding-top" : "25px",
        }),
        100 : prefix({
        "margin-top" : "-27px",
        "padding-top" : "8px",
        })
        });

        $('#top-bar').css(prefix({
        "animation":animName + " 1s cubic-bezier(.2,.6,.3,1)"
        }))
        .bind(animationEndEvent, function(e){
        if(e.originalEvent.animationName == animName)
        {
            $('#top-bar').css({ "margin-top" : "-27px" });
        }
        });
    }

}

function prefix(obj)
{
        if(obj instanceof Object)
        {
            var dict = obj,
            newDict = {};
            $.each(dict,function(key , value)
            {
                newDict[prefix(key)] = value;
            });
            return newDict;
        }

    if([
    "transform",
    "animation",
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-iteration-count",
    "animation-direction",
    "animation-delay"
    ].indexOf(obj) > -1)
    obj = browserCSSPrefix + obj;
    return obj;
}

function insertCSSAnimation(name, properties)
{
        var anim = "@" + browserCSSPrefix + "keyframes " + name + " {\n";
        $.each(properties, function(progress, props)
        {
            anim += "\t" + progress + "% {\n";
            $.each(props,function(key , value)
            {
                anim += "\t\t" + key + ":" + value + ";\n";
            })
            anim += "\t" + "}\n";
        })
        anim += "}\n";
        $style.append(anim);
};

function transtitionSupport() {
    var thisBody = document.body || document.documentElement,
    thisStyle = thisBody.style,
    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
    if( support == false )
    {
        browserCSSPrefix = "";
    }
};

var Snorbyorg = {

	tooltips: function(){
		$('.show-popup').each(function () {
		    var distance = 10;
		    var time = 250;
		    var hideDelay = 500;
		    var hideDelayTimer = null;
		    var beingShown = false;
		    var shown = false;
		    var trigger = $('.trigger', this);
		    var popup = $('.popup', this).css('opacity', 0);

		    $([trigger.get(0), popup.get(0)]).mouseover(function () {

          popup.css({
            zIndex: 9999999
          });

		      if (hideDelayTimer) clearTimeout(hideDelayTimer);

		      if (beingShown || shown) {
		        return;
		      } else {
		        beingShown = true;

		        popup.css({
              zIndex: 999999,
		          top: -160,
		          left: -54,
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
          popup.css({
            zIndex: 0
          });

		      if (hideDelayTimer) clearTimeout(hideDelayTimer);
		      hideDelayTimer = setTimeout(function () {
		        hideDelayTimer = null;
		        popup.stop().animate({
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
			$.scrollTo('#top-bar', 500);
			return false;
		});

		$('#menu-inside ul li a.scroll').click(function(e) {
			e.preventDefault();
			$.scrollTo($(this).attr('href'), 500);
			return false;
		});

	},

	twitter: function(){
	  $("#twitter").getTwitter({
	    userName: "mephux",
	    numTweets: 6,
	    loaderText: "Loading Snorby Tweets&hellip;",
	    slideIn: false,
	    showHeading: false,
	    headingText: "Latest Tweets",
	    showProfileLink: true
	  });
	}

}

$(document).ready(function() {

	Snorbyorg.page_scroll();
	Snorbyorg.tooltips();
	Snorbyorg.twitter();

  $("#slides").slides({
    effect: 'fade',
    play: 5000,
  });

  $('#slides ul.pagination li').live('click', function() {
    $(this).children('a').click();
  });

  $('#video').live('click', function(event) {
    event.preventDefault();
    var $close = $('<div id="close-video" />').html('X Close Video');
    var $video = $('div#intro-video');
    var iframe = '<iframe src="http://player.vimeo.com/video/28555144?title' +
    '=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="440" height=' +
    '"333" frameborder="0"></iframe>';

    $('#close-video').remove();

    if ($video.is(':visible')) {
      $video.fadeOut('slow', function() {
        $video.empty();
      });
    } else {
      $video.fadeIn('slow', function() {
        $('#info-box .inside').prepend($close);
      }).html(iframe);
    };
  });

  $('div#close-video').live('click', function(event) {
    event.preventDefault();
    var $video = $('div#intro-video');
    $(this).remove();
    $video.fadeOut('slow', function() {
      $video.empty();
    });
  });

  $('.clickme').live('click', function(event) {
    event.preventDefault();
    if ($(this).attr('data-href')) {
      window.location = $(this).attr('data-href');
    };
  });

  $("button.clickme").hover(function () {
      $('span', this).stop().animate({
          opacity: 1
      }, 300);
  }, function () {
      $('span', this).stop().animate({
          opacity: 0
      }, 400);
  });


       // Helpers
    if($.browser.webkit)
    {
        browserCSSPrefix = "-webkit-";
        animationEndEvent = "webkitAnimationEnd";
    }
    else if($.browser.mozilla)
    browserCSSPrefix = "-moz-";
    else if($.browser.opera)
    browserCSSPrefix = "-o-";


  window.setTimeout(function() {
      openModal();
  }, 500);


  $('a.close').live('click', function(event) {
    event.preventDefault();
    closeModal();
  });

  // $('body div.snorby-source-code').repo({ user: 'snorby', name: 'snorby', branch: 'master' });

});
