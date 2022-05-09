import React from 'react'
import './Input.css'

function Input( props ) {
    return (
        <div className="field">
          <label>
            {props.label}
          </label>
      
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.handleChange}
        />
        </div>
    )
}

export default Input