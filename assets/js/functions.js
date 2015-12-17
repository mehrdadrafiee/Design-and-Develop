$(function() {
	mentoringBubbleClick();
	setInterval(function(){articleTada()}, 4000);
});

function articleTada() {
	var randNum = Math.floor(Math.random() * $('.article-thumb').length + 1)

	$('.article-thumb').eq(randNum).addClass('is-emph')
		.siblings().removeClass('is-emph');
}

function mentoringBubbleClick() {
	$('.face').on('click', function() {
		console.log("face clicked!");
		var $this = $(this),
				faceTop = $this.position().top,
				vertMath = -1 * (faceTop - 230),
				faceLeft = $this.position().left,
				horizMath = 0 - faceLeft;

		console.log(vertMath);

		if($(window).width() > 640) {
			$this.parent().css('top', + vertMath +'px');
		} else {
			if($this.hasClass('back-btn')) {
				mentoringNarrowStart();
			} else {
				$this.parent().css('left', + horizMath +'px');
			}
		}
		if(!$this.hasClass('back-btn')) {
		$this.addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
			}
	});

	// when I click a face
	// get the distance of the face from its parent
	// move the whole container up 115px + the count
	// add the is-open class to the face, pop the ballon


}

$(window).scroll(function () {
	youtubeVidScroll();
	startMentoring();
	startArticles();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();

	$('.video-strip').css('background-position', 'center -' + wScroll + '0px');
}

function startArticles() {
	var wScroll = $(window).scrollTop();

	if($('section.articles').offset().top - $(window).height()/1.2 < wScroll) {
		$('.article-thumb').each(function(i) {
			setTimeout(function() {
				$('.article-thumb').eq(i).addClass('is-visible');
		}, 100 * i);
		});
	}
}

function startMentoring() {
	var wScroll = $(window).scrollTop();

	if($('section.mentoring').offset().top - $(window).height()/2 < wScroll) {
		if($(window).width() > 640) {
		$('.faces').addClass('launched');
		if(!$('.face').hasClass('has-bubble-open') && !$this.hasClass('back-btn')) {
			setTimeout(function() {
				$('.face:nth-child(3)').addClass('has-bubble-open');
			}, 400);
		}
	} else {
		mentoringNarrowStart();
	}
}
};


function mentoringNarrowStart() {
	$('.faces').css({
		'top': '230px',
		'left': '0px'
	});
	$('.face').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
	$('.faces').css({
		'top': '230px',
		'left': '0px'
	});
	$('.face:nth-child(3)').addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');
}

$(window).resize(function() {
	if($(window).width() > 640) {
		mentoringWideStart();
	} else {
		mentoringNarrowStart();
	}
});