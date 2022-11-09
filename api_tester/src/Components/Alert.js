import React from 'react'

function Alert({status,cont}) {
  return (
    <>
    {
        status===200?
        <div class="alert alert-success mx-4 px-4" role="alert" style={{width:"auto",height:"auto"}}>
            {cont}
        </div>
        :
        <div class="alert alert-danger mx-4 px-4" role="alert" style={{width:"auto",height:"auto"}}>
            {cont}
        </div>
    }
    </>
  )
}

export default Alert