import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import { useContext } from 'react';
=======
import { useState, useContext } from 'react';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
import { UserContext } from './UserContext';

export default function UserForm(props) {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...formData });
  };
  console.log('render form');
  return (
    <div className='component'>
      <h1>UserForm</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: '1rem',
        }}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
