import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type {Post} from "../types/post.type";

type PostConetextType = {
  posts: Post[];
  addPost: (post: Post) => void;
};

export const PostConetext = createContext<PostConetextType | undefined>({
  posts: [],
  addPost: () => {},
});

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };
  return (
    <PostConetext.Provider value={{ posts, addPost }}>
      {children}
    </PostConetext.Provider>
  );
};

export const useCheckPost = () => {
  const context = useContext(PostConetext);
  if (!context) {
    console.error("error")
  }
  return context
}