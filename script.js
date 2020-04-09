document.body.innerHTML = '<textarea class="textarea" rows="10" cols="100"></textarea><div id="keyboard"></div>';
localStorage["lang"] = localStorage["lang"] || "keyEnOff";
let lang = localStorage["lang"];
let keys = [
{
	"keyEnOff": '`', "keyEnOn": '~', "keyRuOff": 'ё', "keyRuOn": 'Ё', which: 192 
},
{
	"keyEnOff": '1', "keyEnOn": '!', "keyRuOff": '1', "keyRuOn": '!', which: 49 
},
{
	"keyEnOff": '2', "keyEnOn": '@', "keyRuOff": '2', "keyRuOn": '"', which: 50 
},
{
	"keyEnOff": '3', "keyEnOn": '#', "keyRuOff": '3', "keyRuOn": '№', which: 51 
},
{
	"keyEnOff": '4', "keyEnOn": '$', "keyRuOff": '4', "keyRuOn": ';', which: 52 
},
{
	"keyEnOff": '5', "keyEnOn": '%', "keyRuOff": '5', "keyRuOn": '%', which: 53 
},
{
	"keyEnOff": '6', "keyEnOn": '^', "keyRuOff": '6', "keyRuOn": ':', which: 54 
},
{
	"keyEnOff": '7', "keyEnOn": '&', "keyRuOff": '7', "keyRuOn": '?', which: 55 
},
{
	"keyEnOff": '8', "keyEnOn": '*', "keyRuOff": '8', "keyRuOn": '*', which: 56 
},
{
	"keyEnOff": '9', "keyEnOn": '(', "keyRuOff": '9', "keyRuOn": '(', which: 57 
},
{
	"keyEnOff": '0', "keyEnOn": ')', "keyRuOff": '0', "keyRuOn": ')', which: 48 
},{
	"keyEnOff": '-', "keyEnOn": '_', "keyRuOff": '-', "keyRuOn": '_', which: 189 
},
{
	"keyEnOff": '=', "keyEnOn": '+', "keyRuOff": '=', "keyRuOn": '+', which: 187 
},
{
	"keyEnOff": 'Backspace', "keyEnOn": 'Backspace', "keyRuOff": 'Backspace', "keyRuOn": 'Backspace', which: 8
},
{
	"keyEnOff": 'Tab', "keyEnOn": 'Tab', "keyRuOff": 'Tab', "keyRuOn": 'Tab', which: 9
},
{
	"keyEnOff": 'q', "keyEnOn": 'Q', "keyRuOff": 'й', "keyRuOn": 'Й', which: 81
},
{
	"keyEnOff": 'w', "keyEnOn": 'W', "keyRuOff": 'ц', "keyRuOn": 'Ц', which: 87
},
{
	"keyEnOff": 'e', "keyEnOn": 'E', "keyRuOff": 'у', "keyRuOn": 'У', which: 69 
},
{
	"keyEnOff": 'r', "keyEnOn": 'R', "keyRuOff": 'к', "keyRuOn": 'К', which: 82 
},
{
	"keyEnOff": 't', "keyEnOn": 'T', "keyRuOff": 'е', "keyRuOn": 'Е', which: 84 
},
{
	"keyEnOff": 'y', "keyEnOn": 'Y', "keyRuOff": 'н', "keyRuOn": 'Н', which: 89 
},
{
	"keyEnOff": 'u', "keyEnOn": 'U', "keyRuOff": 'г', "keyRuOn": 'Г', which: 85 
},
{
	"keyEnOff": 'i', "keyEnOn": 'I', "keyRuOff": 'ш', "keyRuOn": 'Ш', which: 73 
},
{
	"keyEnOff": 'o', "keyEnOn": 'O', "keyRuOff": 'щ', "keyRuOn": 'Щ', which: 79 
},
{
	"keyEnOff": 'p', "keyEnOn": 'P', "keyRuOff": 'з', "keyRuOn": 'З', which: 80 
},
{
	"keyEnOff": '[', "keyEnOn": '{', "keyRuOff": 'х', "keyRuOn": 'Х', which: 219 
},
{
	"keyEnOff": ']', "keyEnOn": '}', "keyRuOff": 'ъ', "keyRuOn": 'Ъ', which: 221 
},
{
	"keyEnOff": 'Del', "keyEnOn": 'Del', "keyRuOff": 'Del', "keyRuOn": 'Del', which: 46
},
{
	"keyEnOff": 'CapsLock', "keyEnOn": 'CapsLock', "keyRuOff": 'CapsLock', "keyRuOn": 'CapsLock', which: 20
},
{
	"keyEnOff": 'a', "keyEnOn": 'A', "keyRuOff": 'ф', "keyRuOn": 'Ф', which: 65 
},
{
	"keyEnOff": 's', "keyEnOn": 'S', "keyRuOff": 'ы', "keyRuOn": 'Ы', which: 83 
},
{
	"keyEnOff": 'd', "keyEnOn": 'D', "keyRuOff": 'в', "keyRuOn": 'В', which: 68 
},
{
	"keyEnOff": 'f', "keyEnOn": 'F', "keyRuOff": 'а', "keyRuOn": 'А', which: 70 
},
{
	"keyEnOff": 'g', "keyEnOn": 'G', "keyRuOff": 'п', "keyRuOn": 'П', which: 71 
},
{
	"keyEnOff": 'h', "keyEnOn": 'H', "keyRuOff": 'р', "keyRuOn": 'Р', which: 72 
},
{
	"keyEnOff": 'j', "keyEnOn": 'J', "keyRuOff": 'о', "keyRuOn": 'О', which: 74 
},
{
	"keyEnOff": 'k', "keyEnOn": 'K', "keyRuOff": 'л', "keyRuOn": 'Л', which: 75 
},
{
	"keyEnOff": 'l', "keyEnOn": 'L', "keyRuOff": 'д', "keyRuOn": 'Д', which: 76 
},
{
	"keyEnOff": ';', "keyEnOn": ':', "keyRuOff": 'ж', "keyRuOn": 'Ж', which: 186
},
{
	"keyEnOff": "'", "keyEnOn": '"', "keyRuOff": 'э', "keyRuOn": 'Э', which: 222 
},
{
	"keyEnOff": 'Enter', "keyEnOn": 'Enter', "keyRuOff": 'Enter', "keyRuOn": 'Enter', which: 13 
},
{
	"keyEnOff": 'Shift', "keyEnOn": 'Shift', "keyRuOff": 'Shift', "keyRuOn": 'Shift', which: 16
},
{
	"keyEnOff": 'z', "keyEnOn": 'Z', "keyRuOff": 'я', "keyRuOn": 'Я', which: 90 
},
{
	"keyEnOff": 'x', "keyEnOn": 'X', "keyRuOff": 'ч', "keyRuOn": 'Ч', which: 88
},
{
	"keyEnOff": 'c', "keyEnOn": 'C', "keyRuOff": 'с', "keyRuOn": 'С', which: 67 
},
{
	"keyEnOff": 'v', "keyEnOn": 'V', "keyRuOff": 'м', "keyRuOn": 'М', which: 86 
},
{
	"keyEnOff": 'b', "keyEnOn": 'B', "keyRuOff": 'и', "keyRuOn": 'И', which: 66 
},
{
	"keyEnOff": 'n', "keyEnOn": 'N', "keyRuOff": 'т', "keyRuOn": 'Т', which: 78 
},
{
	"keyEnOff": 'm', "keyEnOn": 'M', "keyRuOff": 'ь', "keyRuOn": 'Ь', which: 77 
},
{
	"keyEnOff": ',', "keyEnOn": '<', "keyRuOff": 'б', "keyRuOn": 'Б', which: 188 
},
{
	"keyEnOff": '.', "keyEnOn": '>', "keyRuOff": 'ю', "keyRuOn": 'Ю', which: 190 
},
{
	"keyEnOff": '/', "keyEnOn": '?', "keyRuOff": '.', "keyRuOn": ',', which: 191 
},
{
	"keyEnOff": '🠕', "keyEnOn": '🠕', "keyRuOff": '🠕', "keyRuOn": '🠕', which: 38
},
{
	"keyEnOff": 'Shift', "keyEnOn": 'Shift', "keyRuOff": 'Shift', "keyRuOn": 'Shift', which: 16
},
{
	"keyEnOff": 'Ctrl', "keyEnOn": 'Ctrl', "keyRuOff": 'Ctrl', "keyRuOn": 'Ctrl', which: 17
},
{
	"keyEnOff": 'Win', "keyEnOn": 'Win', "keyRuOff": 'Win', "keyRuOn": 'Win', which: 91
},
{
	"keyEnOff": 'Alt', "keyEnOn": 'Alt', "keyRuOff": 'Alt', "keyRuOn": 'Alt', which: 18
},
{
	"keyEnOff": 'Space', "keyEnOn": 'Space', "keyRuOff": 'Space', "keyRuOn": 'Space', which: 32
},
{
	"keyEnOff": 'Alt', "keyEnOn": 'Alt', "keyRuOff": 'Alt', "keyRuOn": 'Alt', which: 18
},
{
	"keyEnOff": 'Ctrl', "keyEnOn": 'Ctrl', "keyRuOff": 'Ctrl', "keyRuOn": 'Ctrl', which: 17
},
{
	"keyEnOff": '🠔', "keyEnOn": '🠔', "keyRuOff": '🠔', "keyRuOn": '🠔', which: 37
},
{
	"keyEnOff": '🠗', "keyEnOn": '🠗', "keyRuOff": '🠗', "keyRuOn": '🠗', which: 40
},
{
	"keyEnOff": '🠖', "keyEnOn": '🠖', "keyRuOff": '🠖', "keyRuOn": '🠖', which: 39
}
];

