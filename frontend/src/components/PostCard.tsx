import type Post from "../types/post.type";
export default function PostCard(data: Post) {
  return (
    <div className="post-card">
      <img
        className="post-img"
        src={data.img}
        alt="img"
        width={"150px"}
        height={"150px"}
      />

      <div className="post-text">
        <p className="post-description">{data.description}</p>

        <div className="post-user-date-like">
          <div className="post-user">{data.user}</div>
          <div className="post-date">{data.date}</div>

          <div className="post-like">
            <div className="post-like-count">{data.likes}</div>
            <div className="post-like-icon">👍</div>
          </div>
        </div>
      </div>
    </div>
  );
}
