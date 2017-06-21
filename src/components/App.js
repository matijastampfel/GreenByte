import React from 'react';
import './app.css';
import SolarPanel from './SolarPanel';
import './roof.scss';
import reduxStore from '../stores/index';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			solarPanels: [
				{ panelId: 1, x: 1, y: 1 },
				{ panelId: 2, x: 2, y: 1 },
				{ panelId: 3, x: 3, y: 1 },
				{ panelId: 4, x: 4, y: 1 },
				{ panelId: 5, x: 1, y: 2 },
				{ panelId: 6, x: 2, y: 2 },
				{ panelId: 7, x: 3, y: 2 },
				{ panelId: 8, x: 4, y: 2 }
			]
		};
	}

	render() {
		const { message, solarPanels } = this.state;
		const state = reduxStore().getState();

		return (
			<div className="index">
				<h1>My solar panels</h1>
				<div className="roof">
					{ solarPanels.map(p => <SolarPanel active={ state.panelsAreOn } key={ p.panelId } id={ p.panelId } x={ p.x } y={ p.y } />) }
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
