import React from 'react'
import { Link } from "react-router-dom";

function Help(){
	return(
		<section className="selectbtn">
			<article>
				<h1>Ayuda y preguntas frecuentes</h1>
				<div>
					<ul>
						<li><strong>¿Qué es el porcentaje de grasa corporal?</strong></li>
						<div>
							<p>Es la cantidad de grasa que contiene el organismo, en comparación con la cantidad de masa muscular.</p>
						</div>
						<li><strong>¿Para qué sirve conocer mi porcentaje de grasa corporal?</strong></li>
						<div>
							<p>Es bueno conocer tu porcentaje de grasa corporal para poder tener una idea de cómo está tu salud.</p>
							<p>Uno de los mayores problemas actualmente en el mundo es el sobrepeso, debido a los problemas de salud que esto genera.</p>
							<p>Conocer tu porcentaje de grasa corporal te permitirá saber qué tan urgente es la necesidad de que hagas ajustes en tu dieta y en tu actividad física diaria</p>
						</div>
						<li><strong>¿Cuál es mi porcentaje de grasa corporal ideal?</strong></li>
						<div>
							<p>La cantidad de grasa ideal que debe contener el organismo básicamente depende del sexo y la edad.</p>
							<p>En esta aplicación podrás encontrar una tabla que contiene rangos aproximados según el sexo y la edad de cada persona.</p>
							<p>Cuando calcules tu porcentaje de grasa corporal, podrás compararlo con la tabla de valores y conocer tu situación.</p>
						</div>
						<li><strong>¿Cómo puedo calcular mi porcentaje de grasa corporal?</strong></li>
						<div>
							<p>Solo tienes que seguir las instrucciones dadas en la sección de calculadora que te corresponda</p>
							<p>Puedes hacer click <Link to="/calcular">aquí</Link> para calcular tu porcentaje de grasa corporal, o ir al inicio y seleccionar el botón <strong>Calcular grasa corporal</strong></p>
						</div>
						<li><strong>¿Qué hago después de conocer mi porcentaje de grasa corporal?</strong></li>
						<div>
							<p>Puedes hacer click <Link to="/dieta">aquí</Link>, o ir al inicio y seleccionar el botón <strong>¿Qué podría comer?</strong></p>
							<p>Allí podrás ingresar tus datos, y obtener sugerencias de dietas variadas para lograr tu meta de subir o bajar de peso</p>
						</div>
					</ul>
				</div>
			</article>
		</section>
	)
}

export default Help