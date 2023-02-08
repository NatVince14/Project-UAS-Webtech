import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditForm = (props) => {

    // useState to set new value of specific field
    const [editProduct, setEditProduct] = useState(props.productName);
    const [editQty, setEditQty] = useState(props.productQty);
    const [editPrice, setEditPrice] = useState(props.productPrice);

    const editHandler = () => {
        console.log("data edited");

        Axios.put(`http://localhost:3000/api/products/${props.productId}`, {
            product_id: props.productId,
            product_name: editProduct,
            product_qty: editQty,
            product_price: editPrice
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
            <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>

            <Form onSubmit={editHandler}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Set product name" value={editProduct} onChange={(e) => setEditProduct(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Set product qty" value={editQty} onChange={(e) => setEditQty(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
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
 
export default EditForm;