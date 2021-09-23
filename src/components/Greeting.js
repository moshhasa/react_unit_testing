import React, { useState } from 'react'

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);
    const changeTextHandler = () => {
        setChangeText((prevState) => prevState = !prevState)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p> {changeText ? "Changed" :  "Iniital test"} </p>
            <button onClick={changeTextHandler}>Change</button>
        </div>
    )
}

export default Greeting
