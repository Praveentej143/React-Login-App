// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" onClick={logout} className="logout-btn">
      Logout
    </button>
  )
}

export default Logout
