import React from 'react'

function Errors(props) {
  return (
    <div>
         {props.errors ? 
            <ul className = "form-errors"> {props.errors.map((error) => (
                <li key={error.id}>{error.title}</li>
                ))}
            </ul> 
        : null}
    </div>
  )
}

export default Errors