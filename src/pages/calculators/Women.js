import React from 'react'
import Calculations from '../../resources/scripts/Calculations'
import Results from '../../components/Results'

function Women(){
	return(
		<section className="calcontainer">
			<article>
			<h2>Ingresa los valores solicitados en centímetros</h2>
				<form className="perccalc">
					<input type="number" placeholder="Indica tu estatura" />
					<input type="number" placeholder="Indica tu contorno de cuello" />
					<input type="number" placeholder="Indica tu contorno de cintura" />
					<input type="number" placeholder="Indica tu contorno de cadera" />
					<input type="number" placeholder="Indica tu edad" />
					<input type="number" placeholder="Indica tu peso en kilogramos (opcional)" />
					<button type="button" onClick={calculate}>Calcular</button>
				</form>
			</article>
			<Results gender="female" />
		</section>
	)
}

function calculate(){
	var inputs = document.getElementsByClassName('perccalc')[0].children;
	var datos = [inputs, "female"];
	var resultados = Calculations(datos);
	document.getElementById('fatresult').innerHTML = resultados[0].toPrecision(4);
	document.getElementById('grasa').innerHTML = "Grasa corporal aprox.: " + resultados[1].toPrecision(4) + " kilogramos";
	document.getElementById('musculo').innerHTML = "Peso muscular aprox.: " + (resultados[2].toPrecision(4)) + " kilogramos";
	document.getElementById('sugerencias').innerHTML = resultados[3];				
	document.getElementById('results').style.display = 'block';
}	

export default Women