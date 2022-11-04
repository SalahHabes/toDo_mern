import { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }
  return (
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
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

        <button disabled={isLoading}> Sign up</button>
        {error && <div className="errorMsg">
            {error}
        </div>}
    </form>
  )
}

export default SignUp