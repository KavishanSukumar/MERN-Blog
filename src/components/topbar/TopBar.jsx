import './topbar.css'

export default function TopBar() {
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
                <li className="topListItem">home</li>
                <li className="topListItem">about</li>
                <li className="topListItem">contact</li>
                <li className="topListItem">write</li>
                <li className="topListItem">logout</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
