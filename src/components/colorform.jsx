import React, {useState} from 'react'

const Colorform = (props) => {
    const [color, setColor] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.handleNewColor( { colors:color } )
        setColor("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Color</label>
            <input type="text" name="color" onChange={(e)=>setColor(e.target.value)} value={color}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Colorform