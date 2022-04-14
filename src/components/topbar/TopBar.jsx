import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user=false;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/">Home</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/">About</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/">Contact</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/write">Write</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {user?(
                <img className='topImg' src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="" />
            ):(
                <>
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className='link' to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to="/register">REGISTER</Link>
                        </li>
                    </ul>
                </>
            )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
