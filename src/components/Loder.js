import React from 'react'

function Loder(props) {
  return (
   <>
    <div style={{borderColor:`${props.color}`}} className="lds-ripple">
        <div style={{borderColor:`${props.color}`}}></div>
        <div style={{borderColor:`${props.color}`}}></div>
    </div>
   </>
  )
}

export default Loder