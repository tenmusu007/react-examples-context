import axios from 'axios';

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  delete: async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return id;
  },
  update: async (post) => {
    await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    return post;
  },
};

export default postsService;
