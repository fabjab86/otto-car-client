import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import axios from 'axios';
import 'react-dropdown/style.css'
import './index.css'
import {carMakes, carModels, carYear} from "./helpers/helperObjects";


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
        axios.post('/cars', {
            make: this.state.make,
            model: this.state.model,
            model_year: this.state.year
        }).then(response => {
            this.setState({make: '', model: '', year: ''});
            alert(response.data.message);
            console.log(response.data.message)
        })
            .catch(err => console.log(err));
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
                                <Dropdown options={carModels} onChange={this.handleModelChange} value={this.state.model} placeholder="Select an option"/>
                            </label>
                            <label>
                                Year:
                                <Dropdown options={carYear} onChange={this.handleYearChange} value={this.state.year} placeholder="Select an option"/>
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
