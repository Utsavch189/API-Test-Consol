import React from 'react'

function Alert({status}) {
  return (
    <>
    {
        status===200?
        <div class="alert alert-success" role="alert">
            Successfully Posted {status}
        </div>
        :
        <div class="alert alert-danger" role="alert">
            Something went wrong!!! {status}
        </div>
    }
    </>
  )
}

export default Alert