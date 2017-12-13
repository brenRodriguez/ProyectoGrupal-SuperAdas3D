$(document).ready(function(){
	var ul=$('#error');
	$('#registrate').on('click',function(event){
		event.preventDefault();
		var nombre = $('#nombre').val();
		var mail = $('#mail').val();
		var asunto= $('#asunto').val();
		var mensaje= $('#mensaje').val();
		if(validar(nombre,mail,asunto, mensaje) == true){
			var dataForJason = {"nombre":nombre,"mail":mail,"asunto": asunto, "mensaje": mensaje}
			console.log(dataForJason);
			 jdatosJson= JSON.stringify(dataForJason);
				console.log(jdatosJson);
		}	

// ***********AJAX
 
 $.ajax({
    url:"http://",
    type:"post",
    data:jdatosJson,
    success: function (response) {
        if(response != false) { 
            alert ('Datos ingresados correctamente')
        }else{
            alert('Datos incorrectos')

        }
    }
});
 
 // **********AJAX


	});
});




       




/**
  *  Valido que el campo contenga caracteres
  *  @params campo / String
  *  return boolean 
  **/

function validarRequeridos(campo){
	//campo.trim();
	if(campo == '' || campo == null){
		return false;
	}else{	
		return true;
	}
}

/**
 *  Valida 
 *
 *
*/
function validarMail(mail){
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if(emailRegex.test(mail)){
  	return true; 
  }else{
  	return false;
  }
}

function validar(nombre, mail, asunto, mensaje){
	valido = true; 
	if(validarRequeridos($('#nombre').val())== false){
		var msg = "<li class='errorStyle'>El nombre es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;
	}	

	if(validarRequeridos($('#mail').val())== false){
			var msg = "<li class='errorStyle'>El mail es un campo requerido</li>";
			$('#error').append(msg);
			valido = false;
	}else{
		if(validarMail($('#mail').val()) == false){
			var msg = "<li class='errorStyle'>Debe ingresar mail valido.</li>";
			$('#error').append(msg);
			valido = false;	
		}
	}
	if(validarRequeridos($('#asunto').val())== false){
		var msg = "<li class='errorStyle'>El asunto es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;
	}
	if(validarRequeridos($('#mensaje').val())== false){
		var msg = "<li class='errorStyle'>El mensaje es un campo requerido</li>";
		$('#error').append(msg);
		valido = false;
	}
	return valido;
}