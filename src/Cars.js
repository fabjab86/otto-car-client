import React, {Component} from 'react';
import Stats from "./Stats";
import CarsCardList from "./CarsCardList";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import './styles/carsStyle.css'
import AddNewCarButton from "./AddNewCarButton";
import { Alert } from 'reactstrap';
import Spinner from "react-bootstrap/Spinner";


class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {view: 'cars', allCars : [],
            viewEditedAlert: false,
            viewDeletedAlert: false,
            viewCarAddedAlert: false};

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


    onEditCarAlertShow = () => {
        this.setState({viewEditedAlert:true},()=>{
            window.setTimeout(()=>{
                this.setState({viewEditedAlert:false})
            },2000)
        });
    };

    onDeleteCarAlertShow = () => {
        this.setState({viewDeletedAlert:true},()=>{
            window.setTimeout(()=>{
                this.setState({viewDeletedAlert:false})
            },2000)
        });
    };

    onAddCarAlertShow = () => {
        this.setState({viewCarAddedAlert:true},()=>{
            window.setTimeout(()=>{
                this.setState({viewCarAddedAlert:false})
            },2000)
        });
    };

    isCarView() {
        return this.state.view === 'cars'
    }

    viewStats() {
        this.setState({view: this.isCarView() ? 'stats' : 'cars'})
    }



    render() {

        return (
            <div>
                <Alert color="info" isOpen={this.state.viewEditedAlert}>
                    Car successfully edited
                </Alert>
                <Alert color="danger" isOpen={this.state.viewDeletedAlert}>
                    Car successfully deleted
                </Alert>
                <Alert color="info" isOpen={this.state.viewCarAddedAlert}>
                    Car successfully added
                </Alert>
                <div className="mainHeader">
                    <img src={require("./images/carLogo.jpeg")} alt="logo" id='carImage'/>
                    <div className={'viewCarOrStatsButton'}>
                        <Button variant={this.isCarView() ? 'info' : 'primary'} onClick={this.viewStats}>
                            {this.isCarView() ? 'View stats' : 'View cars'}
                        </Button>
                        {this.state.view === 'cars' ?  (
                            <AddNewCarButton getAllCars={this.getAllCars} onAddedAlert={this.onAddCarAlertShow}/>
                        ) : null}
                    </div>
                </div>
                <div>
                    <div className={'spinnerDiv'}>
                        {this.state.allCars.length === 0 ? (
                            <Spinner animation="grow" variant="info"/>) : null
                        }
                    </div>

                    {this.state.view === 'cars' ?  (
                        <div className={'carsCardsDiv'}>
                            <CarsCardList
                                allCars={this.state.allCars}
                                getAllCars={this.getAllCars}
                                onEditShow={this.onEditCarAlertShow}
                                onDeleteShow={this.onDeleteCarAlertShow}
                            />
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
