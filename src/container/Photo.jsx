import React,{useEffect,useMemo,useState} from 'react';
import { getPhoto, getComment } from '../modules/getData';
import { useSelector, useDispatch } from 'react-redux';
import PhotoComponent from '../components/PhotoComponent';
import styled from 'styled-components';


const ImgModal = ({url, id}) => {
  return (
    <UrlBox>
      <nav>
          <button>X</button>
      </nav>
      <img src={url} alt="url"/>
    </UrlBox>
  )
}


const Photo = () => {
  const [isModal,setIsModal] = useState(false)
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()
  const getPhotoLoading = useSelector(state => state.getDataReducer.loading.GET_PHOTO)
  const getCommentLoading = useSelector(state => state.getDataReducer.loading.GET_COMMENT)
  const getPhotoData = useSelector(state => state?.getDataReducer?.photo)
  // const getCommentData = useSelector(state => state.getDataReducer.comment)

  useEffect(() => {
    dispatch(getPhoto())
  },[])

  

  return (
    <>
    {getPhotoLoading && ( <h1>Loading....</h1> )}


    <Container>
      {!getPhotoLoading &&
        getPhotoData &&
        getPhotoData.map(photo => {
          return (
            <PhotoComponent key={photo.id} photo={photo}/>
          )
        })
      }
    </Container>
   
    </>
  );
};

export default Photo;

const Container = styled.div`
  position : relative;
  width : 100%;
  height: 500vw;
  overflow: hidden;
`;



const UrlBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:999px;
  border : 1px solid black;


  nav {
      background-color: grey;
      border-bottom: 1px solid lightgray;
      padding:5px 0px;
      padding-right:10px;
      margin-bottom: 10px;
      max-width:100%;
      display:flex;
      justify-content: flex-end
    }
  img {
    margin-top : 10px;
  }
`;