(function(){
	
	angular.module('store').controller('storeController',function(){
		//PRODUCTO RECIBE LOS VALORES DE GEN
		this.product = gem;

		this.felicito = 'hola';
		var layne = 'granados';
	});

	var gem ={
		name: 'Cuarzo',
		price: 1.5,
		description: 'bella gema'
	};

	var persona = {
		name: 'Andres',
		last: 'Orduz',
		age: 27
	};
})();