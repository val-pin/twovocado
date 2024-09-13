"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { data } from "@/@types";

function FeedPage() {
  //additional file for types (post) or outside of fct
  const [posts, setPosts] = useState<data[]>([]);
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
    <Container className="bg-light rounded-bottom">
      <h2>Community&apos;s Feed</h2>

      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <hr />
              <p>{post.title}</p>
              <p>{post.description}</p>
              <img
                style={{
                  width: "300px",
                  borderRadius: "50%",
                }}
                src={post.picture}
              />
              <hr />
            </div>
          );
        })}

      {/* {posts && posts.length < 15 && (
            <h1>you have to create more posts!!!</h1>
          )} */}
      {/* //prevent the scenario in which the array of post coming from the backend is empty */}
      {!posts && error && <h1>Something bad happened!</h1>}
    </Container>
  );
}

export default FeedPage;

// create a type that defines a Post
//create a type that defines the response from the server you get in the fetch

//use the error boolean variable to display something to the user when the response is not ok
