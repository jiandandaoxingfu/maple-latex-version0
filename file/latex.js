//初始化参数
num = 1, s = 0;//num: 菜单标号,
var output = document.getElementById('output');
var input = document.getElementById('input');
var sub_menu = document.getElementById('sub_menu');
var lis = document.getElementsByClassName('icon');
//background-position
var position = [
	[[0, 30, 60, 90, 120, 150, 180, 220, 247, 274, 303, 333, 380, 
		420, 465, 510, 555, 598, 675, 705, 735], [2, -24]],					 		
	[[0, 29, 58, 86, 114, 142, 179, 207, 236, 263, 291, 319, 347, 376, 404, 
		433, 460, 488, 516, 544, 572, 613, 641], [2, -25]],					 		
	[[0, 29, 57, 84, 112, 141, 170, 197, 225, 251, 
		280, 318, 347, 375, 404, 440, 468, 496], [2, -24]],					 		
	[[18, 81, 147, 211, 256, 299, 344, 389, 433, 475, 518, 
		564, 608, 652, 696], [2, -24]],					 		
	[[86,114,142,245,273,302], [-2, -24]],					 		
	[[30,58,86,115,142,171,199,227,253,301,330,
		358,385,414,442,470,498,547,572], [1, -26]],				 		 				 		
	[[0,30,56,84,113,142,169,197,226,253,281,308,337,
		365,393,421,458,487,529,565,601,637], [3, -27]],
	[[3,30,58,86,115,142,171,199,227,253,296,324,352,
		382,411,438,466,493,532,562,593,713,743,779,809,837], [1, -26]],				 			
	[[2,29,58,85,114,142,169,197,226,254,282,310,336,375,
		404,431,460,487,515,544,572,601,628,657,684],[2, -24]],					 		
	[[2,29,58,85,114,142,169,197,226,254,282,310,336,366,393,
		422,450,477,505,533,562,590,617,648,673,702,729],[2, -24]],					 		
	[[2,29,58,85,114,142,172,197,226,254,282,310,338,366,393,422,
		450,477,505,533,562,590,617,648,673,702,729], [2, -24]]
	];
