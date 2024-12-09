import Post from "./Post";
import classes from "./Posts.module.css";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";

function Posts({ isPosting, stoppedPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://127.0.0.1:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
    
  }, []);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
    console.log(posts);
  }

  function addPostHandler(postData) {
    fetch("http://127.0.0.1:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && isPosting && (
        <Modal>
          <NewPost onAddPost={addPostHandler} onCancel={stoppedPosting} />
        </Modal>
      )}

      <div className={classes.Posts}>
        {posts.length > 0 && (
          <ul className={classes.posts}>
            {/* <Post
              headline="Jakiś Zbuj"
              text="Jagódka jest jak truskawka(po czesku Jahoda), im pózniejsze lato tym bardziej się musisz powstrzymywać żeby jej nie schrupać🤭"
            /> */}

            {posts.map((post) => (
              <Post key={post.body} headline={post.author} text={post.body} />
            ))}
          </ul>
        )}
        {!isFetching && posts.length === 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>Nie ma jeszcze super cytatów</h2>
            <p>Możesz jakiegoś dodać :)</p>
          </div>
        )}
        {isFetching && (
          <div>
            <p> Loading posts...</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Posts;
