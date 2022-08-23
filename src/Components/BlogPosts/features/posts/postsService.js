import axios from 'axios';
<<<<<<< HEAD
=======
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from '../../firebase-config';

const postsCollectionRef = collection(db, 'posts');
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
<<<<<<< HEAD
=======
  getFromFirebase: async () => {
    const response = await getDocs(postsCollectionRef);
    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
<<<<<<< HEAD
=======
  postToFirebase: async (post) => {
    const response = await addDoc(postsCollectionRef, post);
    return { ...post, id: response.id };
  },
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
<<<<<<< HEAD
  update: async (post) => {
    console.log('post', post);
=======
  deleteFromFirebase: async (id) => {
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef);
    return id;
  },
  update: async (post) => {
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
<<<<<<< HEAD
=======
  updateInFirebase: async (post) => {
    const docRef = doc(db, 'posts', post.id);
    await updateDoc(docRef, { title: post.title, body: post.body });
    return post;
  },
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
};

export default postsService;
