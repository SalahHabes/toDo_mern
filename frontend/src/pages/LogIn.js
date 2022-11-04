import React, { useState } from 'react'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }
  return (
    <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email:</label>
        <input 
            type="email" 
            name="email" 
            placeholder="email@adress.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required/>

        <label htmlFor="password">Password:</label>
        <input 
            type="password" 
            name="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required/>

        <button> Login</button>
    </form>
  )
}

export default LogIn