import PostItem from "../postitem/PostItem";
import React, { useState, useEffect } from "react";
import "./Forside.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        <div className="some__container">
          <a href="https://www.linkedin.com/in/karl-gustav-løvendahl-35ab2324a/" className="some__container-flex">
            <LinkedInIcon className="some" /> / LinkedIn
          </a>
          <a href="mailto: kalle44@live.dk" className="some__container-flex">
            <EmailIcon className="some" /> / kalle44@live.dk
          </a>
        </div>
      </section>
    </>
  );
}
