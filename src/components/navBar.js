import React from "react";
import {Navbar, Nav, Dropdown, ButtonGroup, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {GetData} from "../services/api";
import {logout} from "../redux/actions/auth_actions";

function NavBar(props) {

    const logout = async () =>{
        try{
            const res = await GetData('/logout');
            if (res.status === 201){
                alert(res.data);
                props.logout();
            }
        }catch (e) {
            console.log(e)
        }
    };

    return(
        <div className="NavBar">
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand>My Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {props.auth.isLogged ?
                        <Nav className="mr-auto">
                            <Nav.Link href="/">home</Nav.Link>
                        </Nav>
                        :
                        <Nav className="mr-auto">
                            <Nav.Link href="/">home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    }
                    <div style={{marginRight:'5em'}}>
                        <Dropdown as={ButtonGroup} >
                            <Button>{props.auth.username ? props.auth.username :"User"}</Button>
                            <Dropdown.Toggle split disabled={!props.auth.isLogged}  id="dropdown-split-basic"/>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='logout' onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        auth: state.auth_reducers
    }
};

export default connect(mapStateToProps, {logout})(NavBar);
