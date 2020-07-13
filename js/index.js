//Ver mais
$('div.viewslide h4.vermais').click(function vermais(){
	$('div.viewslide h4.vermais').slideToggle();
	$('div.viewslide h4.vermenos').slideToggle();
	$('.blockslid').slideToggle();
	$('div.viewslide h4.vermenos').click(function(){
		$('div.viewslide h4.vermenos').slideToggle();
		$('div.viewslide h4.vermais').slideToggle();
		$('.blockslid').slideToggle();
		start.vermais();
	});
});