import React from 'react'
import { useState } from 'react'

export default function Password() {
  let [Password,setPassword]=useState('')
  let [copy,setCopy]=useState('')
  const length =12
  const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase="abcdefghijklmnopqrstuvwxyz"
  const number="1234567890"
  const symbol="!@#$%^&*~(){}[]/+?,.<>="
  const allchars=uppercase + lowercase + number + symbol;

function createpassword(){
  let getPassword=''
  getPassword+=uppercase[Math.floor(Math.random()*uppercase.length)]
  getPassword+=lowercase[Math.floor(Math.random()*lowercase.length)]
  getPassword+=symbol[Math.floor(Math.random()*symbol.length)]
  getPassword+=number[Math.floor(Math.random()*number.length)]


  while(getPassword.length<length){
  getPassword+=allchars[Math.floor(Math.random()*allchars.length)]

  }
  setPassword(getPassword.split('').sort(() => 0.5 - Math.random()).join(''));

}

function input(e){
  e.preventDefault()
  setPassword(e.target.value)
}

function copypassword(){
  navigator.clipboard.writeText(Password).then(() => {
    alert('Text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

  return (
<div className='Psw'>
<div className="container">
      <div className="display">
      <h1>Generating password</h1>
        <form>
          <input type="text" onChange={input} value={Password} placeholder="password"/>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/423/339/small/Multimedia__2850_29.jpg" alt="" onClick={copypassword} />
        </form>
        <br/>
        <button onClick={createpassword}>Generate password</button>
      </div>
      </div>
    </div>
  )
}
