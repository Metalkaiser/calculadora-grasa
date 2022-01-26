import React from 'react'
import Header from '../components/Header';
import Menu from './Menu';
import Help from './Help';
import Dieta from './Dieta';
import Calculate from './Calculate';
import Men from './calculators/Men';
import Women from './calculators/Women';
import Footer from '../components/Footer';
import '../resources/css/App.css';
import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';

class Main extends React.Component {

	render(){
		return (
			<div className="content">
				<SlideRoutes>
        			<Route path="/" element={<><Header display="none" /><Menu /></>} />
			        <Route path="calcular" element={<><Header display="block" /><Calculate /></>} />
			        <Route path="dieta" element={<><Header display="block" /><Dieta /></>} />
			        <Route path="hombre" element={<><Header display="block" /><Men /></>} />
			        <Route path="mujer" element={<><Header display="block" /><Women /></>} />
			        <Route path="help" element={<><Header display="block" /><Help /></>} />
			    </SlideRoutes>
				<Footer />
			</div>
		)
	}
}

export default Main