import React from 'react';
import './solarpanel.scss';
import AppComponent from './App';



class SolarPanel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			powerOutput: null
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
			}, 1000);
		}
	}

	render() {
		const position = {
			gridColumn: this.props.x,
			gridRow: this.props.y
		};

		return (
			<div className="solarpanel-component" style={ position }>
				Power generated from panel {this.props.id}: <output>{ this.state.powerOutput }</output>
	 		</div>
			 
		);
	}
}

SolarPanel.displayName = 'SolarPanel';
SolarPanel.propTypes = {};
SolarPanel.defaultProps = {};

export default SolarPanel;