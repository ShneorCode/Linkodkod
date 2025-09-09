import PostCard from "./PostCard";
import type Post from "../types/post.type.js";
import postsData from "../../../backend/db/posts.json";

export default function Posts() {
  return (
    <div className="posts">

        {postsData.map((data: Post) => {
          return (
            <PostCard
              id={data.id}
              user={data.user}
              img={data.img}
              description={data.description}
              date={data.date}
              likes={data.likes}
            />
          );
        })}
      </div>
  )
}
