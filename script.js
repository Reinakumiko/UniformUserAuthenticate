$(document).ready(function (){
	$(".loginWay").click(function (){
		var way = $(this).attr("data-loginway");
		var isSupport = $(this).attr("data-notsupport");

		if(isSupport != null && isSupport == "true") {
			MessageDialog.GetDialog().Display("发生错误", "该登录方式当前不支持，请更换其他登录方式。");
			
			MessageDialog.OnClickButton(function () {
				//Do something... 
			});
			return;
		}

		LoginPanelSwitch(way);
	});
});


function LoginPanelSwitch(activeWay) {
	var index = $("#"+activeWay).parent().index();
	var offset = index * 500;

	$(".panelSlider").css({"transform": "translate3d(-" + offset + "px, 0, 0)"})
}

function DisplayMessageDialog (title, msg) {
}

var MessageDialog = {
	dialogButtonNo: null,
	dialogButtonYes: null,
	dialogButtonClose: null,
	dialogElement: null,
	dialogLayout: null,
	isHide: true,

	GetDialog: function () {
		this.panelControlButton = $(".panelControlButton");
		this.dialogElement = $(".messageBox");
		this.dialogLayout = $(".messageBoxLayout");

		return this;
	},
	Display: function (title, msg) {
		var panelTitle = this.dialogElement.find(".dialogPanel .panelTitle");
		var panelDescption = this.dialogElement.find(".dialogPanel .panelDescption");
		var panelContainer = this.dialogElement.find(".dialogPanel .panelContainer");

		panelTitle.html(title);
		panelContainer.html(msg);

		this.dialogLayout.click(function () { MessageDialog.Hide()});
		this.panelControlButton.click(function () { MessageDialog.Hide() });


		this.dialogLayout.show();
		this.dialogElement.show();

		this.isHide = false;

		console.log(this);
		console.log("show message dialog");
	},
	Hide: function () {
		this.dialogLayout.hide();
		this.dialogElement.hide();

		this.isHide = true;
	},
	Toggle: function () {
		var obj = this.GetDialog();
		return obj.isHide ? obj.Display() : obj.Hide();
	},
	OnClickButton: function(buttonName) {}
}