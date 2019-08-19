import React, {Component} from 'react';
import Stats from "./Stats";
import CarForms from "./CarForm";
import CarCard from "./CarCard";



class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {view: 'cars'};

        this.viewStats = this.viewStats.bind(this);
    }



    isCarView = () => this.state.view === 'cars';

    viewStats() {
        this.setState({view: this.isCarView() ? 'stats' : 'cars'})
    }


    render() {

        return (
            <div>
                <div>
                {this.state.view === 'cars' ?  (
                    <div>
           <CarForms />
           <CarCard />
                    </div>
        ) : (
            <Stats/>
            )}
                </div>
                <button onClick={this.viewStats} >{this.isCarView() ? 'stats' : 'cars'}</button>
            </div>


        );
    }
}

export default Cars;
