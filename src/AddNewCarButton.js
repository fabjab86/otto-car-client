import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import AddNewCarModal from "./AddNewCarModal";
import './styles/addNewCarButton.css'

const AddNewCarButton = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <ButtonToolbar className={'addNewCarButton'}>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add Car
                </Button>

                <AddNewCarModal
                    getAllCars={props.getAllCars}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
        </div>
    )

};

export default AddNewCarButton;
