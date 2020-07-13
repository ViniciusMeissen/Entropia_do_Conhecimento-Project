//Menu
$('nav.menu-mobile h2').click(function(){
	$('nav.menu-mobile ul').slideToggle();
});

$('nav.menu-mobile li.item3').click(function(){
	$('nav.menu-mobile > ul > li.list__videos').slideToggle();
	$('nav.menu-mobile li.item3 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-mobile li.item3 h4 > i.fa-times').slideToggle();
	$('nav.menu-mobile li.item4 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-mobile > ul > li.list_slide_show').slideToggle();
});

$('nav.menu-mobile li.item4').click(function(){
	$('nav.menu-mobile > ul > li.list__slides').slideToggle();
	$('nav.menu-mobile li.item4 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-mobile li.item4 h4 > i.fa-times').slideToggle();
	$('nav.menu-mobile li.item3 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-mobile > ul > li.list_video_show').slideToggle();
});

$('nav.menu-desktop li.item3 h4').click(function(){
	$('nav.menu-desktop > ul > li.item4 > div').slideToggle();
	$('nav.menu-desktop li.item3 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-desktop li.item3 h4 > i.fa-times').slideToggle();
	$('nav.menu-desktop li.item4 h4 > i.fa-chevron-down').slideToggle();
	$('nav.slides_view ul').slideToggle();
});

$('nav.menu-desktop li.item4 h4').click(function(){
	$('nav.menu-desktop > ul > li.item3 > div').slideToggle();
	$('nav.menu-desktop li.item4 h4 > i.fa-chevron-down').slideToggle();
	$('nav.menu-desktop li.item4 h4 > i.fa-times').slideToggle();
	$('nav.menu-desktop li.item3 h4 > i.fa-chevron-down').slideToggle();
	$('nav.videos_view ul').slideToggle();
});