import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogOut"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  
  const { logout } = useLogout()
  const { user } = useAuthContext()

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
          {user ?
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
          :
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          }
        </nav>
    </header>
  )
}

export default Navbar