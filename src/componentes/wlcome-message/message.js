import React from 'react'
import './message.css'

class Message extends React.Component{
    render(){
        return(
            <div className='welcome-text'>
                <h3>{this.props.title}</h3>
                <p style={{ textTransform: 'uppercase' }}>{this.props.usuario} to our community! We are delighted to have you here.
                    We want you to enjoy all our services and resources.
                    If you have any questions or need assistance, feel free to reach out to us.
                    We are committed to providing you with the best possible experience.
                    Welcome back, and we wish you a wonderful stay!</p>
            </div>
        )
    }
}

export default Message