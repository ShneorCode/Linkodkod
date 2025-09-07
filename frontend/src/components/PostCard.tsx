import type User from "../types/user.type";
export default function PostCard(props: User) {
  return (
    <div className="post-card">
      <img
        className="post-img"
        src={props.img}
        alt="img"
        width={"150px"}
        height={"150px"}
      />

      <div className="post-text">
        <p className="post-description">{props.description}</p>

        <div className="post-user-date-like">
          <div className="post-user">{props.user}</div>
          <div className="post-date">{props.date}</div>

          <div className="post-like">
            <div className="post-like-count">{props.likes}</div>
            <div className="post-like-icon">👍</div>
          </div>
        </div>
      </div>
    </div>
  );
}
