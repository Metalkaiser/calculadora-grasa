import React from 'react'
import { useNavigate } from "react-router-dom";

function Goback(){
	let navigate = useNavigate();
	function handleClick() {
    	navigate(-1)
	}
}

export { Goback }