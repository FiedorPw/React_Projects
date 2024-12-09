// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import "./App.css";
import Post from "../components/Post";
import Posts from "../components/Posts";
import MainHeader from '../components/MainHeader';

function PostsApp() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler}/> */}
      <Posts/>
    </>
  );
}

export default PostsApp;
