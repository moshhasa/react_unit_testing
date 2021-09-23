import React, { useState } from 'react'
import Output from './Output';

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);
    const changeTextHandler = () => {
        setChangeText((prevState) => prevState = !prevState)
    }

    return (
        <div>
            <h1>Hello World</h1>
            {!changeText && <Output>Iniital test</Output>}
            {changeText && <Output>Changed</Output>}
            <button onClick={changeTextHandler}>Change</button>
        </div>
    )
}

export default Greeting
