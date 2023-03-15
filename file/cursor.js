/**
 @author JMx
 date 2018-01-29
 用于textArea中鼠标的移动，定位等
*/
var cursor = {
	position: 0, 
	//移动
	move : function(ele, step) {
		var newPos = ele.selectionStart + step;
		var start = end = newPos < 0 ? 0 : newPos;
		ele.setSelectionRange(start, end);
		ele.focus();
	},

	position : function(ele) {
		return ele.selectionStart;
	},
	//添加内容
	add_textarea : function(ele, str, pos) {
		pos = pos === undefined ? this.position : pos;
		var content = ele.value;
		ele.value = content.substring(0, pos) + str + content.substring(pos, content.length);
		this.position += str.length;
		this.focus(ele);
	},
	//始终保持光标在内容处
	focus : function(ele) {
		ele.setSelectionRange(this.position, this.position);
		ele.focus();
	}

}