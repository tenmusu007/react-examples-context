import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

export default function Storybook() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setList(res.data));
  });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: 'hsl(30, 38%, 92%)',
        gap: '1rem',
      }}>
      {list.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}
