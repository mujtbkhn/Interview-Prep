import React, { useRef } from 'react'

const UncontrolledComp = () => {
    const inputRef = useRef()
    const handleSubmit = () => {
        const inputValue = inputRef.current.value
        console.log(inputValue)
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledComp