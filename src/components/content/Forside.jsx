import PostItem from "../postitem/PostItem";
import React, { useState, useEffect } from "react";
import "./Forside.css";
import Some from "./Some";

export default function Forside() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://wp.karlg.dk/wp-json/wp/v2/posts?_embed&categories=9"
      );
      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);

  return (
    <>
      <section className="landing__container fade-in">
        <div className="fade-bund">
          <img
            className="landing__img"
            src="./karl.png"
            alt="et billede af Karl Løvendahl"
          />
        </div>
        <div className="landing__some-text">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} /> //displayer data fra rest api
        ))}
        <Some />
        </div>
      </section>
    </>
  );
}
