import React, { useContext, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

import { GlobalContext } from '../context/login/Context'
/* import { reducer } from '../login/Reducer'; */

const initialState = {
  name: '',
  fatherName: '',
  age: '',
  address: '',
  city: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
  choices: [],
};

const formReducer = (formState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...formState, [action.payload.name]: action.payload.value };
    case 'TOGGLE_CHOICE':
      const choices = formState.choices.includes(action.payload.choice)
        ? formState.choices.filter((s) => s !== action.payload.choice)
        : [...formState.choices, action.payload.choice];
      return { ...formState, choices };
    default:
      return formState;
  }
};

export default function SignUp() {
  const [formState, formDispatch] = useReducer(formReducer, initialState);
  const { dispatch } = useContext(GlobalContext);

  const handleChange = (e) => {
    formDispatch({
      type: 'UPDATE_FIELD',
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleChoiceChange = (e) => {
    formDispatch({
      type: 'TOGGLE_CHOICE',
      payload: {
        choice: e.target.value,
      },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formState.name) {
      errors.name = 'Name is required';
    }
    if (!formState.fatherName) {
      errors.fatherName = 'Father Name is required';
    }
    if (!formState.email) {
      errors.email = 'Email is required';
    }
    if (!formState.age) {
      errors.age = 'Age is required';
    }
    if (!formState.city) {
      errors.city = 'City is required';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    }
    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (formState.choices.length === 0) {
      errors.choices = 'Please select at least one choice';
    }

    if (Object.keys(errors).length > 0) {
      formDispatch({
        type: 'UPDATE_FIELD',
        payload: { name: 'errors', value: errors },
      });
    } else {
      dispatch({
        type: 'SIGNUP_USER',
        payload: formState.user, // Pass the entire formState as the payload
      });

      console.log('Form Data:', formState);
      Swal.fire('Success!', 'Account registered successfully!', 'success');
    }
  };

  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <div
        className="mb-3 square border border-warning rounded-9 p-4 w-50"
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        <h4 className="mb-3 text-center text-warning">Registration Form</h4>
        <Form onSubmit={handleFormSubmit}className="p-4 rounded" style={{ background: 'linear-gradient(to bottom right, #212121, #ffc107)' }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicName">
                <Form.Label className='text-light'>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder=""
                  value={formState.name}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.name}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.name}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicFatherName">
                <Form.Label className='text-light'>Father Name</Form.Label>
                <Form.Control
                  name="fatherName"
                  type="text"
                  placeholder=""
                  value={formState.fatherName}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.fatherName}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.fatherName && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.fatherName}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder=""
                  value={formState.email}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.email}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicAge">
                <Form.Label className='text-light'>Age</Form.Label>
                <Form.Control
                  name="age"
                  type="number"
                  placeholder=""
                  value={formState.age}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.age}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.age && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.age}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicAddress">
                <Form.Label className='text-light'>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  placeholder=""
                  value={formState.address}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.address}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.address && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.address}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicCity">
                <Form.Label className='text-light'>City</Form.Label>
                <Form.Control
                  name="city"
                  type="text"
                  placeholder=""
                  value={formState.city}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.city}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.city && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.city}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Group controlId="formBasicPassword">
                <Form.Label className='text-light'>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder=""
                  value={formState.password}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.password}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.password}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label className='text-light'>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder=""
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!formState.errors.confirmPassword}
                  style={{ background: 'linear-gradient(to right,  #ffffff, #212121)', color: '#000' }}
                className="input-field"
                />
                {formState.errors.confirmPassword && (
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.confirmPassword}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h6 className='mb-3 text-light'>What are you interested in?</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gadgets"
                  value="GADGETS"
                  checked={formState.choices.includes('GADGETS')}
                  onChange={handleChoiceChange}
                />
                <label className="text-light form-check-label" htmlFor="gadgets">
                  Gadgets
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="accessories"
                  value="ACCESSORIES"
                  checked={formState.choices.includes('ACCESSORIES')}
                  onChange={handleChoiceChange}
                  
                />
                <label className="text-light form-check-label" htmlFor="accessories">
                  Accessories
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="fragrances"
                  value="FRAGRANCES"
                  checked={formState.choices.includes('FRAGRANCES')}
                  onChange={handleChoiceChange}
                  
                />
                <label className="text-light form-check-label" htmlFor="fragrances">
                  Fragrances
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="dresses"
                  value="DRESSES"
                  checked={formState.choices.includes('DRESSES')}
                  onChange={handleChoiceChange}
                />
                <label className="text-light form-check-label" htmlFor="dresses">
                  Dresses
                </label>
              </div>
              {formState.errors.choices && (
                <div className="text-danger">{formState.errors.choices}</div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <Button className="btn btn-dark btn-gradient-light text-warning" variant="primary" type="submit">
            Sign Up
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}



































/* import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

function SignUp({ handleLogin }) {
  const [name, setName] = useState('');
  const [fathername, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const formRef = useRef(null);

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords Do Not Match',
        text: 'Please make sure the passwords match.',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Retry',
      });
      return;
    }

    const currentDate = new Date();
    const userBirthDate = new Date(age);

    // Calculate the age difference in years
    const ageDiff = currentDate.getFullYear() - userBirthDate.getFullYear();

    if (ageDiff < 18) {
      setAgeError('You must be at least 18 years old to sign up.');
      return;
    }

    // Save user data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('Father Name', fathername);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('Date of Birth:', age);

    setIsLoggedIn(true);

    Swal.fire({
      icon: 'success',
      title: 'Account Created',
      text: 'Your account has been successfully created!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue',
    });

    console.log('Name:', name);
    console.log('Father Name:', fathername);
    console.log('Date of Birth:', age);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    resetForm();
  };

  const handleSignOut = () => {
    // Clear user data from local storage
    localStorage.removeItem('name');
    localStorage.removeItem('Father Name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('Age');

    setIsLoggedIn(false);

    Swal.fire({
      icon: 'success',
      title: 'Signed Out',
      text: 'You have been signed out successfully!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue',
    });
    
    resetForm();
  };
  
  const resetForm = () => {
    setName('');
    setFatherName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAge('');
    setAgeError('');
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="my-5 square border border-warning rounded-12 w-50 d-flex flex-column align-items-center">
        <h4 className="my-4">Registration Form</h4>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {localStorage.getItem('name')}!</p>
            <Button variant="primary" className="btn btn-danger mb-3" onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : (
          <Form onSubmit={handleSignupFormSubmit} ref={formRef}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="mb-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicFatherName">
                  <Form.Label>Father Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Father name"
                    className="mb-2"
                    value={fathername}
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="formBasicAge">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your date of birth"
                className="mb-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              {ageError && <Form.Text className="text-danger">{ageError}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="mb-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword" className="text-center">
              <Button variant="primary" type="submit" className="btn btn-warning my-3">Sign Up</Button>
            </Form.Group>
          </Form>
        )}
      </div>
    </div>
  );
}

export default SignUp; */