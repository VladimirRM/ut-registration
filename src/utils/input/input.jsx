import React from 'react'
import './input.less'

const input = (props) => {
  return (
<>
<input type={props.type} placeholder={props.placeholder} />
</>
  )
}

export default input
