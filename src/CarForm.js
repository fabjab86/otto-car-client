import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './index.css'
import {carMakes} from "./helpers/helperObjects";


class CarForms extends Component {
    constructor(props) {
        super(props);
        this.state = {make: '', model: '', year: ''};

        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleMakeChange(event) {
        this.setState({make: event.value});
        console.log(event)
    }

    handleModelChange(event) {
        this.setState({model: event.value});
        console.log(event)
    }

    handleYearChange(event) {
        this.setState({year: event.value});
        console.log(event)
    }


    handleSubmit(event) {
        alert('Car Added');
        console.log(this.state);
        event.preventDefault();
    }
    render() {

        return (

            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handleSubmit}>
                        <div className="DropDownMenu">

                            <label>
                                Make:
                                <Dropdown options={carMakes} onChange={this.handleMakeChange} value={this.state.make} placeholder="Select an option"/>
                            </label>
                            <label>
                                Model:
                                <Dropdown options={carMakes} onChange={this.handleModelChange} value={this.state.model} placeholder="Select an option"/>
                            </label>
                            <label>
                                Year:
                                <Dropdown options={carMakes} onChange={this.handleYearChange} value={this.state.year} placeholder="Select an option"/>
                            </label>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>

                </header>
            </div>
        )
    }

}

export default CarForms;
