import React, {Component} from 'react';
import Stats from "./Stats";
import CarsCardList from "./CarsCardList";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import './styles/carsStyle.css'
import AddNewCarButton from "./AddNewCarButton";


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
            .catch((err) => {
                if (err.response.status === 422) {
                    alert('Invalid request');
                    console.log(err)
                }
                if (err.response.status === 500) {
                    alert('Internal Server Error');
                    console.log(err)
                }
            })
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
                <div className="mainHeader">
                    <img src={require("./images/carLogo.jpeg")} alt="logo" id='carImage'/>
                    <div className={'viewCarOrStatsButton'}>
                        <Button variant={this.isCarView() ? 'info' : 'primary'} onClick={this.viewStats}>
                            {this.isCarView() ? 'View stats' : 'View cars'}
                        </Button>
                    </div>
                </div>
                <div>
                    {this.state.view === 'cars' ?  (
                        <div>
                            <AddNewCarButton getAllCars={this.getAllCars}/>
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
