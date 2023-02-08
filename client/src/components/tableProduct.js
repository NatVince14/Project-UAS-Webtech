import './global.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddForm from './addForm';
import EditForm from './editForm';

const TableProduct = () => {

    const [productList, setProductList] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [openEditModal, setOpenEditModal] = useState(false);

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    }

    
    const handleShowModal = () => {
        setOpenModal(true);
    }
    


    useEffect(()=> {
        Axios.get('http://localhost:3000/api/products').then(res => {
            setProductList(res.data)
        }).catch(err => console.log(err))
    }, [])

    const [getID, setGetID] = useState();
    const [getName, setGetName] = useState();
    const [getQty, setGetQty] = useState();
    const [getPrice, setGetPrice] = useState();

    return (
        <div className='container'>
            <div className='heading-group'>
                <h2>Products Table</h2>
                <Button onClick={handleShowModal}>Add Product</Button>
                {openModal && <AddForm />}

            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                

                {productList.map((val, idx) => {

                    const handleEditModal = () => {
                        setOpenEditModal(true);
                        setGetID(val.product_id);
                        setGetName(val.product_name);
                        setGetQty(val.product_qty);
                        setGetPrice(val.product_price);
                    }

                    const handleDeletion = () => {
                        // setTarget(val.product_id);

                        Axios.delete(`http://localhost:3000/api/products/${val.product_id}`).then(response => {
                            setProductList(response.data);
                        });

                        window.location.reload(false);
                    }
                    
                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{val.product_id}</td>
                                <td>{val.product_name}</td>
                                <td>{val.product_qty}</td>
                                <td>{val.product_price}</td>
                                <td className='tbl-button-group'>
                                    <Button variant='info' onClick={handleEditModal}>Edit</Button>
                                    {openEditModal && <EditForm closeModal={handleCloseEditModal} productId={getID} productName={getName} productQty={getQty} productPrice={getPrice} />}
                                    <Button variant='danger' onClick={handleDeletion}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }   
            )}
            </table>
        </div>
    )
}
 
export default TableProduct;