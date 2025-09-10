import PostCard from "./PostCard";
import type Post from "../types/post.type.js";
import postsData from "../../../backend/db/posts.json";

export default function Posts() {
  return (
    <div className="posts">
      {postsData.map((post: Post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            user={post.user}
            img={post.img}
            description={post.description}
            date={post.date}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
}
