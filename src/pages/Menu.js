import React from 'react'
import porcentaje from '../resources/images/body-fat.webp'
import dieta from '../resources/images/hot.webp'
import { Routes, Route, Link } from "react-router-dom";

function Menu(){
	return(
		<section className="selectbtn">
			<article>
				<Link to="/calcular">
					<button type="button">
						<img className="menuimg" src={porcentaje} />
						<h1>Calcular grasa corporal</h1>
					</button>
				</Link>
			</article>
			<article>
				<Link to="/dieta">
					<button type="button">
						<img className="menuimg" src={dieta} />
						<h1>¿Qué podría comer?</h1>
					</button>
				</Link>
			</article>
		</section>
	)
}

export default Menu