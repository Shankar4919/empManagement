import React from 'react'

function Alert(props) {
    const capatalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div style={{height:'60px'}}>
      {props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>}
    </div>
  )
}

export default Alert