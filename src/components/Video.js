import { Avatar } from "@material-ui/core";
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
  

  const videoRef = useRef(null);
  const containerRef = useRef(null);

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

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
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
            <Button variant="transparent">< ThumbUpIcon /></Button>
            <p>765</p>
          </div>
          <div className="shortsVideoSideIcon">
          <Button variant="transparent">< ThumbDownIcon /></Button>
            <p>10</p>
          </div>
          <div className="shortsVideoSideIcon">
            < ShareIcon />
            <p>Share</p>
          </div>

          <div className="shortsVideoSideIcon">
            < CommentIcon />
            <p>10</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc d-flex flex-column">
          <h6 className="text-light m-0 ">{title}</h6>

            {/* <p className="description m-0 ">Description goes here.</p> */}
            <span className="text-light">#shorts #reel #joy</span>
            <p className="description m-0 animated-title">{song}</p>
          </div>

          <div className="shortDetails d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <Avatar
                className="mx-1"
                src={
                  "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
                }
              />
              <p className="mx-1 text-light mt-1">{channel}</p>
              <Button className="mx-1 p-1 rounded-2 "
                variant="danger"
                style={{
                  background: subs ?"hsla(0,0%,69.4%,.609)": "red" ,
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