import React from 'react'

function Footer(){
	let date = new Date().getFullYear();
	return(
		<footer>
			<p>Calculadora &copy; {date} </p>
		</footer>
	)
}

export default Footer