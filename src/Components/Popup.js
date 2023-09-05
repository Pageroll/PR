import React, { useState } from 'react';
import './Popup.css';
import axios from 'axios'
// import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';

function Popup() {
  const[roll, setRoll] = useState('')
  const[Name1, setName1] = useState('')

  async function onSubmit(e){
    e.preventDefault()

    try{
        await axios.post('https://glowing-space-trout-5gqx6jwp6qvr27gpj-8000.app.github.dev/form',{
            roll, Name1
        }).then(res=>{
          if(res.data==="exist"){
            alert("Valid User")
          }
          else if(res.data === "notexist"){
            alert("You are not an authorised USER!")
          }
        }).catch(err=>console.log(err))

        
    }
    catch(e){
        console.log(e)
    }
  }

  return (
    
    <div className="App ">
      <header className="App-header">
          <div className="popup">
            <div className="popup-content">
              <div>
              <h2 className=' tracking-wide'>Enter your details</h2>
              <br></br>
              <form onSubmit={onSubmit} method='POST' className='m-2 p-2'>
                <label className='flex justify-between align-baseline'>
                  <b className='text-blue-100 mt-2 ml-2 tracking-wide '>Roll No:</b>
                  <input
                    className=" bg-black border border-none w-[245px] rounded-lg text-blue-800 font-normal outline-none ml-4 mb-5"

                    type="text"
                    onChange={(e) => setRoll(e.target.value)}
                  />
                </label>
                
                <label className='flex justify-between align-baseline'>
                  <b className='text-blue-100 mt-2 ml-2  tracking-wide'>DOB:</b>
                  <input
                    className="bg-black border border-none w-[245px] rounded-lg outline-none text-blue-800"
                    type="number"
                    onChange={(e) => setName1(e.target.value)}
                  />
                </label>
                <br />
                <input type="submit" value="Submit" />
              </form>
              </div>
            </div>
          </div>
      </header>
      
    </div>
  );

}

export default Popup
