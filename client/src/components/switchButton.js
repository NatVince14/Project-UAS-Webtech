import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import TableProduct from './tableProduct';
import TableAccesories from './tableAccesories';
import Container from 'react-bootstrap/esm/Container';

const SwitchButton = () => {

    const [dropdownText, setDropdownText] = useState("Select Table");
    const [activeTable, setActiveTable] = useState(false);

    const handleText = event => {
        setDropdownText(event.target.textContent);
        setActiveTable(true);
    }

    return (
            <Container>

                <Dropdown style={{marginTop: '20px'}}>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" style={{width: '150px'}}>
                    {dropdownText}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/table-products" onClick={handleText}>Products</Dropdown.Item>
                    <Dropdown.Item href="#/table-accesories" onClick={handleText}>Accesories</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {activeTable && dropdownText === 'Products' && <TableProduct /> }
                {activeTable && dropdownText === 'Accesories' && <TableAccesories /> }
            </Container>
            
        
    );
}
 
export default SwitchButton;