import React,{useState} from 'react'
import '../Styles/nav.css'
import { Link } from 'react-router-dom';

function Nav() {

  const [page,setPage]=useState('get')

  return (
    <>
      <div className="main-nav">
        <nav className='nav'>
            <div className="left-child-nav">
              <Link to="/" className={page==='get'?'active':'nav-btn'} onClick={()=>setPage('get')}>GET</Link>
            </div>

            <div className="right-child-nav">
              <Link to="/post" className={page==='post'?'active':'nav-btn'} onClick={()=>setPage('post')}>POST</Link>
            </div>
        </nav>
      </div>
     
    </>
  )
}

export default Nav