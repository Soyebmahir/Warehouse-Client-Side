import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';





const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    if (user) {
        navigate(from, { replace: true })
    }

    const handleFormSubmit = (event) => {

        event.preventDefault()

        let email = emailRef.current.value
        let password = passwordRef.current.value
        let name = nameRef.current.value
        console.log(email, password, name);
        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className=" container w-50 mx-auto">
            <h1 className='text-success'>This is register</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>ALready have an Account ? <Link to={"/login"} className='text-danger pe-auto text-decoration-none' >Login please</Link ></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;