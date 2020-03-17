import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/navBar";
import {Button, Form} from 'react-bootstrap';
import {PostData} from "../services/api";
import {connect} from "react-redux";
import {authLoginDetails, login, username} from "../redux/actions/auth_actions";


function RegisterPage(props) {
    const history = useHistory();
    useEffect( () =>{
        if(props.auth.isLogged){
            history.push('/')
        }
    },[]);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [successPhoneNumber, setSuccessPhoneNumber] = useState(false);
    const [fullName, setFullName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [successPassword, setSuccessPassword] = useState(false);

    const register = async ()=>{
        if (!fullName) {
            setErrorName('Please fill in a blank field.');
        }
        if (!successPhoneNumber) {
            setErrorPhone('Phone number is invalid.');
        }
         if (!password) {
            setErrorPassword('Please fill in a blank field.');
            setSuccessPassword(false);
        }else if (!successPassword){
            setErrorPassword('The password should be a minimum 8 characters.');
        }
        if (successPhoneNumber && successPassword && fullName){
            setErrorPassword('');
            const registerData ={ _id:phoneNumber, Name:fullName, Password:password};
            const loginData ={ _id:phoneNumber, Password:password};
            try {
                const res1 = await PostData('/register',registerData);
                if (res1.status === 201) {
                    const res2 = await PostData('/login',loginData);
                        if(res2.status === 201) {
                            props.login();
                            props.username(res2.data['name']);
                            alert(res2.data);
                            history.push("/");
                        }
                }else {
                    alert(res1.data);
                }
            }catch (e) {
                console.log(e);
            }
        }
    };

    return(
        <div className="LoginPage">
            <NavBar/>
            <div className='container' style={{marginTop:"3em"}}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name"
                         onChange={e => {
                                setFullName(e.target.value);
                                setErrorName('');}}
                    />
                    <Form.Text style={{color:'red'}} className="text-muted">
                        {errorName}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Phone Number"
                          onChange={e => {
                          if (
                              e.target.value.length === 10 &&
                              /^\d+$/.test(e.target.value) &&
                              (e.target.value.startsWith("050") ||
                                e.target.value.startsWith("051") ||
                                e.target.value.startsWith("052") ||
                                e.target.value.startsWith("053") ||
                                e.target.value.startsWith("054") ||
                                e.target.value.startsWith("055") ||
                                e.target.value.startsWith("058"))
                            ){
                                setSuccessPhoneNumber(true);
                                setPhoneNumber(e.target.value);
                                setErrorPhone('');
                            }else {
                                setErrorPhone('');
                                setSuccessPhoneNumber(false);
                            }}}
                    />
                    <Form.Text style={{color:'red'}} className="text-muted">
                        {errorPhone}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"
                          onChange={e => {
                            setPassword(e.target.value);
                            if (e.target.value.length < 8){
                                setSuccessPassword(false);
                            }else {
                                setSuccessPassword(true);
                            }
                            setErrorPassword('');
                           }}
                    />
                    <Form.Text style={{color:'red'}} className="text-muted">
                        {errorPassword}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="button" onClick={register}>
                    Submit
                </Button>
            </div>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        auth: state.auth_reducers
    }
};


export default connect(mapStateToProps,{login,username,authLoginDetails})(RegisterPage);