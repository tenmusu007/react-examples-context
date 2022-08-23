import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Header(props) {
  const { user } = useContext(UserContext);
  console.log('render header');
  return (
    <div className='component'>
      <h1>Header</h1>
<<<<<<< HEAD
      <h2>Hello,!</h2>
=======
      <h2>Hello, {user.name}!</h2>
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    </div>
  );
}
