import React from 'react'
import './styles.css'

const Colordisplay = (props) => {
  return (
    <div className='newdiv'>
        {
            props.allcolors.map((color, i)=>{
                return (
                    <div key={i} className='colorsize' style={{backgroundColor: color.colors}}>{color.colors}</div>
                )
            })
        }
    </div>
  )
}

export default Colordisplay