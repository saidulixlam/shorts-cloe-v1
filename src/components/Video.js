import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MoreVert, Videocam, Search } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Video.css";

function Video({
  id,
  src,
  title,
  channel,
  song
}) {
  const [playing, setPlaying] = useState(true);
  const [subs, setSubs] = useState(false);
  const [likes, setLikes] = useState(40);
  const [dislikes, setDislikes] = useState(10);


  const videoRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes_${src}`);
    const storedDislikes = localStorage.getItem(`dislikes_${src}`);

    setLikes(storedLikes ? parseInt(storedLikes, 10) : 0);
    setDislikes(storedDislikes ? parseInt(storedDislikes, 10) : 0);
  }, [src]);


  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      setPlaying(true);
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };
  const liked = localStorage.getItem(`liked_${src}`);
  const disliked = localStorage.getItem(`disliked_${src}`);
  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };
  const handleLikes = () => {
    if (!liked) {

      setLikes((prevLikes) => prevLikes + 1);
      localStorage.setItem(`likes_${src}`, likes + 1);
      localStorage.setItem(`liked_${src}`, 'true');


      const disliked = localStorage.getItem(`disliked_${src}`);
      if (disliked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        localStorage.setItem(`dislikes_${src}`, dislikes - 1);
        localStorage.removeItem(`disliked_${src}`);
      }
    }
  };

  const handleDislikes = () => {

    if (!disliked) {

      setDislikes((prevDislikes) => prevDislikes + 1);
      localStorage.setItem(`dislikes_${src}`, dislikes + 1);
      localStorage.setItem(`disliked_${src}`, 'true');


      const liked = localStorage.getItem(`liked_${src}`);
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
        localStorage.setItem(`likes_${src}`, likes - 1);
        localStorage.removeItem(`liked_${src}`);
      }
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          videoRef.current.play();
        } else {
          setPlaying(false);
          videoRef.current.pause();
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [id]);

  return (
    <div className="video" ref={containerRef}>
      <video
        id={id}
        className="video__player"
        onClick={handleVideoPress}
        loop
        muted
        ref={videoRef}
        src={src}
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="text-light d-flex align-items-center">
            <ArrowBackIcon className="mx-2" />
            <YouTubeIcon className="mx-2" />
          </div>

          <div className="shortsVideoTopIcon">
            <Videocam />
            <Search />
            <MoreVert />
          </div>
        </div>

        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <Button variant="transparent" onClick={handleLikes}><ThumbUpIcon style={{ color: liked ? 'blue' : 'white' }} /></Button>
            <p>{likes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <Button variant="transparent" onClick={handleDislikes}>< ThumbDownIcon style={{ color: disliked ? 'blue' : 'white' }} /></Button>
            <p>{dislikes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            < ShareIcon />
            <p>Share</p>
          </div>

          <div className="shortsVideoSideIcon">
            < CommentIcon />
            <p>10+</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc d-flex flex-column">
            <h6 className="text-light m-0 ">{title}</h6>

            <span className="text-light">#shorts #reel #joy</span>
            <p className="description m-0 animated-title">{song}</p>
          </div>

          <div className="shortDetails d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
            <AccountCircleIcon style={{ fontSize: '32px' }} />
              <p className="mx-1 text-light mt-1">{channel}</p>
              <Button className="mx-1 p-1 rounded-2 "
                variant="danger"
                style={{
                  background: subs ? "hsla(0,0%,69.4%,.609)" : "red",
                }}
                onClick={handleSubscribe}
              >
                {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
              </Button>
            </div>
            <div >
              <PlayCircleIcon style={{ fontSize: '32px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;