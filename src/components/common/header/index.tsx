import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavbarText, NavbarToggler } from 'reactstrap'

// #region Local
import './index.scss';
import Button from '../button'
import Popover from 'src/components/cart';

interface IHEADERPROPS {

}

const toolBar = ({ }: IHEADERPROPS) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <Navbar color="blue" expand="md" className="toolbar">
        <NavbarBrand href="/" className="brand">Sneakers City</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavbarText>
            <Button
              class_='__book'
              value="Cart"
              id="Popover"
              type="button"
            />
          </NavbarText>
        </Collapse>
      </Navbar>
      <Popover />
    </>
  );
};

export default toolBar;
