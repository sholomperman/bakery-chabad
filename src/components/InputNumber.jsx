import React, { useState } from 'react'

const InputNumber = ({className}) => {

    const myStyle = {
        width: 35,
        hight: 15
    }

    const [state, setState] = useState('')

    const decrease = () => {
    setState({ value: state.value - 1 });
    }

    const increase = () => {
    setState({ value: state.value + 1 });
    }
    return (
        <div className={className}>
            <button onClick={decrease} className="minus"></button>
            <input style={myStyle} min='1' max='10' className="quantity" name="quantity" value={state.value} onChange={()=> console.log('change')}
            type="number" placeholder='0' />
            <button onClick={increase} className="plus"></button>
        </div>
    )
}

export default InputNumber
