function Calculations(datos){
	var divider = 0;
	var result = 0;
	var grasa = 0;
	var edad = 0;
	var musculo = 0;
	var tip = "";
	var resultados = [];
	switch(datos[1]){
		case "male":
			divider = 1.0324+0.15456*Math.log10(parseFloat(datos[0][0].value))-0.19077*Math.log10(parseFloat(datos[0][2].value)-parseFloat(datos[0][1].value));
			result = (495/divider)-450;
			grasa = parseFloat(datos[0][4].value)*result/100;
			edad = datos[0][3].value;
			musculo = parseFloat(datos[0][4].value)-grasa
			if(edad >= 20 && edad < 40){
				if(result > 25){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 8){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 8 && result <= 14) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 14 && result < 20) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result >= 20 && result <= 25) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}else if(edad >= 40 && edad < 60){
				if(result > 28){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 11){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 11 && result <= 16) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 16 && result < 22) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result >= 22 && result <= 28) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}else if(edad >= 60 && edad < 80){
				if(result > 30){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 13){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 13 && result <= 19) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 19 && result <= 25) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result > 25 && result <= 30) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}
			break;
		case "female":
			divider = 1.29579+0.221*Math.log10(parseFloat(datos[0][0].value))-0.35004*Math.log10(parseFloat(datos[0][2].value)+parseFloat(datos[0][3].value)-parseFloat(datos[0][1].value));
			result = (495/divider)-450;
			grasa = parseFloat(datos[0][5].value)*result/100;
			musculo = parseFloat(datos[0][5].value)-grasa
			if(edad >= 20 && edad < 40){
				if(result > 39){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 21){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 21 && result <= 27) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 27 && result < 33) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result >= 33 && result <= 39) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}else if(edad >= 40 && edad < 60){
				if(result > 40){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 23){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 23 && result <= 29) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 29 && result < 35) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result >= 35 && result <= 40) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}else if(edad >= 60 && edad < 80){
				if(result > 42){
					tip = "Usted sufre de obesidad y necesita perder peso <strong class ='urgent'>urgentemente</strong>";
				}else if(result < 24){
					tip = "Usted necesita ganar algo de peso";
				}else if(result >= 24 && result <= 30) {
					tip = "Usted tiene un peso saludable";
				}else if(result > 30 && result <= 36) {
					tip = "Usted tiene un peso saludable, aunque es recomendable que pierda un poco de grasa";
				}else if(result > 36 && result <= 42) {
					tip = "Usted tiene sobrepeso y necesita perder algo de peso";
				}
			}
			break;
		default:
			break;
	}
	resultados = [result, grasa, musculo, tip];
	return resultados;
}

export default Calculations