import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import { dummy } from "./components/VideoCollection";

function App() {
const [videos,setVideos]=useState([]);
useEffect(()=>{
setVideos(dummy);
},[]);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((vid,index) => (
          <Video
          key={index}
            id={vid._id}
            src={vid.clip}
            title={vid.title}
            channel={vid.profile_name}
            song={vid.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
