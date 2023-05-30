import React from 'react'
import myGif from "../assets/Not_Found_Page_Gif.gif"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/");
  };

  //center full screen the notfound gif
  return (
    <>
        <div className="not_found">
          <img src={myGif} alt="Not-Found-Alien-Disc-Jockey" type="video/gif" onClick={handleClick}/>
        </div>
    </>
  )
}

export default NotFound
