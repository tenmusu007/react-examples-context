import React from 'react';

export default function Card(props) {
  const { item } = props;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: 'auto',
        alignItems: 'center',
        rowGap: '1rem',
        columnGap: '1rem',
        padding: '1rem',
      }}>
      <img
        style={{
          width: '90%',
          borderRadius: '10px 0 0 10px',
          objectFit: 'contain',
        }}
        src={item.image}
        alt=''
      />
      <div style={{}}>
        <h4>{item.title.substring(0, 100)}</h4>
        <p>{item.description.substring(0, 100)}</p>
        <h2>${item.price.toFixed(2)}</h2>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
