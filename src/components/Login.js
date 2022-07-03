import React, { useEffect } from 'react'

function Login() {

    const handleClick = () => {
        localStorage.setItem("user", "loggedIn");
        window.location = "/";
    }

    return (
        <div>
            Login
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login 
