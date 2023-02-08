import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddFormAccesorries() {

    // useState to set new value of specific field
    const [addAccesories, setAddAccesories] = useState('');
    const [addQty, setAddQty] = useState('');
    const [addPrice, setAddPrice] = useState('');

    const submitAdd = () => {
        const accesoriesData = {"nama_aksesoris": addAccesories, "jumlah_aksesoris": addQty, "harga_aksesoris": addPrice};
        Axios.post("http://localhost:3000/api/add-accessories", accesoriesData).then(() => alert('Accesories successfully added!'));

        setAddAccesories('');
        setAddQty('');
        setAddPrice('');

    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', textAlign: 'left'}}
        >
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Add Accessories</Modal.Title>
            </Modal.Header>

            <Form onSubmit={submitAdd}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Accessories Name</Form.Label>
                        <Form.Control type="text" placeholder="Set product name" value={addAccesories} onChange={(e) => setAddAccesories(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Accessories Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Set product qty" value={addQty} onChange={(e) => setAddQty(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Accessories Price</Form.Label>
                        <Form.Control type="text" placeholder="Set product price" value={addPrice} onChange={(e) => setAddPrice(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Add</Button>
                    <Button variant="outline-danger">Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}

export default AddFormAccesorries;