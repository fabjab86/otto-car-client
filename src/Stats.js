import React, {Component} from 'react'
import axios from 'axios';
import 'react-table/react-table.css'
import Table from "react-bootstrap/Table";
import './styles/carsTable.css'

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: [{
                activeCars: 0,
                allCars: 0,
                deleteRequests: 0,
                getRequests: 0,
                inactiveCars: 0,
                putRequests: 0,
                postRequests: 0
            }]};

    }

    componentDidMount() {
        axios.get('/stats')
            .then( response => {
            this.setState({stats : response.data.data})
            }

        )
            .catch(err => {
                alert(err);
                console.log(err)
            })
    }

    render() {
        const allStats = this.state.stats;
        const headerStyle= {
            textAlign: 'center',
            padding: 20,
        };

        return (
            <div>
                <div className='carsTable'>
                    <h3 style={headerStyle}>Cars</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>All Added Cars</th>
                                <th>All Active Cars</th>
                                <th>All Inactive Cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{allStats[0].allCars}</td>
                                <td>{allStats[0].activeCars}</td>
                                <td>{allStats[0].inactiveCars}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="httpTable">
                    <h3 style={headerStyle}>HTTP requests</h3>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>GET requests</th>
                                <th>POST requests</th>
                                <th>PUT requests</th>
                                <th>DELETE requests</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{allStats[0].getRequests}</td>
                                <td>{allStats[0].postRequests}</td>
                                <td>{allStats[0].putRequests}</td>
                                <td>{allStats[0].deleteRequests}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>


        );

    }
}

export default Stats

