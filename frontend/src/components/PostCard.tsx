import type {Post} from "../types/post.type";
export default function PostCard(post: Post) {
  return (
    <div className="post-card">
      <img
        className="post-img"
        src={post.img}
        alt="img"
        width={"150px"}
        height={"150px"}
      />

      <div className="post-text">
        <p className="post-description">{post.description}</p>

        <div className="post-user-date-like">
          <div className="post-user">{post.user}</div>
          <div className="post-date">{post.date}</div>

          <div className="post-like">
            <div className="post-like-count">{post.likes}</div>
            <button className="post-like-icon">👍</button>
          </div>
        </div>
      </div>
    </div>
  );
}
