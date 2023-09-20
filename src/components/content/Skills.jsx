import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Skills.css";
import PostItem from "../postitem/PostItem";

export default function Skills() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://wp.karlg.dk/wp-json/wp/v2/posts?_embed&categories=10"
      );
      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <>
      <h2 className="section__title">Skills</h2>
      <div className="skills__container-flex">
        <Card delay={200} img="./html.png" alt="HTML5 logo" />
        <Card delay={400} img="./css.png" alt="CSS3 logo" />
        <Card delay={600} img="./js.png" alt="JavaScript logo" />
        <Card delay={800} img="./react.png" alt="React.js logo" />
      </div>
      <div className="text__container">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
