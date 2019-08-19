import React, {Component} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './index.css'

const options = [
    { value: 'Select', label: 'Select' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];

class App extends Component{
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
        alert('A name was submitted: ' + this.state);
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
                            <Dropdown options={options} onChange={this.handleMakeChange} value={this.state.make} placeholder="Select an option"/>
                        </label>
                        <label>
                            Model:
                            <Dropdown options={options} onChange={this.handleModelChange} value={this.state.model} placeholder="Select an option"/>
                        </label>
                        <label>
                            Year:
                            <Dropdown options={options} onChange={this.handleYearChange} value={this.state.year} placeholder="Select an option"/>
                        </label>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>

                </header>
                <button
                    title="Go to Details"
                    onClick={() => {}}
                />
            </div>

        );
    }
}

export default App;
