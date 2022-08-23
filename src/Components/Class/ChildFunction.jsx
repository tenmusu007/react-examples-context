import React from 'react';

export default function ChildFunction(props) {
<<<<<<< HEAD
=======
  const { name, setName } = props;
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  return (
    <div className='component'>
      <h1>Child Function</h1>
      <input
        type='text'
<<<<<<< HEAD
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
=======
        value={name}
        onChange={(e) => setName(e.target.value)}
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
      />
    </div>
  );
}
