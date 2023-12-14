import React, { useState } from 'react'
import "./Home.css"

function Home() {

  const name = "abrham"
  const moonLanding = new Date()
  const head2_style = {
    color: 'red',
    border: "black 1px solid",
    fontSize: "1rem"

  }
 const event = new Date(2023, 5, 5 ,13)
  let currentTime=event.getHours()
  let greeting;
 const heading1={
  color:""
 };

  if (currentTime<12){
    greeting="Goodmorning" 
    heading1.color="red"
      

  }
  else if(currentTime<18){
    greeting="good afternon"
    heading1.color="blue"
  }
    
  else{
      greeting="good evening"
      heading1.color="yellow"
    }


  return (
    <div>

      <h1 contentEditable="true" spellCheck="false">This is heading 1</h1>
      <p>created by {name}</p>
      <p>Copywrite by {moonLanding.getFullYear()}</p>

      <br />
      <h2 style={head2_style}>This is heading 2</h2>
      <h1 className='heading2' style={heading1}>{greeting}</h1>


    </div>
  )
}

export default Home