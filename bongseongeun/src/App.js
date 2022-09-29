/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import{ useState } from 'react';
function App() {

  let post='강남 우동 맛집';
  // let [코트, a]=useState('남자 코트 추천')
  // let [우동, d]=useState('강남 우동맛집')
  // let [파이썬, c]=useState('파이썬독학')
  let [글제목, 글제목변경]=useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학'])
  let[따봉, 따봉변경]=useState([0,0,0]);
  // let[따봉1, 따봉변경1]=useState(0);
  // let[따봉2, 따봉변경2]=useState(0);
  let[modal, setModal]=useState(false)

  // [1, 2, 3].map(function(){//array 자료 갯수만큼 함수 안의 코드 반복
  //   //function(a)
  //   //console.log(a) 하면 a가 배열 안에 있는 숫자로 바뀜
  //   //return'1233211'하면 ''안에있는게 배열로 감

  // })

function 함수(){
    따봉변경(따봉+1)   
}

function ascending ( a , b ) {return ( a < b ) ? -1 : ( a == b ) ? 0 : 1;        }
  return (
    <div className="App">
     <div className="black-nav">
      <h4>ReactBlog</h4>
     </div>

    <button onClick={()=>{
      let copy=[...글제목]
      copy.sort()
      글제목변경(copy)
    }}>가나다순정렬
    </button>

     <button onClick={()=>{
        let copy =[...글제목]
        copy[0]='여자코트 추천'
        글제목변경(copy)
      }}>글수정
      </button>
      <div></div>
     {/* <div className="list">
      <h4>{글제목[0]}<span onClick={함수}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
     </div>
     <div className="list">
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
     </div>
     <div className="list">
      <h4 onClick={()=>{modal==true? setModal(false):setModal(true)}} >{글제목[2]}</h4>
      <p>2월 17일 발행</p>
     </div> */}
      {
        modal == true ? <Modal></Modal> : null
      }

      {
        글제목.map(function(a, i){
          return (
          <div className="list">
          <h4>{글제목[i]}<span onClick={()=>{
            let copy=[...따봉]
            copy[i]=copy[i]+1
            따봉변경(copy)
          }}>👍</span> {따봉[i]} </h4>
          <p>2월 17일 발행</p>
          </div>)
        })
      }


    </div>
  );
}

function Modal(){//함수  축약
  return(
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
   </div>
  )
}

export default App;
