function cuadroObje(e,value) {
	let display = $('#financiero');
	let display2 = $('#cliente');
	let display3 = $('#humana');
	let display4 = $('#i_d');
	switch(value){
		case 1:
			if(display.css('display') == 'block'){
				display.css('display','none');
			}else{
				display.css('display','block');
				display2.css('display','none');
				display3.css('display','none');
				display4.css('display','none');
			}
			break;
		case 2:
			if(display2.css('display') == 'block'){
				display2.css('display','none');
			}else{
				display.css('display','none');
				display2.css('display','block');
				display3.css('display','none');
				display4.css('display','none');
			}
			break;
		case 3:
			if(display3.css('display') == 'block'){
				display3.css('display','none');
			}else{
				display.css('display','none');
				display2.css('display','none');
				display3.css('display','block');
				display4.css('display','none');
			}
			break;
		case 4:
			if(display4.css('display') == 'block'){
				display4.css('display','none');
			}else{
				display.css('display','none');
				display2.css('display','none');
				display3.css('display','none');
				display4.css('display','block');
			}
			break;
	}
}
