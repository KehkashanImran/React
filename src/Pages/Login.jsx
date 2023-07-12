

import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { GlobalContext } from '../context/login/Context'

function Login() {
  const { state, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [allEntry, setAllEntry] = useState([]);

  useEffect(() => {
    console.log('CONTEXT DATA', state);
  }, [state]);

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    }

    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (formIsValid) {
      setErrors({});
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);

    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: newEntry,
    });

    if (validateForm()) {
      const isAuthenticated = authenticateUser(email, password);

      if (isAuthenticated) {
        dispatch({
          type: 'LOGIN_USER',
          payload: { email: email, password: password },
        });

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';
          }
        });

        console.log('CONTEXT DATA:', { email: email, password: password, ...state });
      } else {
        setLoginError('Incorrect email or password');
        console.log('CONTEXT DATA:', { email: email, password: password, ...state });
      }
    }
  };

  const authenticateUser = (email, password) => {
    if (email === 'xyz@gmail.com' && password === 'admin') {
      return true;
    }
    return false;
  };

  const handleSignupClick = () => {
    window.location.href = './SignUp';
  };
  const handleloginClick = () => {
    window.location.href = '/';
    /* if (email === 'xyz@gmail.com' && password === 'admin') {

    window.location.href = '/';
    } 
    else{
      window.location.href = './login';
    }*/
  };
  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT_USER',
    });
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-150">
        <div className="mb-3 square border border-warning rounded-9 p-4 w-50"
        style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h4 className="my-2 text-center text-warning mb-2">Login Form</h4>
          <Form onSubmit={handleSubmit} className="p-4 rounded" style={{ background: 'linear-gradient(to bottom right, #212121, #ffc107)' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-light'>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
                style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='text-light'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
                style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              )}
            </Form.Group>

            {loginError && <p className="text-danger">{loginError}</p>}

            <div className="d-flex justify-content-center">
            <Button className="btn btn-dark btn-gradient-light text-warning mr-6" variant="primary" type="submit" onClick={handleloginClick}>
              Login
            </Button>
            <Button className="text-decoration-none btn btn-dark btn-gradient-dark text-white mr-6" variant="link" onClick={handleSignupClick}>
              Sign Up
            </Button>
            <Button className="btn btn-dark btn-gradient-light text-warning" variant="primary" type="submit" onClick={handleLogout}>
              Logout
            </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
