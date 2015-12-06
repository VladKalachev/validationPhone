$(document).ready(function() {
 	// для извлеения текстовых даных из пунктов в селекте
/* 	$( "select" )
  .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text();

      // условие которые выполняеться при выборе нужного option пункта
			if (str == "Saab"){
			$(".tex").css( "display", "block");
    	$(".tex").text( "Вы угадали!");
    	return true;
   		 } else {
   		 	$(".tex").css( "display", "none");
   		 	return false;
   		 };
    });
    console.log(str);
    
  })
    .trigger( "change" );*/






	//var sel = $("select option:").text();
	//console.log(sel);

// ====================================================== //
//  объект со всеми методами обработки
var jVal = {
	'fullName' : function() {
	
		$('body').append('<div id="nameInfo" class="info"></div>');
		
		var nameInfo = $('#nameInfo');// присвоили переменно див с ошибкой
		var ele = $('#fullname');//присвоили переменную импуту
		var pos = ele.offset();// возращает положение дива на странице
		
		// позиционируем ошибку относительно положения инпута
		nameInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		// событие проверки валидации
		if(ele.val().length < 6) {
			jVal.errors = true;
				nameInfo.removeClass('correct').addClass('error').html('&larr; как минимум 6 символов!').show();
				ele.removeClass('normal').addClass('wrong');				
		} else {
				nameInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'birthDate' : function (){
		
		$('body').append('<div id="birthInfo" class="info"></div>');

		var birthInfo = $('#birthInfo');
		var ele = $('#birthday');
		var pos = ele.offset();
		
		birthInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		var patt = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/i;
		
		if(!patt.test(ele.val())) {
			jVal.errors = true;
				birthInfo.removeClass('correct').addClass('error').html('&larr; введите дату в корректном формате!').show();
				ele.removeClass('normal').addClass('wrong');					
		} else {
				birthInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}	
	},


	'phone' : function (){
		// аппендим ошибку в дом
		$('body').append('<div id="phoneInfo" class="info"></div>');

		var birthInfo = $('#phoneInfo');// присваиваем переменной див с ошибкой
		var ele = $('#phone');// присваиваем импут
		var pos = ele.offset();
		
		birthInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		//var patt = /^( +)?((\+?7|8) ?)?((\(\d{3}\))|(\d{3}))?( )?(\d{3}[\- ]?\d{2}[\- ]?\d{2})( +)?$/; // Обязательно валидирует скобки !
		// формат 8 (999) 99-99-99
		var patt = /^( +)?((\+?7|8) ?)?((\d{3})|(\d{3}))?( )?(\d{3}[\- ]?\d{2}[\- ]?\d{2})( +)?$/;  // валидация без скобок
		// формат 8 910 721-58-88

		if(!patt.test(ele.val())) {
			jVal.errors = true;
				birthInfo.removeClass('correct').addClass('error').html('&larr; введите телефон в корректном формате!').show();
				ele.removeClass('normal').addClass('wrong');					
		} else {
				birthInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'gender' : function (){
		
		$('body').append('<div id="genderInfo" class="info"></div>');
	
		var genderInfo = $('#genderInfo');// див ошибки
		var ele = $('#woman');// импут
		var pos = ele.offset(); // положение ошибки
		
		genderInfo.css({
			top: pos.top-10,
			left: pos.left+ele.width()+60
		});
		
		// событие валидации
		if($('input[name="gender"]:checked').length === 0) {
			jVal.errors = true;
				genderInfo.removeClass('correct').addClass('error').html('&larr; Вы мужчина или женщина?').show();
				ele.removeClass('normal').addClass('wrong');		
		} else {
				genderInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'vehicle' : function (){
	
		$('body').append('<div id="vehicleInfo" class="info"></div>');
	
		var vehicleInfo = $('#vehicleInfo');
		var ele = $('#ship');
		var pos = ele.offset();
		
		vehicleInfo.css({
			top: pos.top-10,
			left: pos.left+ele.width()+40
		});
		
		if($('input[name="vehicle"]:checked').length <= 1) {
			jVal.errors = true;
				vehicleInfo.removeClass('correct').addClass('error').html('&larr; Я уверен, как минимум вы владеете двумя!').show();
				ele.removeClass('normal').addClass('wrong');		
		} else {
				vehicleInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}	
	},
	
	'email' : function() {
	
		$('body').append('<div id="emailInfo" class="info"></div>');
	
		var emailInfo = $('#emailInfo');
		var ele = $('#email');
		var pos = ele.offset();
		
		emailInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		var patt = /^.+@.+[.].{2,}$/i;
		
		if(!patt.test(ele.val())) {
			jVal.errors = true;
				emailInfo.removeClass('correct').addClass('error').html('&larr; Введите правильный email, хорошо?').show();
				ele.removeClass('normal').addClass('wrong');					
		} else {
				emailInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'about' : function() {
	
		$('body').append('<div id="aboutInfo" class="info"></div>');
	
		var aboutInfo = $('#aboutInfo');
		var ele = $('#about');
		var pos = ele.offset();
		
		aboutInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		if(ele.val().length < 75) {
			jVal.errors = true;
				aboutInfo.removeClass('correct').addClass('error').html('&larr; давай, расскажи немного более о себе!').show();
				ele.removeClass('normal').addClass('wrong').css({'font-weight': 'normal'});		
		} else {
				aboutInfo.removeClass('error').addClass('correct').html('&radic;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'sendIt' : function (){
		if(!jVal.errors) {
			$('#jform').submit();
		}
	}
};

// ====================================================== //

// проверка волидации при событие нажатия кнопки

$('#send').click(function (){
	var obj = $.browser.webkit ? $('body') : $('html');
	obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
		jVal.errors = false;
		jVal.fullName();
		jVal.birthDate();
		jVal.phone();
		jVal.gender();
		jVal.vehicle();
		jVal.email();
		jVal.about();
		jVal.sendIt();
	});
	return false;
});


// присваиваем  импутам обработчики форм
$('#fullname').change(jVal.fullName);
$('#birthday').change(jVal.birthDate);
$('#phone').change(jVal.phone);

$('input[name="gender"]').change(jVal.gender);
$('input[name="vehicle"]').change(jVal.vehicle);
$('#email').change(jVal.email);
$('#about').change(jVal.about);

	
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
