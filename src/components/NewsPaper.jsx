import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUser } from '../modules/getData';
import styled from 'styled-components';

const NewsPaper = () => {
  const dispatch = useDispatch()
  const loadingPost = useSelector(state => state.getDataReducer.loading.GET_POST);
  const loadingUser = useSelector(state => state.getDataReducer.loading.GET_USER);
  const post = useSelector(state => state.getDataReducer.post);
  const user = useSelector(state => state.getDataReducer.user);

  const [num, setNum] = useState(1)

  useEffect(() => {
    dispatch(getPost(num))
    dispatch(getUser(num))
  },[num,getPost,getUser])

  const next = () => {
    if (num > 10) {
      setNum(num = 10)
    } else {
      setNum(num + 1)
    }
  }

  const prev = () => {
    if (num === 0) {
      setNum(num = 1)
    } else {
      setNum(num - 1)

    }
  }
 

  console.log(num)

  return (
    <Box>
      {(loadingPost || loadingUser) && (
        <div>뉴스 속보 준비중 ..</div>
      )}

      {((!loadingPost  && post) && (!loadingUser && user)) && (
        <>
          <h1>이안일보</h1>

        <Contents>
          <div className="postBox">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>

        <div className="userBox">
          <h2>{user.name}</h2>
          <div className="idBox">
            <span className="good">{user.email}</span>
            <span>{user.phone}</span>
          </div>
        </div>
        </Contents>
        <PrevBtn onClick={() => prev()}>Prev</PrevBtn>
        <NextBtn onClick={() => next()}>next</NextBtn>

        </>
      )}

    </Box>
  );
};

export default NewsPaper;

const PrevBtn = styled.button`
  padding : 15px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top : 175px;
  left: 50px;

`;
const NextBtn = styled.button`
  border: none;
  padding : 15px;
  border-radius: 50%;
  position: absolute;
  top : 175px;
  right : 50px;

`;

const Box = styled.div`
  border : 1px solid black;
  width : 768px;
  height:100%;
  padding : 50px 0px;
  h1 {
    color :grey;
    text-align :center;
  }

`;

const Contents = styled.div`
  margin:0 auto;
  font-size:15px;
  padding: 0 150px;
  position:relative;
  .userBox {
    display: flex;
   h2 {
     margin-right : 15px;
   }
    .idBox {
      display: flex;
      align-items:center;
        .good {
          margin-right: 10px;
        }
    }
  }
  
`;
