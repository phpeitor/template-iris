function assignedDoctor() {
			/*  testimonial one function by = owl.carousel.js */
			jQuery(".assigned-doctor2").owlCarousel({
				loop: false,
				margin: 30,
				nav: true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: false,
				dots: false,
				navText: [
					'<i class="fa fa-caret-left"></i>',
					'<i class="fa fa-caret-right"></i>',
				],
				responsive: {
					0: {
						items: 1,
					},

					480: {
						items: 1,
					},

					991: {
						items: 2,
					},
					1680: {
						items: 2,
					},
				},
			});
		}

		jQuery(window).on("load", function () {
			setTimeout(function () {
				assignedDoctor();
			}, 1000);
		});

function pieChart() {
			var data = {
				labels: ["35%", "55%", "10%"],
				series: [30, 25, 15],
			};

			var options = {
				labelInterpolationFnc: function (value) {
					return value[0];
				},
			};

			var responsiveOptions = [
				[
					"screen and (min-width: 230px)",
					{
						chartPadding: 10,
						donut: true,
						labelOffset: 40,
						donutWidth: 50,
						labelDirection: "explode",
						labelInterpolationFnc: function (value) {
							return value;
						},
					},
				],
				[
					"screen and (min-width: 230px)",
					{
						labelOffset: 60,
						chartPadding: 20,
					},
				],
			];

			new Chartist.Pie("#pie-chart", data, options, responsiveOptions);
		}
		jQuery(window).on("load", function () {
			setTimeout(function () {
				pieChart();
			}, 1000);
		});
