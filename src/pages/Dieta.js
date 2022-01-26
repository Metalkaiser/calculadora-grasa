import React from 'react'
import Diet from '../resources/scripts/Diet'
import { Link } from "react-router-dom";

function Dieta(){
	return(
		<section className="calcontainer">
			<article>
				<h3>Antes de calcular una dieta recomendada, lea la siguiente <Link to="#"><strong className ='urgent'>advertencia</strong></Link></h3>
				<h2>Ingresa los valores solicitados</h2>
				<form className="perccalc">
					<input type="number" placeholder="Tu peso (Kg)" />
					<input type="number" placeholder="Tu altura (cm)" />
					<input type="number" placeholder="Tu edad" />
					<select defaultValue="Nivel de actividad">
						<option disabled>Nivel de actividad</option>
						<option value="1">Sedentario</option>
						<option value="1.2">Mínimo</option>
						<option value="1.375">Poco</option>
						<option value="1.55">Moderado</option>
						<option value="1.725">Fuerte</option>
						<option value="1.9">Intenso</option>
					</select>
					<select defaultValue="Tu género">
						<option disabled>Tu género</option>
						<option value="5">Hombre</option>
						<option value="161">Mujer</option>
					</select>
					<button type="button" onClick={calculate}>Calcular</button>
				</form>
			</article>
			<article id="results">
				<h2>Tu porcentaje de grasa corporal es:</h2>
				<div>
					<h2 id="fatresult"></h2>
					<h2>%</h2>
				</div>
			</article>
			<article>
				<h4 id="grasa"></h4>
				<h4 id="musculo"></h4>
			</article>
			<article className="fatinfo">
				<h4 id="sugerencias"></h4>
			</article>
		</section>
	)
}

function calculate(){
	var datos = document.getElementsByClassName('perccalc')[0].elements;
	var result = Diet(datos);
	
	console.log("Calorías necesarias: " + result[0]);
	console.log("Para ganar: " + result[1]);
	console.log("Para perder: " + result[2]);
	console.log("HC: " + result[3]);
	console.log("PT: " + result[4]);
	console.log("GR: " + result[5]);
}

export default Dieta