import readJsonPosts from "../services/postsServices.js";

export default async function getAllPostsController(req, res) {
  try {
    const posts = await readJsonPosts();
    const postsJson = JSON.parse(posts);
    res.status(200).send(postsJson);
  } catch (error) {
    console.error("Failed to pull posts.", error);
  }
}
