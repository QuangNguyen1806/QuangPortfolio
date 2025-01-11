import Quang_logo from '../../../assets/images/Quang_logo_NB.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={Quang_logo}
        alt="Q-logo"
      />
    </div>
  )
}

export default Logo