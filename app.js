String.prototype.getValue = function (parm) {
	var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
	var r = this.substr(this.indexOf("\?") + 1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function getArg(argname) {
	var url = window.location.href;
	var argvalue = url.getValue(argname);
	return argvalue;
}

function logout() {
	window.location.href = "./login.html";
}