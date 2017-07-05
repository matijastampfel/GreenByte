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
				{ panelId: 2, x: 4, y: 2 },
				{ panelId: 3, x: 3, y: 1 },
				{ panelId: 4, x: 4, y: 1 },
				{ panelId: 5, x: 1, y: 2 },
				{ panelId: 6, x: 2, y: 2 },
				{ panelId: 7, x: 3, y: 2 },
				{ panelId: 8, x: 2, y: 1 }
			],
			value:"250",
			rcolor:"roof"
			
		};

	this.handleChange = this.handleChange.bind(this);
	
	this.handleChangeColor = this.handleChangeColor.bind(this);

}

 handleChange(event){
    // debugger;   
	this.setState({value:event.target.value});
}

handleChangeColor(event){
	this.setState({rcolor:event.target.value})
}




	render() {
		const { message, solarPanels } = this.state;
		const state = reduxStore().getState();

		return (
			<div className="index">
				<h1>My solar panels</h1>
				<div className={this.state.rcolor}>
					{ solarPanels.map(p => <SolarPanel value={this.state.value} active={ state.panelsAreOn } key={ p.panelId } id={ p.panelId } x={ p.x } y={ p.y } />) }
				</div>
				<div>
					<form onSubmit={this.handleChange}>
					  <label>
					          Pick your capacity of solar panels:
					          <select value={this.state.value} onChange={this.handleChange}>
					            <option value="50">50W</option>
					            <option value="100">100W</option>
					            <option value="150">150W</option>
					            <option value="250">250W</option>
								<option value="350">350W</option>
								<option value="550">550W</option>
					          </select>
						</label>
					</form>
				</div>




				<div>
					<form onSubmit={this.handleChangeColor}>
						<label>
							Pick your roof color:
							<select value={this.state.rcolor} onChange={this.handleChangeColor}>
								<option value="roof">Green</option>
								<option value="roof2">Terracotta</option>
							</select>
						</label>
					</form>
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
