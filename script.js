
$(document).ready(function (){
	$(".loginWay").click(function (){
		var way = $(this).attr("data-loginway");

		console.log(way);

		LoginPanelSwitch(way);
	});
});


function LoginPanelSwitch(activeWay) {
	var index = $("#"+activeWay).parent().index();
	var offset = index * 500;
	
	$(".panelSlider").css({"transform": "translate3d(-" + offset + "px, 0, 0)"})
}