import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, updatePost } from './features/posts/postsSlice';

export default function Post(props) {
  const { post } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.posts);
  const [isEditing, setIsEditing] = useState(false);
  // const editTitleRef = useRef();
  // const editBodyRef = useRef();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return (
    <article key={post.id}>
      {isEditing ? (
        <>
          <button
            onClick={() => {
              const updatedPost = {
                ...post,
                title,
                body,
              };
              dispatch(updatePost(updatedPost));
              setIsEditing(false);
            }}>
            Done
          </button>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id=''
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='2'
              value={body}
              onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </>
      ) : (
        <>
          {isUpdating.status && isUpdating.postId === post.id ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <button onClick={() => dispatch(removePost(post.id))}>X</button>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          )}
        </>
      )}
    </article>
  );
}
