import React,{useState} from 'react'
import '../Styles/post.css'
import axios from 'axios';
import { myaxios } from '../authorized_axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Alert from './Alert';

function Post() {
  const [header,setHeader]=useState(null);
  const [api,setApi]=useState('');
  const [body,setBody]=useState(null);
  const [res,setRes]=useState(null);
  const [consoleColor,setConsoleColor]=useState('white');
  const opt=['white','green','red','gray']

  const post=()=>{
    if(api && !header &&body){
      axios.post(api,body)
      .then(res=>{
        setRes(res.status)
      })
    }
    else if(api && header &&body){
      console.log(body)
      myaxios(header).post(api,body)
      .then(res=>{
        setRes(res.status)
      })
    }
  }

  const _onSelect=(e)=>{
    setConsoleColor(e.value)
  }
  console.log(body)

  return (
    <>
      <div className="container main-get">
        {res&&<Alert status={res}/>}
        <div className="input">
          <input type="text" className='input-field' placeholder='Enter API Address' onChange={(e)=>setApi(e.target.value)}/>
          <button className='btn btn-primary' onClick={()=>post()}>POST</button>
        </div>

        <div className="body">
          <div className="header-enter">
            <textarea name="" id="" cols="80" rows="15" placeholder='Enter api authorization token if have...' onChange={(e)=>setHeader(e.target.value)} style={{"backgroundColor":"black","color":consoleColor,padding:'15px'}}/>
          </div>
          
          <div className="output-post" style={{"color":consoleColor}}>
            <div className="output-head-post">
            <Dropdown options={opt} onChange={(e)=>_onSelect(e)} value={consoleColor} placeholder="Select an option" className='dropdown'/>
            </div>
           
              <textarea className="output-data-post" name="" id="" cols="70" rows="20" onChange={(e)=>setBody((e.target.value))} placeholder='Enter Api Body..Ex -> {"key":"value"}'style={{"color":consoleColor}}></textarea>
            
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Post