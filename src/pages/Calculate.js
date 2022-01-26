import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import man from '../resources/images/man.webp'
import woman from '../resources/images/woman.webp'

function Calculate(){
	return(
		<section>
			<article id="selecttitle">
				<h2>Seleccione su género</h2>
			</article>
			<article className="selectbtn">
				<Link to="/hombre">
					<button type="button">
						<img className="menuimg" src={man} />
						<h1>Hombre</h1>
					</button>
				</Link>
			
				<Link to="/mujer">
					<button type="button">
						<img className="menuimg" src={woman} />
						<h1>Mujer</h1>
					</button>
				</Link>
			</article>
		</section>
	)
}

export default Calculate