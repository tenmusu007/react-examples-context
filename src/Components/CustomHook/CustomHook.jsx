import React from 'react';
import useAxios from './hooks/useAxios';

export default function CustomHook() {
<<<<<<< HEAD
  //jsonplaceholder: https://jsonplaceholder.typicode.com/

=======
  //https://the-trivia-api.com/api/questions
  //https://jsonplaceholder.typicode.com/
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  // const { data } = useAxios(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   'post',
  //   { title: 'Test title', body: 'Test body' }
  // );
<<<<<<< HEAD
  const { data } = useAxios(
    'https://the-trivia-api.com/api/questions',
    'get',
    null
  );

  console.log('data in component', data);
  return <div>CustomHook</div>;
=======
  const { data } = useAxios('https://jsonplaceholder.typicode.com/posts');
  console.log('data', data);
  return (
    <div>
      <h1>Custom Hook</h1>
    </div>
  );
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
}
