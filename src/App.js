import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [a, b] = useState('남자 코트 추천');
  let [c, d] = useState('강남 우동 맛집');
  let [e, f] = useState('파이썬독학');
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{c}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{e}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
