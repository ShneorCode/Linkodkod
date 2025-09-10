import { readJsonPosts, addJsonPost } from "../services/postsServices.js";

export function getAllPostsController(req, res) {
  try {
    const posts = readJsonPosts();
    const postsJson = JSON.parse(posts);
    res.status(200).send(postsJson);
  } catch (error) {
    console.error("Failed to pull posts.", error);
  }
}

export async function createPostController(req, res) {
  try {
    const post = req.body;
    if (!post.user || !post.description) {
      return res.status(400).send(" error: Missing required post fields. ");
    }
    addJsonPost(post);
    res.status(201).send("added");
  } catch (error) {
    console.error("Post creation failed.", error);
  }
}
