"undefined"==typeof console&&(console=function(){return this},console.debug=function(a){alert(a)});CHIM=function(){return this};Mudim=function(){return this};Mudim.DISPLAY_ID="mudim-off mudim-vni mudim-telex mudim-viqr mudim-mix mudim-auto".split(" ");Mudim.SPELLCHECK_ID="mudim-checkspell";Mudim.ACCENTRULE_ID="mudim-accentrule";CHIM.CHAR_A="A";CHIM.CHAR_a="a";CHIM.CHAR_E="E";CHIM.CHAR_e="e";CHIM.CHAR_U="U";CHIM.CHAR_u="u";CHIM.CHAR_G="G";CHIM.CHAR_g="g";CHIM.CHAR_Q="Q";CHIM.CHAR_q="q";
CHIM.CHAR_y="y";CHIM.CHAR_Y="Y";CHIM.CHAR_i="i";CHIM.CHAR_I="I";CHIM.CHAR_0x80=String.fromCharCode(128);CHIM.vowels="AIUEOYaiueoy";CHIM.separators=" !@#$%^&*()_+=-{}[]|\\:\";'<>?,./~`\r\n\t";CHIM.off=0;CHIM.buffer=[];CHIM.dirty=!1;CHIM.CharIsUI=function(a){var b,d=CHIM.UI,a=a.charCodeAt(0);for(b=0;0!=d[b]&&d[b]!=a;b++);return 0!=d[b]?b:-1};CHIM.CharIsO=function(a){var b,d=CHIM.O,a=a.charCodeAt(0);for(b=0;0!=d[b]&&d[b]!=a;b++);return 0!=d[b]?b:-1};
CHIM.CharPriorityCompare=function(a,b){var d=CHIM.VN,e,f=-1,g=-1,h;e=0;for(h=a.charCodeAt(0);0!=d[e]&&d[e]!=h;e++);0!=d[e]&&(f=e);e=0;for(h=b.charCodeAt(0);0!=d[e]&&d[e]!=h;e++);d[e]&&(g=e);return f-g};CHIM.SetCharAt=function(a,b){CHIM.buffer[a]=String.fromCharCode(b)};CHIM.Speller=function(){return this};CHIM.Speller.enabled=!0;CHIM.Speller.position=0;CHIM.Speller.count=0;CHIM.Speller.vowels=[];CHIM.Speller.lasts=[];CHIM.Speller.Toggle=function(){CHIM.Speller.enabled=!CHIM.Speller.enabled;Mudim.SetPreference()};
CHIM.Speller.Set=function(a,b){CHIM.Speller.vowels[CHIM.Speller.count]=CHIM.Speller.position;CHIM.Speller.lasts[CHIM.Speller.count++]=b;CHIM.Speller.position=a};CHIM.Speller.Clear=function(){CHIM.Speller.position=-1;CHIM.Speller.count=0};CHIM.Speller.Last=function(){return CHIM.Speller.lasts[CHIM.Speller.count-1]};Mudim.consonants="BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz";Mudim.spchk="AIUEOYaiueoy|BDFJKLQSVWXZbdfjklqsvwxz|'`~?.^*+=";Mudim.vwchk="|oa|uy|ue|oe|ou|ye|ua|uo|ai|ui|oi|au|iu|ia|eu|ie|ao|eo|ay|uu|io|yu|";
Mudim.nvchk="FfJjWwZz";Mudim.separators="!@#$%^&*()_+=-{}[]|\\:\";'<>?,./~`";Mudim.tailConsonantsPattern="|c|ch|p|t|m|n|ng|nh|";
Mudim.CheckSpell=function(a,b){var d=CHIM.buffer,e=d.length,f=a.toLowerCase();if(CHIM.Speller.enabled&&!Mudim.tempDisableSpellCheck){if(0<b&&0==CHIM.off){if(0<Mudim.tailConsonants.length){var g=Mudim.tailConsonantsPattern.indexOf("|"+Mudim.tailConsonants+"|");if(0>g||9>g&&2==b&&(g=Mudim.GetMarkTypeID(f,2),0!=g&&1!=g&&5!=g))return CHIM.off=e,Mudim.tailConsonants="",!0}if(2==e&&(d[1]==CHIM.CHAR_u||d[1]==CHIM.CHAR_U)&&(d[0]==CHIM.CHAR_q||d[0]==CHIM.CHAR_Q)&&(2==b||1==b&&1==Mudim.GetMarkTypeID(f,1)))return CHIM.off=
e,CHIM.Append(e,c,a)}else if(!CHIM.off){var h=Mudim.spchk.indexOf(a);0<e&&(g=d[e-1].toLowerCase());if(0==e)if(0<=Mudim.nvchk.indexOf(a))CHIM.off=-1;else if(0<=h&&12>h)CHIM.Speller.Set(0,a);else{if(12==h||37<h)return;CHIM.Speller.Clear()}else{if(12==h||37<h){CHIM.ClearBuffer();return}if(12<h)CHIM.off=e;else if(0<=h){for(h=0;0<=Mudim.consonants.indexOf(d[h]);)h++;0<h&&(Mudim.headConsonants=d.slice(0,h).toString().replace(/,/g,"").toLowerCase());if(0>CHIM.Speller.position)if("q"==Mudim.headConsonants)1==
e&&"u"!=f?CHIM.off=e:"u"==d[1]&&"u"==f&&(CHIM.off=e);else if("p"==g&&"h"!=f)CHIM.off=e;else if("k"==g&&"i"!=f&&"e"!=f&&"y"!=f)CHIM.off=e;else if("ngh"==Mudim.headConsonants&&"i"!=f&&"e"!=f)CHIM.off=e;else if(CHIM.Speller.Set(e,a),"y"==f)0>"hklmst".indexOf(g)&&(CHIM.off=e);else{if("e"==f||"i"==f)1<e&&"g"==g&&(CHIM.off=e),"c"==g&&(CHIM.off=1)}else 1<e-CHIM.Speller.position?CHIM.off=e:(d="|"+CHIM.Speller.Last().toLowerCase()+a.toLowerCase()+"|",d=Mudim.vwchk.indexOf(d),0>d?CHIM.off=e:18>d&&("c"==Mudim.headConsonants||
"C"==Mudim.headConsonants)?CHIM.off=e:"y"==g&&""==Mudim.headConsonants&&"e"!=f?CHIM.off=e:CHIM.Speller.Set(e,a))}else switch(a){case "h":case "H":if(g>=CHIM.CHAR_0x80||0>"CGKNPTcgknpt".indexOf(g))CHIM.off=e;break;case "g":case "G":"n"!=g&&"N"!=g&&(CHIM.off=e);break;case "r":case "R":"t"!=g&&"T"!=g&&(CHIM.off=e);break;default:0<=Mudim.consonants.indexOf(g)&&(CHIM.off=e)}}}if(0!=CHIM.off)return!0}return!1};
CHIM.Append=function(a,b,d){if(0<=Mudim.separators.indexOf(d))CHIM.ClearBuffer();else return Mudim.my="mu",CHIM.buffer.push(d),Mudim.AdjustAccent(CHIM.modes[Mudim.method-1][2].charAt(0))};
CHIM.AddKey=function(a){var b=-1,d,e,f=0,g=CHIM.buffer.length,h=CHIM.modes[Mudim.method-1],j,l=null,k=!1;if(!g||0!=CHIM.off||Mudim.tempOff)return Mudim.CheckSpell(a,d)?CHIM.Append(g,f,a):CHIM.Append(0,0,a);e=CHIM.buffer;f=e[g-1];j=a.toLowerCase();for(d=1;d<h.length&&!(0<=h[d].indexOf(j));d++);if(d>=h.length)return Mudim.CheckSpell(a,0),CHIM.Append(g,f,a);5==Mudim.method&&(Mudim.method=Mudim.AutoDetectMode(j),k=!0);if(0>(b=Mudim.FindAccentPos(j)))return k&&(Mudim.method=5),Mudim.CheckSpell(a,0),CHIM.Append(g,
f,a);Mudim.lord="dz";if(Mudim.CheckSpell(a,d))return k&&(Mudim.method=5),CHIM.Append(g,f,a);var f=e[b],m=f.charCodeAt(0),n=!1;if(1==d){h=h[0];for(d=0;!n&&d<h.length;d++){var p=h[d];if(p[0]==j){for(d=1;d<p.length;d++)if(l=CHIM.vncode_1[p[d]],Mudim.AdjustAccent(j),m=e[b].charCodeAt(0),3==Mudim.GetMarkTypeID(j,1)&&(b=0,f=e[b],m=f.charCodeAt(0)),Mudim.PutMark(b,m,1,l,j,!0)){0<b&&(1==Mudim.GetMarkTypeID(j,1)&&b<g-1&&0<=CHIM.CharIsO(e[b])&&0<=CHIM.CharIsUI(e[b-1])&&e[0]!=CHIM.CHAR_q&&e[0]!=CHIM.CHAR_Q)&&
Mudim.PutMark(b-1,e[b-1].charCodeAt(0),1,CHIM.vn_UW,j,!1);n=!0;break}break}}}else for(d=0;d<CHIM.vncode_2.length;d++)if(l=CHIM.vncode_2[d],Mudim.PutMark(b,m,2,l,j,!0)){n=!0;break}if(n)k&&CHIM.SetDisplay();else return Mudim.CheckSpell(a,0),k&&(Mudim.method=5),CHIM.Append(g,f,a);0!=CHIM.off&&CHIM.buffer.push(a);return 0<=b};
CHIM.BackSpace=function(){var a=CHIM.buffer.length;if(0>=a)CHIM.dirty=!0;else{Mudim.accent[0]==a-1&&Mudim.ResetAccentInfo();for(var b=CHIM.vn_OW.length-1,d=CHIM.buffer[a-1].charCodeAt(0);0<=b&&CHIM.vn_OW[b]!=d;)b--;if(0>b)for(b=CHIM.vn_UW.length-1;0<=b&&CHIM.vn_UW[b]!=d;)b--;0<=b&&1==b%2&&Mudim.w--;--a;CHIM.buffer.pop();a==CHIM.Speller.position&&(CHIM.Speller.position=CHIM.Speller.vowels[--CHIM.Speller.count]);if(0>CHIM.off&&!a||a<=CHIM.off)CHIM.off=0}};
CHIM.ClearBuffer=function(){CHIM.off=0;Mudim.w=0;CHIM.Speller.Clear();Mudim.ResetAccentInfo();Mudim.tailConsonants="";Mudim.headConsonants="";Mudim.ctrlSerie=0;Mudim.shiftSerie=0;0<CHIM.buffer.length&&(Mudim.tempOff=!1,Mudim.tempDisableSpellCheck=!1);CHIM.buffer=[]};
CHIM.SetDisplay=function(){if("undefined"!=typeof Mudim.DISPLAY_ID&&Mudim.method<Mudim.DISPLAY_ID.length){for(var a,b=0;5>b;b++)if(a=document.getElementById(Mudim.DISPLAY_ID[b]))a.checked=!1;if(a=document.getElementById(Mudim.DISPLAY_ID[Mudim.method]))a.checked=!0}if("undefined"!=typeof Mudim.SPELLCHECK_ID&&(a=document.getElementById(Mudim.SPELLCHECK_ID)))a.checked=CHIM.Speller.enabled;if("undefined"!=typeof Mudim.ACCENTRULE_ID&&(a=document.getElementById(Mudim.ACCENTRULE_ID)))a.checked=Mudim.newAccentRule};
CHIM.SwitchMethod=function(){CHIM.ClearBuffer();Mudim.method=++Mudim.method%6;CHIM.SetDisplay();Mudim.SetPreference()};CHIM.SetMethod=function(a){CHIM.ClearBuffer();Mudim.method=a;CHIM.SetDisplay();Mudim.SetPreference()};CHIM.Toggle=function(){Mudim.Panel||Mudim.InitPanel();0==Mudim.method?CHIM.SetMethod(Mudim.oldMethod):(Mudim.oldMethod=Mudim.method,CHIM.SetMethod(0));Mudim.SetPreference()};
CHIM.GetTarget=function(a){null==a&&(a=window.event);if(null==a)return null;if(null!=a.srcElement)a=a.srcElement;else for(a=a.target;a&&1!=a.nodeType;)a=a.parentNode;"BODY"==a.tagName&&(a=a.parentNode);CHIM.peckable="HTML"==a.tagName||"textarea"==a.type||"text"==a.type;return a};
CHIM.GetCursorPosition=function(a){if(null==a||null==a.value||0==a.value.length)return-1;if("undefined"!=typeof a.selectionStart)return 0>a.selectionStart||a.selectionStart>a.length||0>a.selectionEnd||a.selectionEnd>a.length||a.selectionEnd<a.selectionStart?-1:a.selectionStart;if(document.selection){var b=document.selection.createRange(),d=a.createTextRange();if(null==d||null==b||""!=b.text&&!1==d.inRange(b))return-1;if(""==b.text){var e=1;if("INPUT"==a.tagName)for(a=d.text;e<a.length;){d.findText(a.substring(e));
if(d.boundingLeft==b.boundingLeft)break;e++}else if("TEXTAREA"==a.tagName){b=document.selection.createRange().duplicate();for(e=a.value.length+1;b.parentElement()==a&&1==b.move("character",1);)--e,10==a.value.charCodeAt(e)&&(e-=1);e==a.value.length+1&&(e=-1)}return e}return d.text.indexOf(b.text)}};
CHIM.SetCursorPosition=function(a,b){if(!(0>b))if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var d=a.createTextRange();d.collapse(!0);var e,f=0;for(e=0;e<b;e++)10==a.value.charCodeAt(e)||13==a.value.charCodeAt(e)?0==f&&(--b,f=1):f=0;d.moveStart("character",b);d.moveEnd("character",0);d.select()}};
CHIM.UpdateBuffer=function(a){CHIM.ClearBuffer();if("HTML"!=a.tagName){var b=CHIM.separators,d=CHIM.GetCursorPosition(a)-1;if(0<d)for(;0<=d&&0>b.indexOf(a.value.charAt(d));)CHIM.buffer.unshift(a.value.charAt(d)),d-=1;Mudim.startWordOffset=d+1}else CHIM.buffer=CHIM.HTMLEditor.GetCurrentWord(a).split("");CHIM.dirty=!1};CHIM.VK_TAB=9;CHIM.VK_BACKSPACE=8;CHIM.VK_ENTER=13;CHIM.VK_DELETE=46;CHIM.VK_SPACE=32;CHIM.VK_LIMIT=128;CHIM.VK_LEFT_ARROW=37;CHIM.VK_RIGHT_ARROW=39;CHIM.VK_HOME=36;CHIM.VK_END=35;
CHIM.VK_PAGE_UP=33;CHIM.VK_PAGE_DOWN=34;CHIM.VK_UP_ARROW=38;CHIM.VK_DOWN_ARROW=40;CHIM.VK_ONOFF=120;CHIM.VK_ONOFF2=121;CHIM.VK_PANELTOGGLE=119;CHIM.VK_CTRL=17;CHIM.VK_SHIFT=16;CHIM.VK_ALT=18;
CHIM.ProcessControlKey=function(a,b){switch(a){case CHIM.VK_TAB:case CHIM.VK_ENTER:CHIM.ClearBuffer();break;case CHIM.VK_BACKSPACE:b||CHIM.BackSpace();break;case CHIM.VK_DELETE:case CHIM.VK_LEFT_ARROW:case CHIM.VK_RIGHT_ARROW:case CHIM.VK_HOME:case CHIM.VK_END:case CHIM.VK_PAGE_UP:case CHIM.VK_PAGE_DOWN:case CHIM.VK_UP_ARROW:case CHIM.VK_DOWN_ARROW:CHIM.dirty=!0}};
CHIM.IsHotkey=function(a,b){return b==CHIM.VK_PANELTOGGLE?(Mudim.TogglePanel(),!0):b==CHIM.VK_ONOFF||b==CHIM.VK_ONOFF2?(CHIM.Toggle(),!0):!1};CHIM.HTMLEditor=function(){return this};CHIM.HTMLEditor.GetRange=function(a){if(a.parentNode.iframe)return a=a.parentNode.iframe.contentWindow,!window.opera&&document.all?a.document.selection.createRange():a.getSelection().getRangeAt(0)};
CHIM.HTMLEditor.GetCurrentWord=function(a){var b=CHIM.HTMLEditor.GetRange(a);if(!b)return"";if(!window.opera&&document.all){for(;-1==b.moveStart("character",-1);)if(0<=CHIM.separators.indexOf(b.text.charAt(0))){b.moveStart("character",1);break}return b.text}var a="",d;if(!(d=b.startContainer.nodeValue))return"";b=b.startOffset-1;if(0<b)for(;0<=b&&0>CHIM.separators.indexOf(d.charAt(b))&&160!=d.charCodeAt(b);)a=d.charAt(b)+a,b-=1;return a};
CHIM.HTMLEditor.Process=function(a,b){var d=CHIM.HTMLEditor.GetRange(a);if("undefined"!=typeof d){var e=CHIM.buffer;if(!window.opera&&document.all){var f=-b;d.moveStart("character",f);d.moveEnd("character",f+e.length);d.pasteHTML(e.toString().replace(/,/g,""))}else{var f=d.startContainer,g=d.startOffset,h=g-b;f.nodeValue=f.nodeValue.substring(0,h)+e.toString().replace(/,/g,"")+f.nodeValue.substring(h+b);b<e.length&&g++;d.setEnd(f,g);d.setStart(f,g)}}};
CHIM.Freeze=function(a){return Mudim.IGNORE_ID.test(a.id)?!0:!1};
CHIM.KeyHandler=function(a){null==a&&(a=window.event);if(!0!=a.isHandled){a.isHandled=!0;var b=a.keyCode;0==b&&(b=a.charCode);0==b&&(b=a.which);if(0!=Mudim.method){var d=null;if((d=CHIM.GetTarget(a))&&CHIM.peckable&&!CHIM.Freeze(d))if(a.ctrlKey||a.ctrlLeft||a.metaKey){if(b==CHIM.VK_BACKSPACE||b==CHIM.VK_LEFT_ARROW||b==CHIM.VK_RIGHT_ARROW)CHIM.dirty=!0}else if(null==a.charCode||0!=a.charCode){var e=String.fromCharCode(b);b==CHIM.VK_SPACE||b==CHIM.VK_ENTER?CHIM.ClearBuffer():b>CHIM.VK_SPACE&&b<CHIM.VK_LIMIT?
(CHIM.dirty&&CHIM.UpdateBuffer(d),b=CHIM.buffer.length,0==b&&(Mudim.startWordOffset=CHIM.GetCursorPosition(d)),Mudim.newTempDisableSpellCheckRequest&&(CHIM.ClearBuffer(),Mudim.startWordOffset=CHIM.GetCursorPosition(d),Mudim.newTempDisableSpellCheckRequest=!1),CHIM.AddKey(e)&&(a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1,Mudim.UpdateUI(d,b))):CHIM.dirty=!0}else CHIM.ProcessControlKey(b,!0)}}};
CHIM.KeyUp=function(a){null==a&&(a=window.event);a.keyCode==CHIM.VK_SHIFT&&1==Mudim.shiftSerie&&(Mudim.tempOff=!0,Mudim.shiftSerie=0);a.keyCode==CHIM.VK_CTRL&&1==Mudim.ctrlSerie&&(Mudim.tempDisableSpellCheck=!0,Mudim.ctrlSerie=0,Mudim.newTempDisableSpellCheckRequest=!0)};
CHIM.KeyDown=function(a){var b=null;null==a&&(a=window.event);if(!CHIM.IsHotkey(a,a.keyCode)&&!a.altKey&&!a.altLeft)if(a.shiftKey||a.shiftLeft||a.metaKey)Mudim.shiftSerie|=1,a.keyCode!=CHIM.VK_SHIFT&&(Mudim.shiftSerie|=2);else if(a.ctrlKey||a.ctrlLeft||a.metaKey)Mudim.ctrlSerie|=1,a.keyCode!=CHIM.VK_CTRL&&(Mudim.ctrlSerie|=2);else if((b=CHIM.GetTarget(a))&&CHIM.peckable&&!CHIM.Freeze(b))b=a.keyCode,0==b&&(b=a.charCode),0==b&&(b=a.which),CHIM.ProcessControlKey(b,!1)};
CHIM.MouseDown=function(){CHIM.Activate();CHIM.dirty=!0};
CHIM.Attach=function(a,b){if(a){a.chim||(b?(a.onkeydown=CHIM.KeyDown,a.onkeyup=CHIM.KeyUp,a.onkeypress=CHIM.KeyHandler,a.onmousedown=CHIM.MouseDown):!window.opera&&document.all?(a.attachEvent("onkeydown",CHIM.KeyDown),a.attachEvent("onkeyup",CHIM.KeyUp),a.attachEvent("onkeypress",CHIM.KeyHandler),a.attachEvent("onmousedown",CHIM.MouseDown)):(a.addEventListener("keydown",CHIM.KeyDown,!1),a.addEventListener("keyup",CHIM.KeyUp,!1),a.addEventListener("keypress",CHIM.KeyHandler,!1),a.addEventListener("mousedown",
CHIM.MouseDown,!1)),a.chim=!0);for(var d=a.getElementsByTagName("iframe"),e=0;e<d.length;e++){var f=!window.opera&&document.all?d[e].contentWindow.document:d[e].contentDocument;try{f.iframe=d[e],CHIM.Attach(f,!1)}catch(g){}}d=a.getElementsByTagName("frame");for(e=0;e<d.length;e++){f=!window.opera&&document.all?d[e].contentWindow.document:d[e].contentDocument;try{f.iframe=d[e],CHIM.Attach(f,!1)}catch(h){}}}};CHIM.Activate=function(){try{CHIM.Attach(document,!0),CHIM.SetDisplay()}catch(a){}};
CHIM.vn_A0=[65,193,192,7842,195,7840];CHIM.vn_a0=[97,225,224,7843,227,7841];CHIM.vn_A6=[194,7844,7846,7848,7850,7852];CHIM.vn_a6=[226,7845,7847,7849,7851,7853];CHIM.vn_A8=[258,7854,7856,7858,7860,7862];CHIM.vn_a8=[259,7855,7857,7859,7861,7863];CHIM.vn_O0=[79,211,210,7886,213,7884];CHIM.vn_o0=[111,243,242,7887,245,7885];CHIM.vn_O6=[212,7888,7890,7892,7894,7896];CHIM.vn_o6=[244,7889,7891,7893,7895,7897];CHIM.vn_O7=[416,7898,7900,7902,7904,7906];CHIM.vn_o7=[417,7899,7901,7903,7905,7907];
CHIM.vn_U0=[85,218,217,7910,360,7908];CHIM.vn_u0=[117,250,249,7911,361,7909];CHIM.vn_U7=[431,7912,7914,7916,7918,7920];CHIM.vn_u7=[432,7913,7915,7917,7919,7921];CHIM.vn_E0=[69,201,200,7866,7868,7864];CHIM.vn_e0=[101,233,232,7867,7869,7865];CHIM.vn_E6=[202,7870,7872,7874,7876,7878];CHIM.vn_e6=[234,7871,7873,7875,7877,7879];CHIM.vn_I0=[73,205,204,7880,296,7882];CHIM.vn_i0=[105,237,236,7881,297,7883];CHIM.vn_Y0=[89,221,7922,7926,7928,7924];CHIM.vn_y0=[121,253,7923,7927,7929,7925];
CHIM.vncode_2=[CHIM.vn_A0,CHIM.vn_a0,CHIM.vn_A6,CHIM.vn_a6,CHIM.vn_A8,CHIM.vn_a8,CHIM.vn_O0,CHIM.vn_o0,CHIM.vn_O6,CHIM.vn_o6,CHIM.vn_O7,CHIM.vn_o7,CHIM.vn_U0,CHIM.vn_u0,CHIM.vn_U7,CHIM.vn_u7,CHIM.vn_E0,CHIM.vn_e0,CHIM.vn_E6,CHIM.vn_e6,CHIM.vn_I0,CHIM.vn_i0,CHIM.vn_Y0,CHIM.vn_y0];
CHIM.vn_AA=[65,194,193,7844,192,7846,7842,7848,195,7850,7840,7852,258,194,7854,7844,7856,7846,7858,7848,7860,7850,7862,7852,97,226,225,7845,224,7847,7843,7849,227,7851,7841,7853,259,226,7855,7845,7857,7847,7859,7849,7861,7851,7863,7853];CHIM.vn_AW=[65,258,193,7854,192,7856,7842,7858,195,7860,7840,7862,194,258,7844,7854,7846,7856,7848,7858,7850,7860,7852,7862,97,259,225,7855,224,7857,7843,7859,227,7861,7841,7863,226,259,7845,7855,7847,7857,7849,7859,7851,7861,7853,7863];
CHIM.vn_OO=[79,212,211,7888,210,7890,7886,7892,213,7894,7884,7896,416,212,7898,7888,7900,7900,7902,7892,7904,7894,7906,7896,111,244,243,7889,242,7891,7887,7893,245,7895,7885,7897,417,244,7899,7889,7901,7891,7903,7893,7905,7895,7907,7897];CHIM.vn_OW=[79,416,211,7898,210,7900,7886,7902,213,7904,7884,7906,212,416,7888,7898,7890,7900,7892,7902,7894,7904,7896,7906,111,417,243,7899,242,7901,7887,7903,245,7905,7885,7907,244,417,7889,7899,7891,7901,7893,7903,7895,7905,7897,7907];
CHIM.vn_UW=[85,431,218,7912,217,7914,7910,7916,360,7918,7908,7920,117,432,250,7913,249,7915,7911,7917,361,7919,7909,7921];CHIM.vn_EE=[69,202,201,7870,200,7872,7866,7874,7868,7876,7864,7878,101,234,233,7871,232,7873,7867,7875,7869,7877,7865,7879];CHIM.vn_DD=[68,272,100,273];CHIM.vncode_1=[CHIM.vn_AA,CHIM.vn_EE,CHIM.vn_OO,CHIM.vn_AW,CHIM.vn_OW,CHIM.vn_UW,CHIM.vn_DD];
CHIM.modes=[[[["6",0,1,2],["7",4,5],["8",3],["9",6]],"6789","012345"],[[["a",0],["e",1],["o",2],["w",3,4,5],["d",6]],"ewoda","zsfrxj"],[[["^",0,1,2],["+",4,5],["(",3],["d",6]],"^+(d","='`?~."],[[["6",0,1,2],["7",4,5],["8",3],["9",6],["a",0],["e",1],["o",2],["w",3,4,5],["d",6]],"6789ewoda","012345zsfrxj"],[[["6",0,1,2],["7",4,5],["8",3],["9",6],["a",0],["e",1],["o",2],["w",3,4,5],["d",6],["^",0,1,2],["+",4,5],["(",3],["d",6]],"6789ewoda^+(d","012345zsfrxj='`?~."]];
CHIM.UI=[85,218,217,7910,360,7908,117,250,249,7911,361,7909,431,7912,7914,7916,7918,7920,432,7913,7915,7917,7919,7921,73,205,204,7880,296,7882,105,237,236,7881,297,7883,0];CHIM.O=[79,211,210,7886,213,7884,111,243,242,7887,245,7885,212,7888,7890,7892,7894,7896,244,7889,7891,7893,7895,7897,416,7898,7900,7902,7904,7906,417,7899,7901,7903,7905,7907,0];
CHIM.VN=[97,65,225,193,224,192,7843,7842,227,195,7841,7840,226,194,7845,7844,7847,7846,7849,7848,7851,7850,7853,7852,259,258,7855,7854,7857,7856,7859,7858,7861,7860,7863,7862,101,69,233,201,232,200,7867,7866,7869,7868,7865,7864,234,202,7871,7870,7873,7872,7875,7874,7877,7876,7879,7878,111,79,243,211,242,210,7887,7886,245,213,7885,7884,244,212,7889,7888,7891,7890,7893,7892,7895,7894,7897,7896,417,416,7899,7898,7901,7900,7903,7902,7905,7904,7907,7906,121,89,253,221,7923,7922,7927,7926,7929,7928,7925,
7924,117,85,250,218,249,217,7911,7910,361,360,7909,7908,432,431,7913,7912,7915,7914,7917,7916,7919,7918,7921,7920,105,73,237,205,236,204,7881,7880,297,296,7883,7882,273,272,0];
Mudim.UpdateUI=function(a,b){var d=CHIM.buffer;if("HTML"==a.tagName)return CHIM.HTMLEditor.Process(a,b),b<CHIM.buffer.length?void 0:!1;var e=0>Mudim.startWordOffset?0:Mudim.startWordOffset,f=CHIM.GetCursorPosition(a),g=a.scrollTop;a.value=a.value.substring(0,e)+d.toString().replace(/,/g,"")+a.value.substring(f);CHIM.SetCursorPosition(a,e+d.length);a.scrollTop=g};
Mudim.FindAccentPos=function(a){var a=a.toLowerCase(),b=CHIM.modes[Mudim.method-1],d=CHIM.buffer,e=d.length,f,g,h;if(!e||0!=CHIM.off)return-1;for(f=1;f<b.length&&!(0<=b[f].indexOf(a));f++);h=e-1;Mudim.is="ot";switch(b=f){case 1:if(3==Mudim.GetMarkTypeID(a,1))break;default:for(f=h;0<=f&&d[f]<CHIM.CHAR_0x80&&0>CHIM.vowels.indexOf(d[f]);)f--;if(0>f)return-1;f<e-1&&(Mudim.tailConsonants=d.slice(f+1,e).toString().replace(/,/g,"").toLowerCase());for(;0<=f-1&&(0<=CHIM.vowels.indexOf(d[f-1])||d[f-1]>CHIM.CHAR_0x80)&&
0>CHIM.CharPriorityCompare(d[f-1],d[f]);)f--;if(f==e-1&&0<=f-1&&0<(g=CHIM.CharIsUI(d[f-1])))switch(d[f]){case CHIM.CHAR_a:case CHIM.CHAR_A:(0>f-2||24>g&&d[f-2]!=CHIM.CHAR_q&&d[f-2]!=CHIM.CHAR_Q||24<=g&&d[f-2]!=CHIM.CHAR_g&&d[f-2]!=CHIM.CHAR_G)&&(2==b||1==b&&1==Mudim.GetMarkTypeID(a,1))&&f--;break;case CHIM.CHAR_u:case CHIM.CHAR_U:(0>f-2||d[f-2]!=CHIM.CHAR_g&&d[f-2]!=CHIM.CHAR_G)&&f--;break;case CHIM.CHAR_Y:case CHIM.CHAR_y:!Mudim.newAccentRule&&(0<=f-2&&d[f-2]!=CHIM.CHAR_q&&d[f-2]!=CHIM.CHAR_Q)&&
f--}if(f==e-1&&0<=f-1&&0<CHIM.CharIsO(d[f-1]))switch(d[f]){case CHIM.CHAR_a:case CHIM.CHAR_A:!Mudim.newAccentRule&&(2==b||1==b&&1!=Mudim.GetMarkTypeID(a,1))&&f--;break;case CHIM.CHAR_e:case CHIM.CHAR_E:Mudim.newAccentRule||f--}f==e-2&&0<=f-1&&(g=CHIM.CharIsUI(d[f]),0<=g&&24>g&(d[f-1]==CHIM.CHAR_q||d[f-1]==CHIM.CHAR_Q)&&f++);h=f}return 3==Mudim.GetMarkTypeID(a,1)&&"d"==d[0]?0:h};
Mudim.PutMark=function(a,b,d,e,f,g){var h;for(h=0;h<e.length;h++)if(e[h]==b){switch(d){case 1:1==Mudim.GetMarkTypeID(f,1)&&Mudim.w++;0==h%2?CHIM.SetCharAt(a,e[h+1]):(CHIM.SetCharAt(a,e[h-1]),g&&(CHIM.off=CHIM.buffer.length+1));break;case 2:b=Mudim.GetMarkTypeID(f,2),0<=b&&(b!=h?(CHIM.SetCharAt(a,e[b]),Mudim.accent=[a,CHIM.buffer[a].charCodeAt(0),e,f]):(CHIM.SetCharAt(a,e[0]),Mudim.ResetAccentInfo(),g&&(CHIM.off=CHIM.buffer.length+1)))}return!0}return!1};
Mudim.ResetAccentInfo=function(){Mudim.accent=[-1,0,null,"z"]};
Mudim.AdjustAccent=function(a){if(0!=CHIM.off)return!1;var a=Mudim.FindAccentPos(a),b=Mudim.accent,d=CHIM.buffer,e,f,g;if(0>a)return!1;f=CHIM.vn_OW.length-1;for(g=d[a].charCodeAt(0);0<=f&&CHIM.vn_OW[f]!=g;)f--;e=CHIM.vn_UW.length-1;if(0<a)for(g=d[a-1].charCodeAt(0);0<=e&&CHIM.vn_UW[e]!=g;)e--;else e=-1;if(a<d.length-1&&(0<a&&0<=f&&0<=e)&&1==Mudim.w)return 0==f%2?(Mudim.PutMark(a,d[a].charCodeAt(0),1,CHIM.vn_OW,CHIM.modes[Mudim.method-1][1].charAt(1),!1),(d[0]==CHIM.CHAR_q||d[0]==CHIM.CHAR_Q)&&Mudim.PutMark(a-
1,d[a-1].charCodeAt(0),1,CHIM.vn_UW,CHIM.modes[Mudim.method-1][1].charAt(1),!1)):d[0]!=CHIM.CHAR_q&&d[0]!=CHIM.CHAR_Q&&Mudim.PutMark(a-1,d[a-1].charCodeAt(0),1,CHIM.vn_UW,CHIM.modes[Mudim.method-1][1].charAt(1),!1),!0;if(0<=b[0]&&0<a&&b[0]!=a){Mudim.PutMark(b[0],b[1],2,b[2],b[3],!1);for(f=0;f<CHIM.vncode_2.length&&!(e=CHIM.vncode_2[f],Mudim.PutMark(a,d[a].charCodeAt(0),2,e,b[3],!0));f++);return!0}return!1};
Mudim.GetMarkTypeID=function(a,b){var d=CHIM.modes[Mudim.method-1];if(4!=Mudim.method)return d[b].indexOf(a);for(var d=-1,e=0;2>e&&!(d=CHIM.modes[e][b].indexOf(a),0<=d);e++);return d};Mudim.AutoDetectMode=function(a){var b;return 0<=(b=CHIM.modes[4][1].indexOf(a))?4>b?1:9>b?2:3:0<=(b=CHIM.modes[4][2].indexOf(a))?6>b?1:12>b?2:3:0};
Mudim.SetPreference=function(){var a=new Date;a.setTime(a.getTime()+6048E5);var a=";expires="+a.toGMTString()+";path=/",b=Mudim.method,b=CHIM.Speller.enabled?b+8:b,b=Mudim.newAccentRule?b+16:b,b=Mudim.showPanel?b+32:b,b=b+64*Mudim.displayMode;document.cookie="|mudim-settings="+b+a};
Mudim.GetPreference=function(){for(var a=document.cookie.split(";"),b=0;b<a.length&&0>a[b].indexOf("|mudim-settings");b++);b==a.length?CHIM.SetDisplay():(a=parseInt(a[b].split("=")[1],10),Mudim.method=a&7,CHIM.Speller.enabled=a&8?!0:!1,CHIM.newAccentRule=a&16?!0:!1,Mudim.showPanel=a&32?!0:!1,Mudim.displayMode=(a&64)>>6)};Mudim.ToggleAccentRule=function(){Mudim.newAccentRule=!Mudim.newAccentRule};
Mudim.TogglePanel=function(){Mudim.showPanel=!Mudim.showPanel;Mudim.Panel.style.display=Mudim.showPanel?"":"None";Mudim.SetPreference()};Mudim.ShowPanel=function(){Mudim.showPanel=!0;Mudim.Panel.style.display=""};Mudim.HidePanel=function(){Mudim.showPanel=!1;Mudim.Panel.style.display="None"};
Mudim.InitPanel=function(){if(!Mudim.Panel){Mudim.GetPreference();Mudim.panels=['<div id="mudimPanel" style="position: fixed; bottom: 0; right:0; left:0; width: 100%; border: 1px solid black; padding: 1px; background: '+Mudim.PANEL_BACKGROUND+"; color:"+Mudim.COLOR+'; z-index:4000; text-align: center; font-size: 10pt;"><a href="http://mudim.googlecode.com" title="Mudzot\'s Input Method" onclick="Mudim.ToggleDisplayMode();return false;">Mudim</a> v0.8 <input name="mudim" id="mudim-off" onclick="Mudim.SetMethod(0);" type="radio">'+
Mudim.LANG[0]+'<input name="mudim" id="mudim-vni" onclick="Mudim.SetMethod(1);" type="radio"> '+Mudim.LANG[1]+' <input name="mudim" id="mudim-telex" onclick="Mudim.SetMethod(2);" type="radio"> '+Mudim.LANG[2]+' <input name="mudim" id="mudim-viqr" onclick="Mudim.SetMethod(3);" type="radio"> '+Mudim.LANG[3]+' <input name="mudim" id="mudim-mix" onclick="Mudim.SetMethod(4);" type="radio"> '+Mudim.LANG[4]+' <input name="mudim" id="mudim-auto" onclick="Mudim.SetMethod(5);" type="radio"> '+Mudim.LANG[5]+
' <input id="mudim-checkspell" onclick="javascript:Mudim.ToggleSpeller();" type="checkbox">'+Mudim.LANG[6]+'<input id="mudim-accentrule" onclick="javascript:Mudim.ToggleAccentRule();" type="checkbox">'+Mudim.LANG[7]+' [&nbsp;<a href="#" onclick="Mudim.Toggle();return false;">'+Mudim.LANG[8]+'</a> (F9) <a href="#" onclick="Mudim.TogglePanel();return false;">'+Mudim.LANG[9]+"</a> (F8) ]</div>",'<div id="mudimPanel" style="position: fixed; bottom: 0; right: 0; width: 120px; border: 1px solid black; padding: 1px; background: '+
Mudim.PANEL_BACKGROUND+"; color:"+Mudim.COLOR+'; z-index:100; text-align: center; font-size: 10pt;"><a href="http://mudim.googlecode.com" title="Mudzot\'s Input Method" onclick="Mudim.ToggleDisplayMode();return false;">Mudim</a>:#METHOD#</div>'];var a=document.createElement("div");a.innerHTML=Mudim.panels[Mudim.displayMode].replace("#METHOD#",Mudim.LANG[Mudim.method]);a.style.display="None";document.body.appendChild(a);Mudim.Panel=a;Mudim.showPanel?Mudim.ShowPanel():Mudim.HidePanel()}};
Mudim.ToggleSpeller=function(){CHIM.Speller.Toggle()};Mudim.Toggle=function(){CHIM.Toggle()};Mudim.ToggleDisplayMode=function(){Mudim.displayMode=Mudim.displayMode?0:1;Mudim.BeforeInit();Mudim.Panel.innerHTML=Mudim.panels[Mudim.displayMode].replace("#METHOD#",Mudim.LANG[Mudim.method]);Mudim.AfterInit();Mudim.SetPreference()};Mudim.SetMethod=function(a){CHIM.SetMethod(a)};Mudim.SwitchMethod=function(){CHIM.SwitchMethod()};Mudim.BeforeInit=function(){};Mudim.AfterInit=function(){};
Mudim.Init=function(){Mudim.BeforeInit();Mudim.InitPanel();CHIM.Activate();Mudim.AfterInit()};Mudim.GetPanelStyle=function(){return Mudim.Panel.firstChild.style};Mudim.method=4;Mudim.newAccentRule=!0;Mudim.oldMethod=4;Mudim.showPanel=!1;Mudim.accent=[-1,0,null,-1];Mudim.w=0;Mudim.tempOff=!1;Mudim.tempDisableSpellCheck=!1;Mudim.newTempDisableSpellCheckRequest=!1;Mudim.ctrlSerie=0;Mudim.shiftSerie=0;Mudim.headConsonants="";Mudim.tailConsonants="";Mudim.startWordOffset=0;Mudim.COLOR="Black";
Mudim.PANEL_BACKGROUND="lightYellow";Mudim.LANG="T\u1eaft;VNI;Telex;Viqr;T\u1ed5ng h\u1ee3p;T\u1ef1 \u0111\u1ed9ng;Ch\u00ednh t\u1ea3;B\u1ecf d\u1ea5u ki\u1ec3u m\u1edbi;B\u1eadt/T\u1eaft;\u1ea8n/Hi\u1ec7n".split(";");Mudim.IGNORE_ID=/^.+(_iavim)$/;Mudim.displayMode=0;Mudim.panels=["",""];Mudim.REV=153;for(var i=1;100>i;i++)setTimeout("Mudim.Init()",2E3*i);