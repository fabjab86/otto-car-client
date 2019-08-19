import React, {Component} from 'react';
import Stats from "./Stats";
import CarForms from "./CarForm";
import CarsCardList from "./CarsCardList";
import axios from 'axios';


class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {view: 'cars', allCars : []};

        this.viewStats = this.viewStats.bind(this);
    }

    componentDidMount() {
        axios.get('/cars')
            .then(response => {
                this.setState({allCars: response.data.data});
                console.log(response.data);
                console.log(this.state.allCars)
            })
            .catch(err => console.log(err))

    }


    isCarView = () => this.state.view === 'cars';

    viewStats() {
        this.setState({view: this.isCarView() ? 'stats' : 'cars'})
    }


    render() {

        return (
            <div>
                <button onClick={this.viewStats} >{this.isCarView() ? 'View stats' : 'View cars'}</button>

                <div>
                {this.state.view === 'cars' ?  (
                    <div>
           <CarForms />
           <CarsCardList allCars={this.state.allCars}/>
                    </div>
        ) : (
            <Stats/>
            )}
                </div>
            </div>


        );
    }
}

export default Cars;
