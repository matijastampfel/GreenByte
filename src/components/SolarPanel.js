import React from 'react';
import './solarpanel.scss';
import AppComponent from './App';



class SolarPanel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			powerOutput: null,
			classNamePanel: null
		}
	}



	simulatePowerOutput(capacity) {
		return Math.floor(Math.random() * capacity);
	}

	componentDidMount() {
		if (this.props.active) {
			setInterval(() => {
				
				this.setState({
					powerOutput: this.simulatePowerOutput(this.props.value)
				})
				
				var panelLevel = null;
				var isPanelLevelBellow = false;
				if(this.state.powerOutput < this.props.value * 0.2){
					isPanelLevelBellow =  true;
				}
				panelLevel = isPanelLevelBellow ? "solarpanel-component2" : "solarpanel-component";
				this.setState({
					classNamePanel : panelLevel
				})
			}, 1000);
		}
	}

	render() {
		const position = {
			gridColumn: this.props.x,
			gridRow: this.props.y
		};

		return (
			<div className={this.state.classNamePanel} style={ position }>
				Power generated from panel {this.props.id}: <output>{ this.state.powerOutput }</output>
	 		</div>
			 
		);
	}
}

SolarPanel.displayName = 'SolarPanel';
SolarPanel.propTypes = {};
SolarPanel.defaultProps = {};

export default SolarPanel;