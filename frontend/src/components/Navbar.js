import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogOut"

const Navbar = () => {
  
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>toDo</h1>
            </Link>
        </div>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <Link to="/login">
            <h3>Login</h3>
          </Link>
          <Link to="/signup">
            <h3>Signup</h3>
          </Link>
        </nav>
    </header>
  )
}

export default Navbar