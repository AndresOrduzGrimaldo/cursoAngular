(function(){
	
	angular.module('hojaVida').controller('hojaVidaController',function(){
		//PRODUCTO RECIBE LOS VALORES DE GEN

		/*this.product = gem;
		this.felicito = 'hola';
		var layne = 'granados';*/
		this.Andres = persona;


	});

	var persona = {
		primerNombre: 'Andres',
		segundoNombre: 'Orlando',
		primerApellido: 'Orduz',
		segundoApellido: 'Grimaldo',
		edad: 27,
		documentoIdentidad: '1090410115',
		fechaNacimiento: '10/11/1989',
		estadoCivil: 'soltero',
		direccion: 'calle 18 # 0-49 Barrio San Luis',
		telefono: '3015249123',
		email: 'andresorduzgrimaldo@hotmail.com',
		estudioPrimaria: 'Colegio Madre Carmen',
		estudioSecundaria: 'Colegio Sagrado Corazón de Jesus',
	};
})();