import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav,
    Container,
    Logo,
    MobileIcon,
    Menu,
    MenuItem,
    MenuLink,
    Button,
    ButtonLink
} from "./navbar.elements.js";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <Container>
                    <Logo to="/"> DigitalMenu </Logo>
                    <MobileIcon onClick={toggle}> <FaBars /> </MobileIcon>
                    <Menu>
                        <MenuItem> <MenuLink to="about"> Despre </MenuLink> </MenuItem>
                        <MenuItem> <MenuLink to="discover"> Descopera </MenuLink> </MenuItem>
                        <MenuItem> <MenuLink to="sign-in"> Intra in cont </MenuLink> </MenuItem>
                    </Menu>
                    <Button>
                        <ButtonLink to="/register"> Creeaza cont </ButtonLink>
                    </Button>
                </Container>
            </Nav>
        </>
    );
}

export default Navbar;
