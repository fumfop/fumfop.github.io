; (function () {
	"use strict";

	const query = query => document.querySelector(query);
	const queryAll = query => document.querySelectorAll(query);
	const log = msg => console.log(msg);

	const fadeOut = (elem, time) => {
		elem.style.transition = `opacity ${time}ms`;
		elem.style.opacity = "0";

		setTimeout(function () {
			elem.style.display = "none";
		}, time);
	}

	const fadeIn = (elem, time) => {
		elem.style.transition = `opacity ${time}ms`;
		elem.style.display = "block";

		setTimeout(function () {
			elem.style.opacity = "1";
		}, 20);
	}

	let links = queryAll("#main-nav ul a, #links a");
	let tabs = queryAll("#links a");


	links.forEach(item => {
		item.addEventListener("click", function (e) {
			e.preventDefault();

			item.classList.add("active");
			let that = e.target;
			let boxToShowID = `#${that.href.split('#')[1]}`;

			tabs.forEach(tab => {
				tab.classList.remove("active");
			});

			that.classList.add("active");

			for (const el of queryAll(`.${that.dataset.hidethese}:not(${boxToShowID}`)) fadeOut(el, 250);
			fadeIn(query(boxToShowID), 250);
		}, false);
	});
})();