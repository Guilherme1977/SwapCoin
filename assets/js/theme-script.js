$(function () {
	const swiperPartner = new Swiper("#swiper-partner .swiper-container", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#swiper-partner .swiper-button-next",
			prevEl: "#swiper-partner .swiper-button-prev",
		},
		breakpoints: {
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 30,
			}
		}
	});
	
	$("#watch-video").fancybox();
	
	$('.call-dropdownCoin').click(function () {
		callDropdownCoin($(this));
	});
	
	$(document).on("mouseup", function (e) {
		var o = $(".dropdown-coin.show");
		o.is(e.target) || 0 !== o.has(e.target).length
		|| (o.removeClass('show'))
	});
	
	$('.chooseCoin > ul > li > a').click(function () {
		changeCoin($(this));
	});
});

const callDropdownCoin = function (elm) {
	let dropdown_coinElm = elm.closest('.group-item').find('.dropdown-coin');
	if (dropdown_coinElm.hasClass('show')) {
		dropdown_coinElm.removeClass('show');
	} else {
		$('.template-7_banner .group-item .dropdown-coin').removeClass('show');
		dropdown_coinElm.addClass('show');
	}
}
var changeCoin = function (elm) {
	let img = elm.data('image'),
		name = elm.data('name');
	
	elm.parents('#form-coin .group-item').find('.call-dropdownCoin img').prop('src', img);
	elm.parents('#form-coin .group-item').find('.call-dropdownCoin .title').text(name);
	elm.parents('#form-coin .dropdown-coin').removeClass('show');
}