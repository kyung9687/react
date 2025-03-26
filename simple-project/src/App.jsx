import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Button = () =>{
    return <button className='btn'>버튼</button>
  }
  const FirstCompornent =() =>{
    return (
    <>
      <h3>컴포넌트를 선언해보자</h3>
      <div>함수형 컴포넌트 예제</div>
    </>
    );
  };

  const Lego = () => {
    return (
      <>
      <FirstCompornent/>
        <Button/>
        
      </>
    )
  };


  return( 
<>
  <h1>리엑트란?</h1>
  <pre>

    
  </pre>
  <FirstCompornent/>
  <Button/>
  <FirstCompornent/>
  <Button/>
  <Lego/>
  
  
</>
  );

}

export default App
