import React from 'react'

const Btn = (props) => {
  return (
    <div className="btnGroup">
        <button className="Btn" onClick={() => props.start()}>
          {props.text}
        </button>
        <button className="Btn reset" onClick={() =>  props.reset()}>
          Reset
        </button>
      </div>
  )
}

export default Btn