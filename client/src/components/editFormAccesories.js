import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditFormAccesories = (props) => {

    // useState to set new value of specific field
    const [editAccesories, setEditAccesories] = useState(props.accesoriesName);
    const [editQty, setEditQty] = useState(props.accesoriesQty);
    const [editPrice, setEditPrice] = useState(props.accesoriesPrice);

    const editHandler = () => {
        console.log("data edited");

        Axios.put(`http://localhost:3000/api/accessories/${props.accesoriesID}`, {
            id_aksesoris: props.accesoriesID,
            nama_aksesoris: editAccesories,
            jumlah_aksesoris: editQty,
            harga_aksesoris: editPrice
        });
        
        window.location.reload(false);

    }

    return (
        <div
        className="modal show"
        style={{ display: 'block', textAlign: 'left'}}
        >
        <Modal.Dialog>
            <Modal.Header>
            <Modal.Title>Edit Accesories</Modal.Title>
            </Modal.Header>

            <Form onSubmit={editHandler}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Accesories Name</Form.Label>
                        <Form.Control type="text" placeholder="Set product name" value={editAccesories} onChange={(e) => setEditAccesories(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Accesories Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Set product qty" value={editQty} onChange={(e) => setEditQty(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Accesories Price</Form.Label>
                        <Form.Control type="text" placeholder="Set product price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Submit</Button>
                    <Button variant="outline-danger" onClick={props.closeModal}>Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}
 
export default EditFormAccesories;