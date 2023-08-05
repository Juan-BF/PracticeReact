import React from 'react'


const Button = (props) => {
    const eventoButton = () =>{
        alert(props.title)
    }
    return (
        <button onClick={eventoButton} style={{ marginLeft: '50px' }}>
            {props.title}
        </button>
            
    )
}

export default Button