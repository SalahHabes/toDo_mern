import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>toDo</h1>
            </Link>
        </div>
        <nav>
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