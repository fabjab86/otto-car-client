import React, {Component} from 'react';
import Stats from "./Stats";
import CarForm from "./CarForm";
import CarsCardList from "./CarsCardList";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import './styles/carsStyle.css'


class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {view: 'cars', allCars : []};

        this.viewStats = this.viewStats.bind(this);
        this.getAllCars = this.getAllCars.bind(this);
    }

    getAllCars() {
        axios.get('/cars')
            .then(response => {
                this.setState({allCars: response.data.data});
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getAllCars()
    }


    isCarView() {
        return this.state.view === 'cars'
    }

    viewStats() {
        this.setState({view: this.isCarView() ? 'stats' : 'cars'})
    }


    render() {

        return (
            <div>
                <div className={'viewCarOrStatsButton'}>
                    <Button variant={this.isCarView() ? 'info' : 'primary'} onClick={this.viewStats}>
                        {this.isCarView() ? 'View stats' : 'View cars'}
                    </Button>
                </div>
                <div>
                    {this.state.view === 'cars' ?  (
                        <div>
                           <CarForm getAllCars={this.getAllCars}/>
                           <CarsCardList allCars={this.state.allCars} getAllCars={this.getAllCars}/>
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
