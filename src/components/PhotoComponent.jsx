import React,{useState} from 'react';
import styled from 'styled-components';



const PhotoComponent = ({photo}) => {
  const {id, thumbnailUrl, title, url} = photo
  
  return (
    <Container>
      <div onClick={() => console.log(id)}>
        <img className="thumnailContainer" src={thumbnailUrl} alt="thumnail"/>
      </div>
      <div className="textContainer">
        <h1>{title}</h1>
        <h3>subtitle</h3>
      </div>
    </Container>
    
  );
};

export default PhotoComponent;

const Container = styled.div`
  margin : 0;
  padding: 0;
  display:flex;
  & + & {
    margin : 15px 0 15px 0;
  }

  .thumnailContainer{
    border-radius: 10px;
    margin-right:10px;
  }

  .textContainer {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    h1 {
      margin: 0;
      font-size: 30px;
      margin-bottom : 15px;
    }
    h3 {
      margin: 0;
      font-size: 25px;
    }
  }
`;



