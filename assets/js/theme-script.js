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
	})
});