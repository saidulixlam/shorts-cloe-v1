import { Avatar } from "@material-ui/core";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import InsertCommentIcon from "@material-ui/icons/InsertComment";
// import NearMeIcon from "@material-ui/icons/NearMe";
import { MoreVert, Videocam, Search } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useRef, useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./Video.css";
import { Button } from "react-bootstrap";

function Video({
  id,
  src,
  channel,
  description,
  like,
  dislike,
  share,
  comment,
}) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);

  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);
    }
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  return (
    <div className="video">
      <video
        id={id}
        className="video__player"
        onClick={handleVideoPress}
        loop
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
            < ThumbUpIcon />
            <p>10</p>
          </div>
          <div className="shortsVideoSideIcon">
            < ThumbDownIcon />
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
          <h6 className="text-light m-0 animated-title ">Title</h6>

            <p className="description m-0 animated-des">Description goes here.</p>
            <span className="text-light">#shorts #reel #joy</span>
          </div>

          <div className="shortDetails d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <Avatar
                className="mx-1"
                src={
                  "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
                }
              />
              <p className="mx-1 text-light mt-1">chnnel name</p>
              <Button className="mx-1 p-1 rounded-2 "
                variant="danger"
                style={{
                  background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
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