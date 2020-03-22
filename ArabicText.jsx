{	
	
// Arabic Text
// Write your arabic text then press OK, The script will add your
// text to the actice composition.
// Marwen Ricky
// marw3nricky@gmail.com

function createUI(thisObj) {
var myPanel = ( thisObj instanceof Panel) ? thisObj : new Window("palette", "Arabic Text", [100, 100, 350, 270]);
input_text = myPanel.add("edittext", [10, 10, 240, 130],"",{multiline:true});
ok_button =  myPanel.add("button", [10, 140, 100, 160], "Ok");
ok_button.onClick = checkText;
input_text.onChanging = input_text.onChange = getText;

//ADDED THIS CODE TO LET THE WINDOW RESIZE//
input_text.alignment = ["fill","fill"];
ok_button.alignment = ["center","bottom"];
myPanel.layout.resize();
myPanel.layout.layout(true);
myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
//////////////////////////////////////////////////

return myPanel;
}
function checkText(){
	con_text="";
	par_size="";
	if(in_text == "" )
			alert ("No Input Text! ", "Error");
	else{
		activeItem = app.project.activeItem;
		if (activeItem != null && (activeItem instanceof CompItem)){
			app.beginUndoGroup("ArabicText");
			convertText();
			multiLine();
			activeItem.layers.addText("01").property("Source Text").setValue(con_text);
		} else{
			alert ("Please Select A Comp!", "Error");
		}
	}
}
function getText(){
	in_text = input_text.text;
}
function convertText(){
	for(i=1;i<in_text.length+1;i++){
		if(i > 1){
				nxt = in_text[in_text.length-(i-1)];
				if(check_tashkeel(nxt))
					nxt = in_text[in_text.length-(i-2)];
			}
		else
			nxt = -1;
		cur = in_text[in_text.length-i];
		if(i < in_text.length){
			prv = in_text[in_text.length-(i+1)];
			if(check_tashkeel(prv))
					prv = in_text[in_text.length-(i+2)];
			}
		else
			prv = -1;
		var indx_cur = index_of(cur);

		if(indx_cur < 0)
			con_text+=cur;
		else if((cur == 'ا' && prv == 'ل')||(cur == 'أ' && prv == 'ل')||(cur == 'إ' && prv == 'ل')||(cur == 'آ' && prv == 'ل'))
			continue;
		else if(cur == 'ل' && nxt == 'ا' && !check_con(prv))
			con_text+='\uFEFB';
		else if(cur == 'ل' && nxt == 'ا' && check_con(prv))
			con_text+='\uFEFC';
		else if(cur == 'ل' && nxt == 'أ' && !check_con(prv))
			con_text+='\uFEF7';
		else if(cur == 'ل' && nxt == 'أ' && check_con(prv))
			con_text+='\uFEF8';
		else if(cur == 'ل' && nxt == 'إ' && !check_con(prv))
			con_text+='\uFEF9';
		else if(cur == 'ل' && nxt == 'إ' && check_con(prv))
			con_text+='\uFEFA';
		else if(cur == 'ل' && nxt == 'آ' && !check_con(prv))
			con_text+='\uFEF5';
		else if(cur == 'ل' && nxt == 'آ' && check_con(prv))
			con_text+='\uFEF6';
		else if(!check_con(prv) && index_of(nxt)<0)
			con_text+=form_0[indx_cur];
		else if(!check_con(prv) && index_of(nxt)>=0)
			con_text+=form_2[indx_cur];
		else if(check_con(prv) && index_of(nxt)>=0)
			con_text+=form_3[indx_cur];
		else if(check_con(prv) && index_of(nxt)<0)
			con_text+=form_1[indx_cur];

	}
}
function multiLine(){
	var push="",pop="",cur="";
	for(g=0;g<con_text.length;g++){
		cur = con_text[g];
		if(cur == '\n' |cur == '\r' ){
			push='\r\n'+pop+push;
			pop="";
			}
		else
			pop+=cur;
		}
	con_text=pop+push;
}

function index_of(ch){
	indx = -1;
	for(j=0;j<form_0.length;j++){
		if(ch==form_0[j])
		indx=j;
	}
	return indx;
}
function check_tashkeel(ch){
	indx = false;
	for(n=0;n<form_0.length;n++){
		if(ch==tashkeel[n])
		indx=true;;
	}
	return indx;
}
function check_con(ch){
	indx = false;
	for(m=0;m<form_0.length;m++){
		if(ch==form_0[m])
		indx=true;
	}
	for(k=0;k<noncon.length;k++){
		if(ch==noncon[k])
 		indx=false;
 	}
	return indx;
}

var cur=-1,nxt=-1,prv=-1;
var indx;
var ch = '';
var form = 3;
var in_text = "";
var in_num = "";
var con_text = "";
var par_size = "";
var input_text;
var ok_button;
var line_size;
var activeItem;
var noncon = ['ا','ة','د','ذ','ر','ز','و','ى','ؤ','ء','أ','إ','ﺁ'];
var tashkeel = ['َ','ً','ِ','ٍ','ُ','ٌ','ّ'];
//Isolated form
var form_0 =  ['ا'         ,'ب'       ,'ة'         ,'ت'       ,'ث'		  ,'ج'        ,'ح'        ,'خ'        ,'د'         ,'ذ'         ,'ر'         ,'ز'         ,'س'      ,'ش'      ,'ص'       ,'ض'       ,'ط'       ,'ظ'        ,'ع'        ,'غ'        ,'ف'        ,'ق'       ,'ك'         ,'ل'        ,'م'        ,'ن'        ,'ه'         ,'و'        ,'ي'        ,'ى'       ,'ؤ'        ,'ئ'       ,'أ'          ,'إ'          ,'آ'         ];
//Final form
var form_1 =  ['\uFE8E','\uFE90','\uFE94','\uFE96','\uFE9A','\uFE9E','\uFEA2','\uFEA6','\uFEAA','\uFEAC','\uFEAE','\uFEB0','\uFEB2','\uFEB6','\uFEBA','\uFEBE','\uFEC2','\uFEC6','\uFECA','\uFECE','\uFED2','\uFED6','\uFEDA','\uFEDE','\uFEE2','\uFEE6','\uFEEA','\uFEEE','\uFEF2','\uFEF0','\uFE86','\uFE8A','\uFE84','\uFE88','\uFE82'];
//Initial form
var form_2 =  ['\uFE8D','\uFE91','\uFE94','\uFE97','\uFE9B','\uFE9F','\uFEA3','\uFEA7','\uFEA9','\uFEAB','\uFEAD','\uFEAF','\uFEB3','\uFEB7','\uFEBB','\uFEBF','\uFEC3','\uFEC7','\uFECB','\uFECF','\uFED3','\uFED7','\uFEDB','\uFEDF','\uFEE3','\uFEE7','\uFEEB','\uFEED','\uFEF3','\uFEEF','\uFE85','\uFE8B','\uFE83','\uFE87','\uFE81'];
//Medial form
var form_3 =  ['\uFE8E','\uFE92','\uFE94','\uFE98','\uFE9C','\uFEA0','\uFEA4','\uFEA8','\uFEAA','\uFEAC','\uFEAE','\uFEB0','\uFEB4','\uFEB8','\uFEBC','\uFEC0','\uFEC4','\uFEC8','\uFECC','\uFED0','\uFED4','\uFED8','\uFEDC','\uFEE0','\uFEE4','\uFEE8','\uFEEC','\uFEEE','\uFEF4','\uFEF0','\uFE86','\uFE8C','\uFE84','\uFE88','\uFE82'];
var myToolsPanel = createUI(this);
if (myToolsPanel != null && myToolsPanel instanceof Window) {
myToolsPanel.show();
}
}
