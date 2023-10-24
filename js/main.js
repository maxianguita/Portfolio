

/* Sticky header*/
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

/* Menu Checked */
$('.menu').on('click', function () {
	$("#nav-toggle").prop('checked', false);
});

/* Smooth scroll*/
$('.menu li a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(id).offset().top - 300
	}, 1000);
});

/* Top background parallax */
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionX = offset * -0.9 + "px";
})

$(document).ready(function () {

	/* About me slider */
	$('.about-me-slider').slick({
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Project slider */
	$('.project-slider').slick({
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

});

var count = 0;
$(window).scroll(function (e) {

	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if (statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (count == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
			count = 1;
		}
	}
});