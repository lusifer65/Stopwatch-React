import React from 'react'

const Timer = (props) => {
  return (
    <div className="display">
    <div className="digit">
      <span>{props.time.hh>=10?props.time.hh:"0"+props.time.hh}</span>
    </div>
    <span>:</span>
    <div className="digit">
      <span>{props.time.mm>=10?props.time.mm:"0"+props.time.mm}</span>
    </div>
    <span>:</span>
    <div className="digit">
      <span>{props.time.ss>=10?props.time.ss:"0"+props.time.ss}</span>
    </div>
    <span>:</span>
    <div className="digit">
      <span>{props.time.ms>=10?props.time.ms:"0"+props.time.ms}</span>
    </div>
  </div>
  )
}

export default Timer