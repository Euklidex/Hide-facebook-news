function blockAndDisplay() {
    var $feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');

	 //remove elements
    $feed.children().remove();
    $('.ticker_stream').remove();
    $('.ego_column').remove();
	$('#stream_pagelet').remove();
    $('#pagelet_games_rhc').remove();
    $('#pagelet_trending_tags_and_topics').remove();
    $('#pagelet_canvas_nav_content').remove();
	
	//change color
	$('._2s1x ._2s1y').css('background-color', 'Gold  ');
	$('._2s1x ._2s1y').css('border-bottom', 'Gold  ');
	
	//change shortcut icon
	$('link[rel="shortcut icon"]').attr('href', 'http://icons.iconarchive.com/icons/graphics-vibe/hot-burning-social/256/facebook-icon.png');
}

window.setInterval(blockAndDisplay, 100);
