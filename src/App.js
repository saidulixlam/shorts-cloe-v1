import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
// import axios from "axios";
const dummyVideos = [
    {
      id: 1,
      url:
        "https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4",
    },
    {
      id: 2,
      url:
        "https://www.youtube.com/embed/gyJ8ChsdxTA",
    },

];

function App() {

  return (
    <div className="app">
      <div className="app__videos">
        {dummyVideos.map((vid) => (
          <Video
            id={vid._id}
            src={vid.url}
            // channel={vid.channel}
            // description={vid.description}
            // like={vid.likes}
            // dislike={vid.dislike}
            // share={vid.shares}
            // comment={vid.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


{/* <iframe width="365" height="648" src="https://www.youtube.com/embed/gyJ8ChsdxTA" title="Carl Still Remembers Jim [4K Remake] | The Walking Dead #Shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}