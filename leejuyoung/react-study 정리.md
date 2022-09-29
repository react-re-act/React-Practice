# react-study 정리

# 1. react study 1주(~Array and object)

App.js에서 코딩

1.jsx문법

jsx문법을 js에서 html대용으로 사용가능 return 문 안에서 div는 한개만 있어야한다. 

jsx 문법 1 ) class를 넣고싶을땐 className사용

ex) className=”App”

jsx 문법 2) 변수를 html안에 넣고싶을때는 {} 중괄호 사용

ex) let post = ‘강남 우동 맛집’;

…return(<div>{post}</div>)

jsx 문법 3) style을 넣을때는 이런식으로

<h4 style={ {color: ‘red’, fontSize: ‘16px’} }>

블로그임</h4>

1. state

state는 많이 변경되는 자료를 쉽게 관리하기위해서 사용

let [a,b] = useState(’’);

a : state이름 b: state변경함수

1. 버튼에 기능개발 & 리액트 state 변경하는법

```
<h4>{ 글제목[0]}<span onClick={() => {따봉변경(따봉+1)} }>👍</span> {따봉} </h4>
```

html 태그에 onClick속성안에 변경함수를 넣어줌으로써 클릭할때마다 state를 변경 시킬 수 있다 .

```jsx
let [따봉,따봉변경] = useState(0); //오른쪽은 state변경함수
```

state에 0을넣었고 onclick속성에 변경함수에 (state+1)을 넣었으므로 클릭할때마다 1씩 증가한다. 

1. array. object state는 어떻게 변경할까?

array와 object와 같은 자료형은 이와같은 자료형을 담은 변수에는 화살표(주소)만 저장이된다.

```jsx
<button onClick = {()=> {
        let copy = 글제목;
        copy[0] = '여자코트추천';
        글제목변경(copy);
      }}>글제목변경</button>
```

와같이 button을 만들고 나중에 글제목을 바꾸려고해도 바뀌지않는이유는 글제목에 저장되있던거는 화살표만을 저장하므로 copy를 바꾸려고해도 화살표는 바뀌지않으므로 소용이없는 것이다. 

console.log(글제목==copy)를 해보아도 변수가 담고있는 것(화살표)이 같으므로 변경이 되지 않는 것이다.  

따라서 

```jsx
<button onClick = {()=> {
        let copy = [...글제목];
        copy[0] = '여자코트추천';
        글제목변경(copy);
      }}>글제목변경</button>
```

[…글제목]으로 별개의 복사본을 만들어서 copy에 저장한다음 그것을 변경함수에 넣으면 된다

정리하자면, array나 object와 같은 state는 복사본을 만들어서 수정해야한다!

과제) 가나다순정렬버튼만들기

```jsx
<button onClick={()=>{
        let copy=[...글제목];
        copy.sort(); //array정렬함수
        글제목변경(copy);//변경함수에 변경한 독립적카피본 copy를 넣음
      }}>가나다순정렬</button>
```

/