// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import the CSS file
// import { Container, Navbar, Nav, Button } from 'react-bootstrap';
// import { MoreVert, Videocam, Search } from '@mui/icons-material';
// import Video from './components/Video';

// const dummyVideoData = [
//   { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/nrebb6pxPrk?si=0673JXwdiexW4peI' },
//   { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/nrebb6pxPrk?si=0673JXwdiexW4peI' },
//   { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/8ojbcGo3SH0' },
//   // Add more dummy data as needed
// ];

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Calculate the current index based on scroll position or any other logic
//       // For simplicity, let's assume scrolling down always moves to the next video
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyVideoData.length);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className="App mx-auto h-100" style={{ maxWidth: '400px' }}>
//       {/* Transparent Navbar */}
//       <Navbar className="mx-auto" bg="transparent" variant="dark" fixed="top" style={{ zIndex: 1000, maxWidth: '400px' }}>
//         <Container>
//           <Navbar.Brand href="#home" className="text-dark">Your Logo</Navbar.Brand>
//           <Nav className="ml-auto">
//             <Button variant="outline-light text-dark border-0 bg-transparent">
//               <Search />
//             </Button>
//             <Button variant="outline-light text-dark border-0 bg-transparent">
//               <Videocam />
//             </Button>
//             <Button variant="outline-light text-dark border-0 bg-transparent hover-bg-secondary">
//               <MoreVert />
//             </Button>
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Content */}
//       <Container fluid className="section bg-dark p-0" style={{ minHeight: 'calc(100vh - 56px)' }}>
//         {dummyVideoData.map((video, index) => (
//           <Video
//             key={video.id}
//             videoData={video}
//             handleError={() => { }}
//             isActive={index === currentIndex} // Pass an "isActive" prop to highlight the current video
//           />
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

// const VideoCard = ({ videoData, handleError }) => {
//   return (
//     <Card className={`py-2 mb-2}`}>
//       <div className="d-flex py-2 my-2 flex-column justify-content-between vh-100">
//         <div className="mt-4 mb-3" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%', height: '85%' }}>
//           {/* 56.25% is the aspect ratio 16:9 expressed as a percentage (9 / 16 * 100) */}
//           <video
//             id={videoData.id}
//             title={videoData.title}
//             src={videoData.url}
//             controls // Add controls for play/pause
//             className="embed-responsive-item mt-4 py-2"
//             style={{ position: 'absolute', top: 0, left: 0, height: '100%' }}
//             onError={handleError}
//           ></video>
//         </div>

//         <div className="mb-2" style={{ height: '15%' }}>
//           <div className="d-flex flex-column">
//             <h5 className={`animate__animated animate__infinite animate__slideInLeft}`}>{videoData.title}</h5>
//             <span>
//               tags
//             </span>
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex justify-content-between align-items-center">
//                 <p className="mb-0 mr-2"><AccountCircleIcon /></p>
//                 <p className="mb-0 mr-2">@Channelname</p>
//                 <p className="mb-0 p-1">
//                   <Button className="rounded-5" variant="dark">Subscribe</Button>
//                 </p>
//               </div>
//               <p className="mb-0 mr-2 d-flex align-items-center">
//                 <PlayCircleRoundedIcon style={{ fontSize: '34px' }} />
//               </p>
//             </div>
//           </div>
//           {/* Additional video information */}
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default VideoCard;
