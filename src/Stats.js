import React, {Component} from 'react'
import axios from 'axios';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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
                updateRequests: 0
            }]};

    }

    componentDidMount() {
        axios.get('/stats')
            .then( response => {
            this.setState({stats : response.data.data})
            }

        )
            .catch(err => console.log(err))
    }

    render() {
        const allStats = this.state.stats;
        const columns = [{
            Header: 'All Cars',
            accessor: 'allCars'
        },
        {
            Header: 'Active Cars',
            accessor: 'activeCars'
        },
        {
            Header: 'Inactive Cars',
            accessor: 'inactiveCars'
        },
        {
            Header: 'Get Requests',
            accessor: 'getRequests'
        },
        {
            Header: 'Post Requests',
            accessor: 'postRequests'
        },
        {
            Header: 'Update Requests',
            accessor: 'putRequests'
        },
        {
            Header: 'Delete Requests',
            accessor: 'deleteRequests'
        }
        ];

        return (
            <div>
                <ReactTable
                    data={allStats}
                    columns={columns}
                    minRows={3}
                />
            </div>


        );

    }
}

export default Stats

