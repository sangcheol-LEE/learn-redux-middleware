import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUsers } from '../modules/sample';

const Sample = () => {
  const loadingPost = useSelector(state => state.sampleReducer.loading.GET_POST);
  const loadingUsers = useSelector(state => state.sampleReducer.loading.GET_USERS);
  const post = useSelector(state => state.sampleReducer.post);
  const users = useSelector(state => state.sampleReducer.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost(1))
    dispatch(getUsers(1))
  },[getPost,getUsers])
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중 ..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>user list</h1>
        {loadingUsers && "로딩 중 ..."}
        {!loadingUsers && users && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;