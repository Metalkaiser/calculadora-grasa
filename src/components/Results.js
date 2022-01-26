import React from 'react'
import percmen from '../resources/images/grasa-corporal-hombres.webp'
import percwomen from '../resources/images/grasa-corporal-mujeres.webp'

function Results(props){
	var img
	if (props.gender == "male") {
		img = percmen;
	}else{
		img = percwomen;
	}
	return(
		<span>
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
				<img src={img} alt="Porcentajes de grasa por edades"/>
			</article>
		</span>
	)
}

export default Results