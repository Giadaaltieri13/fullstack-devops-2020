$(document).ready(function() {
	
	$('input').click(function(event) {
		$(this).select();
	});

	$("#frmConvert").submit(function(event) {
		var r = $("#cr").val();
		var g = $("#cg").val();
		var b = $("#cb").val();

		var hex = rgbToHex(r, g, b);

		$("#ch").val(hex);
		$("body").css('background-color', '#' + hex);

		return false;
	});

});