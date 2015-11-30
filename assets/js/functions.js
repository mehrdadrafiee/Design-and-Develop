$(function() {
	mentoringBubbleClick();
});

function mentoringBubbleClick() {
	$('.face').on('click', function() {
		console.log("face clicked!");
		var $this = $(this),
				faceTop = $this.position().top,
				vertMath = -1 * (faceTop - 230);

		console.log(vertMath);

		$this.parent().css('top', + vertMath + 'px')

		$this.addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
	});

	// when I click a face
	// get the distance of the face from its parent
	// move the whole container up 115px + the count
	// add the is-open class to the face, pop the ballon


}

$(window).scroll(function () {
	youtubeVidScroll();
	startMentoring();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();

	$('.video-strip').css('background-position', 'center -' + wScroll + '0px');
}

function startMentoring() {
	var wScroll = $(window).scrollTop();

	if($('section.mentoring').offset().top - 500 < wScroll) {
		$('.faces').addClass('launched');
		setTimeout(function() {
			$('.face:nth-child(3)').addClass('has-bubble-open');
		}, 400);
	}
};