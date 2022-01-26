function Diet(datos) {
	var peso = parseFloat(datos[0].value);
	var altura = parseFloat(datos[1].value);
	var edad = parseFloat(datos[2].value);
	var actividad = parseFloat(datos[3].value);
	var genero = parseFloat(datos[4].value);
	var cal, ganar, perder, hc, pt, gr = 0;
	var result = []

	if (genero == 5) {
		cal = ((10*peso)+(6.25*altura)-(5*edad)+genero)*actividad;
	}else {
		cal = ((10*peso)+(6.25*altura)-(5*edad)-genero)*actividad;
	}
	ganar = cal*1.15;
	perder = cal*0.85;

	pt = 1.5*peso;
	hc = ((cal*0.9) - (pt*4))/4;
	gr = (cal*0.1)/9;

	result = [cal, ganar, perder, hc, pt, gr];
	return result;
}

export default Diet