(function ($) {
			var table = $("#example5").DataTable({
				searching: false,
				paging: true,
				select: false,
				//info: false,
				lengthChange: false,
			});
			$("#example tbody").on("click", "tr", function () {
				var data = table.row(this).data();
			});
		})(jQuery);