init(keys , lang);

document.onkeydown = function(event){
	document.querySelectorAll('#keyboard .k-key').forEach(el => el.classList.remove('active'));

	if(event.code === "ShiftLeft"){
		document.querySelector('.k-key-shift-left').classList.add('active');
		document.querySelector('.k-key-shift-right').classList.remove('active');
	}else if(event.code === "ShiftRight"){
		document.querySelector('.k-key-shift-left').classList.remove('active');
		document.querySelector('.k-key-shift-right').classList.add('active');
	}else if(event.code === "ControlRight"){
		event.preventDefault();
		document.querySelector('.k-key-control-left').classList.remove('active');
		document.querySelector('.k-key-control-right').classList.add('active');
	}else if(event.code === "ControlLeft"){
		event.preventDefault();
		document.querySelector('.k-key-control-left').classList.add('active');
		document.querySelector('.k-key-control-right').classList.remove('active');
	}else if(event.code === "AltLeft"){
		event.preventDefault();
		document.querySelector('.k-key-alt-left').classList.add('active');
		document.querySelector('.k-key-alt-right').classList.remove('active');
	}else if(event.code === "AltRight"){
		event.preventDefault();
		document.querySelector('.k-key-alt-left').classList.remove('active');
		document.querySelector('.k-key-alt-right').classList.add('active');
	}else{
		document.querySelector('.k-key[data="'+event.which+'"]').classList.add('active');
		if(event.which != 8 && event.which != 9 && event.which != 46  && event.which != 20  && event.which != 13  && event.which != 16 && event.which != 17 && event.which != 91 && event.which != 18 && event.which != 32){
			if(lang === "keyEnOff"){
				document.querySelector("textarea").value += keys.find(el => el.which === event.which)["keyEnOff"];
			}else if(lang === "keyEnOn"){
				document.querySelector("textarea").value += keys.find(el => el.which === event.which)["keyEnOn"];
			}else if(lang === "keyRuOn"){
				document.querySelector("textarea").value += keys.find(el => el.which === event.which)["keyRuOn"];
			}else if(lang === "keyRuOff"){
				document.querySelector("textarea").value += keys.find(el => el.which === event.which)["keyRuOff"];
			}
		}else if(event.which === 13){
			document.querySelector("textarea").value += '\n';
		}else if(event.which === 32){
			document.querySelector("textarea").value += ' ';
		}else if(event.which === 9){
			event.preventDefault();
			document.querySelector("textarea").value += '  ';
		}else if(event.which === 8){
			document.querySelector("textarea").value = document.querySelector("textarea").value.slice(0, -1);
		}
	}

	if(event.code === "AltLeft" || event.code === "AltRight"){
		document.onkeyup = function (event){
			if(event.code === "ShiftLeft" || event.code === "ShiftRight"){		
				if(lang === "keyEnOff"){
					localStorage.setItem("lang", "keyRuOff");
					lang = localStorage.getItem("lang");
					init(keys, lang);
				}else if(lang === "keyEnOn"){
					localStorage.setItem("lang", "keyRuOn");
					lang = localStorage.getItem("lang");
					init(keys, lang);
				}else if(lang === "keyRuOn"){
					localStorage.setItem("lang", "keyEnOn");
					lang = localStorage.getItem("lang");
					init(keys, lang);
				}else if(lang === "keyRuOff"){
					localStorage.setItem("lang", "keyEnOff");
					lang = localStorage.getItem("lang");
					init(keys, lang);
				}
			}else{
				document.onkeyup = null;
			}
		}
	}
	if(event.code === "CapsLock"){	
			if(lang === "keyEnOff"){
				localStorage.setItem("lang", "keyEnOn");
				lang = localStorage.getItem("lang");
				init(keys, lang);
				document.querySelector('.k-key-caps').classList.add("active");
			}else if(lang === "keyEnOn"){
				localStorage.setItem("lang", "keyEnOff");
				lang = localStorage.getItem("lang");
				init(keys, lang);
			}else if(lang === "keyRuOff"){
				localStorage.setItem("lang", "keyRuOn");
				lang = localStorage.getItem("lang");
				init(keys, lang);
				document.querySelector('.k-key-caps').classList.add("active");
			}else if(lang === "keyRuOn"){
				localStorage.setItem("lang", "keyRuOff");
				lang = localStorage.getItem("lang");
				init(keys, lang);
			}	
	}
};
function init(key, keyState){
	let out = '';
	for(let i = 0; i < key.length; i++){
			if(key[i].which === 8){
			  out += '<div class="k-key k-key-backspace" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 9){
		  	out += '<div class="k-key k-key-tab" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 46){
		  	out += '<div class="k-key k-key-delete" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 20){
		  	out += '<div class="k-key k-key-caps" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 13){
		  	out += '<div class="k-key k-key-enter" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 16){
		  	if(i === 41 && key[i].which === 16){
		  	out += '<div class="k-key k-key-shift-left" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }else{
		    	out += '<div class="k-key k-key-shift-right" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }
		  }else if(key[i].which === 17){
		  	if(i === 54 && key[i].which === 17){
		  	  out += '<div class="k-key k-key-control-left" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }else{
		    	out += '<div class="k-key k-key-control-right" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }
		  }else if(key[i].which === 32){
		  	out += '<div class="k-key k-key-space" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }else if(key[i].which === 18){
		  	if(i === 56){
		  	  out += '<div class="k-key k-key-alt-left" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }else{
		    	out += '<div class="k-key k-key-alt-right" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		    }
		  }else{
		  	out += '<div class="k-key" data="'+key[i].which+'">'+key[i][keyState]+'</div>';
		  }
		if(i === 13 || i === 27 || i === 40 || i === 53){
			out += '<div class="clearboth"></div>';
		}
	}
	document.getElementById('keyboard').innerHTML = out;
}






document.querySelectorAll('#keyboard .k-key').forEach((el) => {
	el.onclick = function(){
		document.querySelectorAll('#keyboard .k-key').forEach(el => el.classList.remove('active'));
    this.classList.add("active");
    document.querySelector("textarea").value += this.textContent;
    if(this.getAttribute('data') === 13){
    	document.querySelector("textarea").value += '\n';
    }
	}
});