import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
    <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show position-absolute w-100`} role="alert">
        <strong>{props.alert.type}! </strong>{props.alert.msg}
    </div>
    </div>
  )
}
