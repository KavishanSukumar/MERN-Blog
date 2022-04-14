import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://i.picsum.photos/id/1045/3936/2624.jpg?hmac=PMfAbC94Asle_jgeRYsj7zQHFabfTfsIwL247Ewetwc" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Kavishan</b></span>
                <span className="singlePostDate">Date: <b>1 hour ago</b></span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Ducimus quae aspernatur dolorum? 
                Molestias, praesentium nobis veritatis quam at cupiditate
                , deleniti necessitatibus et optio sapiente architecto 
                ab voluptatibus ipsam ducimus suscipit! Earum nihil 
                tempora quaerat officiis atque, maiores sit asperiores 
                nulla molestias sapiente accusantium, omnis ea ad 
                consequatur tempore deleniti sunt. Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. Architecto doloribus 
                voluptas modi repellendus id non vel! Quas natus doloribus 
                nisi velit molestiae explicabo sint, debitis similique minus
                 hic iste consequatur tempora recusandae perspiciatis quibusdam, 
                 soluta rerum ipsa dolorem magni? Labore aspernatur officiis 
                 reprehenderit voluptates inventore vel distinctio autem? Incidunt
                  placeat voluptatum fuga exercitationem libero illum maxime ipsum 
                  deleniti fugit praesentium eveniet, laborum nihil explicabo. Velit 
                  consequatur aliquam fugit laborum sint dignissimos aliquid, labore 
                  a odio eius in vel. Optio, alias velit laboriosam blanditiis, 
                  fugiat dolores laborum ducimus fuga voluptatum, consequuntur nemo 
                  saepe magni vero sed in! Quisquam nulla consectetur corporis?
            </p>
        </div>
    </div>
  )
}
