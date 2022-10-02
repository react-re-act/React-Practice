import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [date, b] = useState(['2월 17일 발행','2월 17일 발행','2월 17일 발행']);
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']); //destructuring 변수생성 문법
  let [따봉,따봉변경] = useState([0,0,0]); //오른쪽은 state변경함수
  let [modal,setModal] = useState(false);

  //자동렌더링
  return(
  //   <div className="App">
  //     <div className="black-nav">
  //       <h4>ReactBlog</h4> 
  //     </div>
      
  //     <div className='list'>
  //       <h4>{ 글제목[0]}<span onClick={() => {따봉변경(따봉+1)} }>👍</span> {따봉} </h4> 
  //       <p>{date[0]}</p>
  //     </div>
  //     <div className='list'>
  //       <h4>{ 글제목[1] }</h4>
  //       <p>{date[1]}</p>
  //     </div>
  //     <div className='list'>
  //       <h4 onClick={() => {
  //         let a = count;
  //         a++;
  //         setCount(a)}}>{글제목[2]}</h4>
  //       <p>{date[2]}</p>
  //     </div>
      <>
      {
        글제목.map(function(a, i) {
          return (
          <div className='list'>
            <h4 onClick={()=>{ setModal(true)}}>{ 글제목[i] } 
            <span onClick={() => {
              let copy = [...따봉];
              copy[i]+=1;
              따봉변경(copy);
            } }>👍</span> {따봉[i]}</h4>
            <p>{date[i]}</p>
          </div>
          )  
        })
        
      }
      {
      modal == true ?<Modal 글제목 = {글제목} 글제목변경 = {글제목변경}/>: null
      }
      </>
  )
}

function Modal(props) {
  return (
    <div className="modal" style = {{background: props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick = {()=>{
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy);
        }}>글수정</button>
      </div>
  )
}
export default App;

