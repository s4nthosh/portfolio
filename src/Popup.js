import React from 'react'
import {PiWarningOctagonFill} from 'react-icons/pi'
const Popup = ({PopUp,setPopup}) => {
  return (
    <div className='popup'>
      <div className='pop-up-content'>
        <div className='warning-svg'>
            <PiWarningOctagonFill/>
            <h2>Page-Update</h2>
        </div>
        <h1>sry for the intreption this site may or may not be optimise so plz open on pc or bigger screen.If u want to see the page just, <span>click ok</span></h1>
        <button className='pop-up-close' onClick={()=>setPopup(!PopUp)}>OK</button>
      </div>
    </div>
  )
}

export default Popup