//latex部分符号代码
var latex = [	
	["|\\sum|\\prod|\\coprod|\\int|\\oint|\\bigcap|\\bigcup|\\hat{}|\\check{}|\\breve{}|\\acute{}|\\grave{}|\\widetilde{}|\\widehat{}|\\overleftarrow{}|\\overrightarrow{}|\\overline{}|\\overbrace{}|\\mathds{}|\\mathbb{}|\\mathbf{}|\\bigsqcup|\\bigvee|\\bigwedge|\\bigodot|\\bigotimes|\\bigoplus|\\biguplus|\\tilde{}|\\bar{}|\\vec{}|\\dot{}|\\ddot{}|\\underbrace{}|\\underline{}|\\sqrt{}|\\sqrt[n]{}|'|\\frac{}{}|\\mathcal{}|\\mathfrak{}|\\mathrm{}"],
	['|\\Gamma|\\Delta|\\Theta|\\Lambda|\\Xi|\\Pi|\\alpha|\\beta|\\gamma|\\delta|\\epsilon|\\varepsilon|\\zeta|\\eta|\\theta|\\vartheta|\\iota|\\kappa|\\lambda|\\mu|\\nu|\\digamma|\\beth|\\Sigma|\\Upsilon|\\Phi|\\Psi|\\Omega|S|\\xi|\\beta|\\pi|\\varpi|\\rho|\\varrho|\\sigma|\\varsigma|\\tau|\\upsilon|\\phi|\\varphi|\\chi|\\psi|\\omega|\\gimel|\\daleth'],
	['|\\aleph|\\hbar|\\imath|\\jmath|\\ell|\\wp|\\Re|\\Im|\\prime|\\emptyset|\\angle|\\flat|\\natural|\\sharp|.|\\dag|\\ddag|\\S|\\infty|\\partial|\\nabla|\\triangle|\\forall|\\exists|\\neg|\\surd|\\top|\\bot|\\backslash|\\clubsuit|\\diamondsuit|\\heartsuit|\\spadesuit|\\P|\\copyright|\\pounds'],
	['|\\arccos|\\arcsin|\\arctan|\\arg|\\cos|\\cosh|\\cot|\\coth|\\csc|\\det|\\dim|\\exp|\\gcd|\\hom|\\inf|\\lim|\\liminf|\\limsup|\\ker|\\lg|\\ln|\\log|\\max|\\min|\\sec|\\sin|\\sinh|\\sup|\\tan|\\tanh '],
	['|\\lfloor|\\lceil|\\langle|\\uparrow|\\downarrow|\\updownarrow|\\rfloor|\\rceil|\\rangle|\\Uparrow|\\Downarrow|\\Updownarrow '],
	['|\\leq|\\prec|\\preceq|\\ll|\\subset|\\subseteq|\\sqsubseteq|\\in|\\vdash|\\equiv|\\sim|\\simeq|\\asymp|\\approx|\\cong|\\neq|\\doteq|\\lhd|\\rhd|\\geq|\\succ|\\succeq|\\gg|\\supset|\\supseteq|\\sqsupseteq|\\ni|\\dashv|\\models|\\perp|\\mid|\\parallel|\\smile|\\frown|\\propto|\\bowtie|\\unlhd|\\unrhd '],
	['|\\pm|\\mp|\\times|\\div|\\ast|\\star|\\circ|\\bullet|\\cdot|\\cap|\\cup|\\uplus|\\sqcap|\\sqcup|\\vee|\\wedge|\\nearrow|\\searrow|\\longrightarrow|\\longleftarrow|\\longleftrightarrow|\\longmapsto|\\setminus|\\wr|\\diamond|\\bigtriangleup|\\bigtriangledown|\\triangleleft|\\triangleright|\\oplus|\\ominus|\\otimes|\\oslash|\\odot|\\bigcirc|\\dagger|\\ddagger|\\amalg|\\nwarrow|\\swarrow|\\Longrightarrow|\\Longleftarrow|\\Longleftrightarrow '],
	['|\\leftarrow|\\Leftarrow|\\rightarrow|\\Rightarrow|\\leftrightarrow|\\Leftrightarrow|\\mapsto|\\hookleftarrow|\\leftharpoonup|\\leftharpoondown|\\leftleftarrows|\\rightrightarrows|\\leftrightarrows|\\rightleftarrows|\\Lleftarrow|\\Rrightarrow|\\leftrightharpoons|\\rightleftharpoons|\\circlearrowleft|\\circlearrowright|\\dashleftarrow|\\upuparrows|\\downdownarrows|\\nleftarrow|\\nrightarrow|\\nLeftarrow|\\rightleftharpoons|\\hookrightarrow|\\rightharpoonup|\\rightharpoondown|\\uparrow|\\Uparrow|\\downarrow|\\Downarrow|\\updownarrow|\\Updownarrow|\\twoheadleftarrow|\\twoheadrightarrow|\\leftarrowtail|\\rightarrowtail|\\looparrowleft|\\looparrowright|\\curvearrowleft|\\curvearrowright|\\upharpoonleft|\\upharpoonright|\\downharpoonleft|\\multimap|.|\\nRightarrow|\\nleftrightarrow|\\nLeftrightarrow '],
	['|\\hbar|\\hslash|\\backprime|\\varnothing|\\vartriangle|\\triangledown|\\circledS|\\bigstar|\\angle|\\sphericalangle|\\measuredangle|\\nexists|\\Game|\\dotplus|\\smallsetminus|\\ltimes|\\rtimes|\\Cap|\\Cup|\\boxplus|\\leftthreetimes|\\rightthreetimes|\\curlywedge|\\curlyvee|\\circleddash|\\blacktriangle|\\blacktriangledown|\\square|\\blacksquare|\\lozenge|\\blacklozenge|\\complement|\\mho|\\eth|\\Finv|\\diagup|\\diagdown|\\Bbbk|\\barwedge|\\veebar|\\doublebarwedge|\\boxminus|\\boxtimes|\\boxdot|\\circledast|\\circledcirc|\\centerdot|\\divideontimes|\\intercal '],
	['|\\leqq|\\geqq|\\leqslant|\\geqslant|\\eqslantless|\\eqslantgtr|\\lesssim|\\gtrsim|\\lessapprox|\\gtrapprox|\\approxeq|\\eqcirc|\\risingdotseq|\\circeq|\\fallingdotseq|\\triangleq|\\backsim|\\thicksim|\\backsimeq|\\thickapprox|\\subseteqq|\\supseteqq|\\succapprox|\\vartriangleleft|\\vartriangleright|\\trianglelefteq|\\trianglerighteq|\\lessdot|\\gtrdot|\\lll|\\ggg|\\lessgtr|\\gtrless|\\lesseqgtr|\\gtreqless|\\lesseqqgtr|\\gtreqqless|\\doteqdot|\\Subset|\\Supset|\\sqsubset|\\sqsupset|\\preccurlyeq|\\succcurlyeq|\\curlyeqprec|\\curlyeqsucc|\\precsim|\\succsim|\\precapprox|\\smallfrown|\\bumpeq|\\Bumpeq|\\shortmid|\\shortparallel '],
	['|\\nless|\\ngtr|\\nleq|\\ngeq|\\nleqslant|\\ngeqslant|\\nleqq|\\ngeqq|\\lneq|\\gneq|\\npreceq|\\nsucceq|\\precneqq|\\succneqq|\\precnsim|\\succnsim|\\precnapprox|\\succnapprox|\\nsim|\\ncong|\\ntrianglelefteq|\\ntrianglerighteq|\\nsubseteq|\\nsupseteq|\\nsubseteqq|\\nsupseteqq|\\subsetneq|\\lneqq|\\gneqq|\\lvertneqq|\\gvertneqq|\\lnsim|\\gnsim|\\lnapprox|\\gnapprox|\\nprec|\\nsucc|\\nshortmid|\\nshortparallel|\\nmid|\\nparallel|\\nvdash|\\nvDash|\\nVdash|\\nVDash|\\ntriangleleft|\\ntriangleright|\\supsetneq|\\varsubsetneq|\\varsupsetneq|\\subsetneqq|\\supsetneqq|\\varsubsetneqq|\\varsupsetneqq ']
];

