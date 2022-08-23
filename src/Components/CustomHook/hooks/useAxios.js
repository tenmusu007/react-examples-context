<<<<<<< HEAD
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url, method, payload) {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      switch (method) {
        case 'get':
          console.log('getting');
          const someData = await axios.get(url);
          setData(someData.data);
          return;
        case 'post':
          console.log('posting');
          axios.post(url, payload).then((res) => setData(res.data));
          return;
        default:
          return;
      }
    };
    fetchData();
  }, []);
  console.log('data hook', data);
  return { data: data };
=======
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(url, method = 'get', data = null) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    // switch (method) {
    //   case 'get':
    //     axios.get(url).then((res) => setResult(res.data));
    //     return;
    //   case 'post':
    //     axios.post(url, data).then((res) => setResult(res.data));
    //     return;
    //   default:
    //     return;
    // }
    axios.request({ url, method, data }).then((res) => setResult(res.data));
  }, []);
  return { data: result };
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
}
