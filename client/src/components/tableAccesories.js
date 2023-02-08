import './global.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddFormAccesorries from './addFormAccesories';
import EditFormAccesories from './editFormAccesories';

const TableAccesories = () => {

    const [accesoriesList, setAccesoriesList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleShowModal = () => {
        setOpenModal(true);
    }

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    }

    useEffect(()=> {
        Axios.get('http://localhost:3000/api/accessories').then(res => {
            setAccesoriesList(res.data)
        }).catch(err => console.log(err))
    }, [])

    const [getID, setGetID] = useState();
    const [getName, setGetName] = useState();
    const [getQty, setGetQty] = useState();
    const [getPrice, setGetPrice] = useState();

    return (
        <div className='container'>
            <div className='heading-group'>
                <h2>Accessories Table</h2>
                <Button onClick={handleShowModal}>Add Accessories</Button>
                {openModal && <AddFormAccesorries />}
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
                
                {accesoriesList.map((val, idx) => {

                    const handleEditModal = () => {
                        setOpenEditModal(true);
                        setGetID(val.id_aksesoris);
                        setGetName(val.nama_aksesoris);
                        setGetQty(val.jumlah_aksesoris);
                        setGetPrice(val.harga_aksesoris);
                    }

                    const handleDeletion = () => {

                        Axios.delete(`http://localhost:3000/api/accessories/${val.id_aksesoris}`).then(response => {
                            setAccesoriesList(response.data);
                        });

                        window.location.reload(false);
                    }

                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{val.id_aksesoris}</td>
                                <td>{val.nama_aksesoris}</td>
                                <td>{val.jumlah_aksesoris}</td>
                                <td>{val.harga_aksesoris}</td>
                                <td className='tbl-button-group'>
                                    <Button variant='info' onClick={handleEditModal}>Edit</Button>
                                    {openEditModal && <EditFormAccesories closeModal={handleCloseEditModal} accesoriesID={getID} accesoriesName={getName} accesoriesQty={getQty} accesoriesPrice={getPrice} />}
                                    <Button variant='danger' onClick={handleDeletion}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
 
export default TableAccesories;