import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'

export default function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
       const fetchCat=async ()=>{
           const cats=await axios.get("/cats");
           setCats(cats.data);
       } 
       fetchCat();
    },[])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquid consectetur unde accusantium voluptatibus 
                 laudantium perferendis suscipit quasi commodi mollitia. 
                 Error!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">categories</span>
            <ul className="sidebarList">
                {cats.map(p=>(
                    <li className="sidebarListItem">{p.name} </li>
                ))}
                
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>
        </div>
    </div>
  )
}
