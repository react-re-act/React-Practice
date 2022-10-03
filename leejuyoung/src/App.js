import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']); //destructuring 변수생성 문법
  let [따봉,따봉변경] = useState([0,0,0]); //오른쪽은 state변경함수
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);

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
            <p>2월 17일 발행</p>
          </div>
          )  
        })
        
      }
      <div>
      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>
      </div>
      {
      modal == true ?<Modal title = {title} 글제목 = {글제목} 글제목변경 = {글제목변경}/>: null
      }
      </>
  )
}

function Modal(props) {
  return (
    <div className="modal" >
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick = {()=>{
          props.글제목변경('여자코트추천','강남우동맛집','파이썬독학')
        }}>글수정</button>
      </div>
  )
}
export default App;

