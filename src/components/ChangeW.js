import React, { Component } from 'react';

class ChangeW extends Component {
    constructor(props) {
		super(props);
		
		this.state = {
            value:"250"
        };
        	this.handleChange = this.handleChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(event){
    // debugger;   
	this.setState({value:event.target.value});
}

handleSubmit(event) {
   // debugger;
    
	this.state.value;
	event.preventDefault();
}

    render() {
        return (
            
                <div>
					<form onSubmit={this.handleSubmit}>
					  <label>
					          Pick your capacity of solar panels:
					          <select value={this.state.value} onChange={this.handleChange}>
					            <option value="50">50W</option>
					            <option value="100">100W</option>
					            <option value="150">150W</option>
					            <option value="250">250W</option>
								<option value="350">350W</option>
					          </select>
					        </label>
					  <input type="submit" value="Set" />
					</form>
				</div>
            
        );
    }
}

export default ChangeW;