import React from 'react'
import {useState} from 'react'

const Click = () => {
    const [value, setValue] = useState(0)
    let reset = () => {
        setValue(0)
    }
//    const[name, setName] = useState('buhari')
//    const [age, setAge] = useState(50)

//     let handleAgain = () =>{
//         setName('Prosper')
//         setAge(80)
//     }
    
    return (
        // <div>
        //     <p>{name} is {age} years old</p>
        //     <button onClick={handleAgain}>click me</button>
        // </div>
    // 
    <div className='count'>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button onClick={() =>{
                setValue(value -1) }}>
        Decrease          
           
        </button>
        <button onClick={() =>{setValue (value +1)}}>Increase</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}

export default Click

