"use client";
import React, { useEffect, useState } from "react";

function FeedPage() {
  const [posts, setPosts] = useState();
  const [error, setError] = useState(false);

  const getUserFeed = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/feed");
      if (!response.ok) {
        setError(true);
        return;
      }
      if (response.ok) {
        const result = await response.json();
        console.log("result", result);
        setError(false);
        setPosts(result.data.posts);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUserFeed();
  }, []);

  return (
    <div>
      <h1>User's Feed</h1>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <hr />
              <p>{post.title}</p>
              <p>{post.description}</p>
              <hr />
            </div>
          );
        })}

      {posts && posts.length < 15 && <h1>you have to create more posts!!!</h1>}
      {error && <h1>Something bad happened!</h1>}
    </div>
  );
}

export default FeedPage;

// create a type that defines a Post
//create a type that defines the response from the server you get in the fetch

//use the error boolean variable to display something to the user when the response is not ok
//prevent the scenario in which the array of post coming from the backend is empty