//修改latex.
(function() {
	for(let i=0; i<latex.length; i++) {
		var a = latex[i][0];
		a = a.split('|');
		latex[i] = a.slice(1,a.length);
	};
})();

//生成图标子菜单	
(function() {
	var str = '';			
	var c = 0;
	for(let i=0; i<4; i++) {
		str += '<li><ul>';
		for(let j=0; j<14; j++) {
			str += '<li class="icon" index="' + c++ + '"></li>';
		}
		str += '</ul></li>';				
	}
	sub_menu.innerHTML = str;
})();


//把latex代码显示出来
function show() {				
	output.innerHTML = input.value.replace(/\n/g,"<br />");
	MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
}

//更换图标
function change_submenu(index) {
	var pos = position[index-1];
	s = 0;
	for(let i=0; i<lis.length; i++) {
		lis[i].style['background-image'] = "url(file/icons/icon" + index + ".PNG)";
		lis[i].style['background-repeat'] = "no-repeat";
	}
	for(let j=0; j<2; j++){
		for(let i=0; i<pos[0].length; i++) {
			lis[s++].style['background-position'] = -1.5 * pos[0][i] + "px " + 1.5 * pos[1][j] + "px";
			lis[s].style['border'] = "1px solid gray";
		}
	}
	setTimeout('clear()', 10);			
}

//清除没有使用的图标
function clear() {
	for(let j=s; j<lis.length; j++) {
		lis[s++].style['background-image'] = "";
		try {
			lis[s].style['border'] = "none";
		} catch(e) {
			console.log('nothing');
		}
	}
}

//添加示例，2s后删除
(function(){
	input.value ='示例(2s后消失):\n\\begin{equation*}\r\nx^2+y^2 =1\\\\\r\n\\frac{\\partial{u}}{\\partial{x}}=u_x\\\\\r\n\\sum^n_{i=1}e^{\\eta_i}e^{\\eta_j}=1\\\\\r\n\\lim\\limits_{x \\in E}f(x)=\\infty\r\n\\end{equation*}'
	show();
	setTimeout('input.value="";show();', 2000)
})();

//点击事件监听
document.addEventListener('click', function(e) {
	cursor.position = input.selectionStart;
	var ele = e.target;
	var className = ele.className || -1;
	if(className === -1) {return;}
	var index = parseInt(e.target.getAttribute('index'));
	if(num !== -1) {
		if(className ==='menu_btn') {	
			num = index;		
			change_submenu(num);
		} else if(className === 'icon') {
			cursor.add_textarea(input, latex[num-1][index]);
		} else if(className === 'punctuation') {
			cursor.add_textarea(input, punctuation[index]);
		}
	}
});


change_submenu(num);