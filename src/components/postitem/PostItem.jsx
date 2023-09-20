import parse from "html-react-parser";

export default function PostItem({ post }) {
  return (
    <article className="landing__container-text">
      <h1 className="landing__title">{parse(post.title.rendered)}</h1>
      <span className="landing__para">{parse(post.content.rendered)}</span>
    </article>
  );
}
