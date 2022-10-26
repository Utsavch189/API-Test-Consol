import React,{useState} from 'react'
import '../Styles/get.css'
import axios from 'axios';
import { myaxios } from '../authorized_axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Get() {

  const [header,setHeader]=useState(null);
  const [api,setApi]=useState('');
  const [data,setData]=useState(null);
  const [consoleColor,setConsoleColor]=useState('white');
  const opt=['white','green','red','gray']

  const get=()=>{
    if(api && !header){
      axios.get(api)
      .then(res=>{
        setData(res['data'])
        console.log(res['data'])
      })
    }
    else if(api && header){
      myaxios(header).get(api)
      .then(res=>{
        setData(res['data'])
        console.log(res.status)
      })
    }
  }
  const copyOnClick = () => {
    var text = document.getElementById("textBox").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Text Copied to Clipboard");
  };

  const _onSelect=(e)=>{
    setConsoleColor(e.value)
  }

  return (
    <>
      <div className="container main-get">
        <div className="input">
          <input type="text" className='input-field' placeholder='Enter API Address' onChange={(e)=>setApi(e.target.value)}/>
          <button className='btn btn-primary' onClick={()=>get()}>GET</button>
        </div>

        <div className="body">
          <div className="header-enter">
            <textarea name="" id="" cols="80" rows="15" placeholder='Enter api authorization token if have...' onChange={(e)=>setHeader(e.target.value)} style={{"backgroundColor":"black","color":consoleColor,padding:'15px'}}/>
          </div>
          
          <div className="output" style={{"color":consoleColor}}>
            <div className="output-head">
            <Dropdown options={opt} onChange={(e)=>_onSelect(e)} value={consoleColor} placeholder="Select an option" className='dropdown'/>
              <button className='btn btn-outline-white' style={{"color":"white"}} onClick={copyOnClick}>Copy</button>
            </div>

            <div className="output-data" >
              <p id='textBox'>
              {
                data? JSON.stringify(data) : <p>Output Console...</p>
              }
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Get