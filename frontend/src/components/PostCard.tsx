export default function PostCard() {
  return (
    <div className="post-card">
      <img className="post-img"
        src="https://did.li/DdNZH"
        alt="img"
        width={"150px"}
        height={"150px"}
      />

      <div className="post-text">
        <p className="post-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ex
          animi labore esse, velit quas.
        </p>

        <div className="post-user-date-like">
          <div className="post-user">avi</div>
          <div className="post-date">08.01.2022</div>

          <div className="post-like">
            <div className="post-like-count">5</div>
            <div className="post-like-icon">👍</div>
          </div>
        </div>
      </div>
    </div>
  );
}
