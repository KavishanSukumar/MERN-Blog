import './singlepost.css'
import {useLocation} from "react-router"
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location= useLocation()
    const path= location.pathname.split("/")[2];
    const [post,setPost]=useState([]);
    const {user}=useContext(Context);
    const PF="http://localhost:5000/images/";

    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const [updateMode, setUpdateMode]=useState(false);
    
    useEffect(()=>{
        const fetchPost=async ()=>{
            const res=await axios.get("/posts/"+path);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        fetchPost();
    },[path])
    
    const handleDelete=async ()=>{
        try{
            await axios.delete(`/posts/${post._id}`,{
                data:{username:user.username}
            });
            
            window.location.replace("/");
        }catch(err){
            
        }
    }

    const handleUpdate=async ()=>{
        try{
            await axios.put(`/posts/${post._id}`,{
                username:user.username,
                title,
                desc,
            });
            
            // window.location.reload();
            setUpdateMode(false);
        }catch(err){
            
        }
    }
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img src={PF+post.photo} alt="" className="singlePostImg" />
            )}
            {
                updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>:(
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username===user?.username && (
                            <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )
            }
            
            <div className="singlePostInfo">
                
                <span className="singlePostAuthor">Author: 
                    <Link className='link' to={`/?user=${post.username}`}>
                        <b>{post.username}</b>
                    </Link>
                </span>
                <span className="singlePostDate">Date: <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            { 
                updateMode ? <textarea className='singlePostDescInput' onChange={(e)=>setDesc(e.target.value)}>{desc}</textarea>: (
                    <p className='singlePostDesc'>
                     {desc}
                    </p>
                )
            }
            {updateMode && (
                <button className='singlePostButton' onClick={handleUpdate}>Update</button>
            ) }
        </div>
    </div>
  )
}
