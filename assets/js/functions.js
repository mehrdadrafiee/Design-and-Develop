$(function() {
	mentoringBubbleClick();
});

function mentoringBubbleClick() {
	$('.face').on('click', function() {
		console.log("face clicked!");
		$(this).addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
	});



	//when I click a face
	//get the distance of the face from its parent
	//move the whole container up 115px + the count
	//add the is-open class to the face, pop the ballon


}

$(window).scroll(function () {
	youtubeVidScroll();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();

	$('.video-strip').css('background-position', 'center -' + wScroll + '0px');
}